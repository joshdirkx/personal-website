terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.31.0"
    }
  }

  backend "s3" {}
}

provider "aws" {
  alias  = "default"
  region = var.aws_region
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

locals {
  content_types = {
    ".html" : "text/html",
    ".css" : "text/css",
    ".js" : "text/javascript"
  }
}

### Frontend

resource "aws_s3_bucket" "this" {
  provider = aws.default

  bucket = "${data.aws_caller_identity.current.account_id}-jdio-frontend"
}

resource "aws_s3_bucket_ownership_controls" "this" {
  bucket = aws_s3_bucket.this.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "this" {
  provider = aws.default

  bucket = aws_s3_bucket.this.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false

}

resource "aws_s3_bucket_acl" "example" {
  provider = aws.default

  depends_on = [
    aws_s3_bucket_ownership_controls.this,
    aws_s3_bucket_public_access_block.this,
  ]

  bucket = aws_s3_bucket.this.id
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  provider = aws.default

  bucket = aws_s3_bucket.this.id
  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Sid" : "PublicReadGetObject",
          "Effect" : "Allow",
          "Principal" : "*",
          "Action" : "s3:GetObject",
          "Resource" : "arn:aws:s3:::${aws_s3_bucket.this.id}/*"
        }
      ]
    }
  )
}

resource "aws_s3_object" "this" {
  provider = aws.default

  for_each     = fileset(path.module, "content/**/*.{html,css,js}")
  bucket       = aws_s3_bucket.this.id
  key          = replace(each.value, "/^content//", "")
  source       = each.value
  content_type = lookup(local.content_types, regex("\\.[^.]+$", each.value), null)
  etag         = filemd5(each.value)
}

resource "aws_s3_bucket_website_configuration" "this" {
  provider = aws.default

  bucket = aws_s3_bucket.this.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_cloudfront_distribution" "this" {
  provider = aws.default

  aliases         = [data.aws_route53_zone.this.name]
  enabled         = true
  is_ipv6_enabled = true

  origin {
    domain_name = aws_s3_bucket_website_configuration.this.website_endpoint
    origin_id   = aws_s3_bucket.this.bucket_regional_domain_name

    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_read_timeout      = 30
      origin_ssl_protocols = [
        "TLSv1.2",
      ]
    }
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.this.arn
    ssl_support_method  = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  default_cache_behavior {
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.this.bucket_regional_domain_name
    max_ttl                = 0

    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }
  }

  price_class = "PriceClass_100"

  depends_on = [
    aws_acm_certificate_validation.this
  ]
}

resource "aws_acm_certificate" "this" {
  provider = aws.us_east_1

  domain_name       = data.aws_route53_zone.this.name
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cname_record" {
  provider = aws.default

  for_each = {
    for dvo in aws_acm_certificate.this.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.this.zone_id
}

resource "aws_acm_certificate_validation" "this" {
  provider = aws.us_east_1

  certificate_arn         = aws_acm_certificate.this.arn
  validation_record_fqdns = [for record in aws_route53_record.cname_record : record.fqdn]
}

resource "aws_route53_record" "a_record" {
  provider = aws.default

  zone_id = data.aws_route53_zone.this.zone_id
  name    = data.aws_route53_zone.this.name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.this.domain_name
    zone_id                = aws_cloudfront_distribution.this.hosted_zone_id
    evaluate_target_health = false
  }
}


### Medium RSS Lambda Function

resource "aws_ecr_repository" "this" {
  name = random_string.ecr_repository_name.result
}

resource "aws_iam_role" "this" {
  name = random_string.lambda_function_role_name.result

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
        Effect = "Allow"
        Sid    = ""
      },
    ]
  })
}

resource "aws_iam_role_policy" "this" {
  name = random_string.lambda_function_role_policy_name.result
  role = aws_iam_role.this.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "arn:aws:logs:*:*:*"
        Effect   = "Allow"
      },
    ]
  })
}

resource "null_resource" "this" {
  provisioner "local-exec" {
    command = "./lambda/build_image.sh --aws_region ${var.aws_region} --ecr_repository_name ${aws_ecr_repository.this.name} --image_tag ${var.image_tag}"
  }

  triggers = {
    always_run = "${timestamp()}"
  }
}

resource "aws_lambda_function" "this" {
  function_name = random_string.lambda_function_name.result
  architectures = ["x86_64"]
  role          = aws_iam_role.this.arn
  package_type  = "Image"
  image_uri     = "${data.aws_caller_identity.current.account_id}.dkr.ecr.${var.aws_region}.amazonaws.com/${aws_ecr_repository.this.name}:${var.image_tag}"

  depends_on = [
    null_resource.this
  ]
}

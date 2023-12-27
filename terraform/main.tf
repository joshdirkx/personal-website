terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.31.0"
    }
  }

  backend "s3" {}
}

provider "aws" {
  region = var.aws_region
}

locals {
  content_types = {
    ".html" : "text/html",
    ".css" : "text/css",
    ".js" : "text/javascript"
  }
}

resource "aws_s3_bucket" "this" {
  bucket = "${data.aws_caller_identity.current.account_id}-jdio-frontend"
}

resource "aws_s3_bucket_policy" "bucket_policy" {
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
  for_each     = fileset(path.module, "content/**/*.{html,css,js}")
  bucket       = aws_s3_bucket.this.id
  key          = replace(each.value, "/^content//", "")
  source       = each.value
  content_type = lookup(local.content_types, regex("\\.[^.]+$", each.value), null)
  etag         = filemd5(each.value)
}

resource "aws_s3_bucket_website_configuration" "this" {
  bucket = aws_s3_bucket.this.id

  index_document {
    suffix = "index.html"
  }
}
#
#resource "aws_cloudfront_distribution" "this" {
#  enabled         = true
#  is_ipv6_enabled = true
#
#  origin {
#    domain_name = aws_s3_bucket_website_configuration.this.website_endpoint
#    origin_id   = aws_s3_bucket.this.bucket_regional_domain_name
#
#    custom_origin_config {
#      http_port                = 80
#      https_port               = 443
#      origin_keepalive_timeout = 5
#      origin_protocol_policy   = "http-only"
#      origin_read_timeout      = 30
#      origin_ssl_protocols = [
#        "TLSv1.2",
#      ]
#    }
#  }
#
#  viewer_certificate {
#    cloudfront_default_certificate = true
#  }
#
#  restrictions {
#    geo_restriction {
#      restriction_type = "none"
#      locations        = []
#    }
#  }
#
#  default_cache_behavior {
#    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
#    viewer_protocol_policy = "redirect-to-https"
#    compress               = true
#    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
#    cached_methods         = ["GET", "HEAD"]
#    target_origin_id       = aws_s3_bucket.this.bucket_regional_domain_name
#  }
#}
#
#output "website_url" {
#  description = "Website URL (HTTPS)"
#  value       = aws_cloudfront_distribution.this.domain_name
#}

output "s3_url" {
  description = "S3 hosting URL (HTTP)"
  value       = aws_s3_bucket_website_configuration.this.website_endpoint
}
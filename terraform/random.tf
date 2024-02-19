resource "random_string" "lambda_function_name" {
  length  = 64
  special = false
  upper   = false
}

resource "random_string" "lambda_function_role_name" {
  length  = 64
  special = false
  upper   = false
}

resource "random_string" "lambda_function_role_policy_name" {
  length  = 64
  special = false
  upper   = false
}

resource "random_string" "ecr_repository_name" {
  length  = 64
  special = false
  upper   = false
}

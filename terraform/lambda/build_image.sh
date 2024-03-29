#!/bin/bash

# Initialize variables
AWS_REGION=""
ECR_REPOSITORY_NAME=""
IMAGE_TAG=""

# Function to display usage
usage() {
	echo "Usage: $0 --aws_region <aws_region> --ecr_repository_name <ecr_repository_name> --image_tag <image_tag>"
	exit 1
}

# Parse named arguments
while [ "$#" -gt 0 ]; do
	case "$1" in
	--aws_region)
		AWS_REGION="$2"
		shift 2
		;;
	--ecr_repository_name)
		ECR_REPOSITORY_NAME="$2"
		shift 2
		;;
	--image_tag)
		IMAGE_TAG="$2"
		shift 2
		;;
	*)
		usage
		;;
	esac
done

# Check if all arguments are provided
if [ -z "$AWS_REGION" ] || [ -z "$ECR_REPOSITORY_NAME" ] || [ -z "$IMAGE_TAG" ]; then
	usage
fi

# Retrieve the login command to use to authenticate your Docker client to your registry
aws ecr get-login-password --region "$AWS_REGION" | docker login --username AWS --password-stdin $(aws sts get-caller-identity --query Account --output text).dkr.ecr."$AWS_REGION".amazonaws.com

# Build your Docker image
docker build --no-cache -t "$ECR_REPOSITORY_NAME" lambda/

# Tag your Docker image
docker tag "$ECR_REPOSITORY_NAME":latest $(aws sts get-caller-identity --query Account --output text).dkr.ecr."$AWS_REGION".amazonaws.com/"$ECR_REPOSITORY_NAME":"$IMAGE_TAG"

# Push this image to your newly created AWS repository
docker push $(aws sts get-caller-identity --query Account --output text).dkr.ecr."$AWS_REGION".amazonaws.com/"$ECR_REPOSITORY_NAME":"$IMAGE_TAG"

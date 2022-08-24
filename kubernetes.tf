terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.20.0"
    }

    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.0.1"
    }
  }
}

data "terraform_remote_state" "eks" {
  backend = "remote"

  config = {
    organization = var.tfc_org_name
    workspaces = {
      name = var.tfc_network_workspace_name
    }
  }
}

# Retrieve EKS cluster information
provider "aws" {
  region = data.terraform_remote_state.eks.outputs.region
}

data "aws_eks_cluster" "cluster" {
  name = data.terraform_remote_state.eks.outputs.cluster_id
}

provider "kubernetes" {
  host                   = data.aws_eks_cluster.cluster.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority.0.data)
  exec {
    api_version = "client.authentication.k8s.io/v1alpha1"
    command     = "aws"
    args = [
      "eks",
      "get-token",
      "--cluster-name",
      data.aws_eks_cluster.cluster.name
    ]
  }
}

resource "kubernetes_secret" "mongo_secret" {
  metadata {
    name = "mongo-secret"
  }
  data {
    username = var.mongo_username
    password = var.mongo_password
  }
}

resource "kubernetes_deployment" "mongo" {
  metadata {
    name = "mongo-deployment"
    labels {
      app = "mongo"
    }
  }

  spec {
    replicas = 1
    selector {
      match_labels {
        app = "mongo"
      }
    }
    template {
      metadata {
        labels {
          app = "mongo"
        }
      }
      spec {
        containers {
          name  = "mongo"
          image = "mongo:latest"
          ports {
            container_port = 27017
          }
          env {
            name = "MONGO_INITDB_ROOT_USERNAME"
            value_from {
              secret_key_ref {
                name = "mongo-secret"
                key  = "username"
              }
            }
          }
          env {
            name = "MONGO_INITDB_ROOT_PASSWORD"
            value_from {
              secret_key_ref {
                name = "mongo-secret"
                key  = "password"
              }
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "mongo" {
  metadata {
    name = "mongo"
  }
  spec {
    type = "LoadBalancer"
    selector {
      app = "mongo"
    }
    port {
      app_protocol = "TCP"
      port         = 27017
      target_port  = 27017
    }
  }
}
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

    tfe = {
      source  = "hashicorp/tfe"
      version = "0.36.1"
    }
  }

  required_version = "1.2.7"

  cloud {
    organization = "wortech"

    workspaces {
      name = "web-app-dev"
    }
  }
}

# Retrieve outputs from networking-dev workspace
data "tfe_outputs" "eks" {
  organization = var.tfc_org_name
  workspace    = var.tfc_network_workspace_name
}

# Retrieve outputs from server-dev workspace
data "tfe_outputs" "server" {
  organization = "wortech"
  workspace    = "server-dev"
}

# Retrieve EKS cluster information
provider "aws" {
  region = data.tfe_outputs.eks.values.region
}

data "aws_eks_cluster" "cluster" {
  name = data.tfe_outputs.eks.values.cluster_id
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

resource "kubernetes_deployment" "nginx" {
  metadata {
    name = "nginx"
    labels = {
      app = "nginx"
    }
  }

  spec {
    replicas = 1
    selector {
      match_labels = {
        app = "nginx"
      }
    }
    template {
      metadata {
        labels = {
          app = "nginx"
        }
      }
      spec {
        container {
          name  = "nginx"
          image = "060696402958.dkr.ecr.us-east-1.amazonaws.com/wortech:latest"
          # image = "cwkuyke/wtc-nginx:latest"
          port {
            container_port = 80
          }
          env {
            name = "GRAPHQL_API_URI"
            value = "${data.tfe_outputs.server.values.lb_ip}:4000/graphql"
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "nginx" {
  metadata {
    name = "nginx"
  }
  spec {
    type = "LoadBalancer"
    selector = {
      app = "nginx"
    }
    port {
      app_protocol = "TCP"
      port         = 80
      target_port  = 80
    }
  }
}

resource "kubernetes_secret" "tls" {
  metadata {
    name = "tls-secret"
  }
  data = {
    tls.crt = base64decode(data.tfe_outputs.eks.values.certificate_authority.0.data)
    tls.key = base64decode(data.tfe_outputs.eks.values.private_key.0.data)
  }
  type = "kubernetes.io/tls"
}

resource "kubernetes_ingress" "nginx" {
  metadata {
    name = "nginx"
    labels = {
      app = "nginx"
    }
  }
  spec {
    rule {
      host = data.tfe_outputs.server.values.lb_ip
      http {
        path {
          path = "/graphql"
          backend {
            service_name = "mongo"
            service_port = 27017
          }
        }
        path {
          path = "/*"
          backend {
            service_name = "nginx"
            service_port = 80
          }
        }
      }
    }

    tls {
      secret_name = "tls-secret"
    }
  }
}
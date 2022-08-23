terraform {
  cloud {
    organization = "wortech"

    workspaces {
      name = "web-app-dev"
    }
  }

  required_version = "~> 1.2.0"
}
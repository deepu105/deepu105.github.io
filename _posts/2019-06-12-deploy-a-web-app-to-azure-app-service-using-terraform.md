---
title: Deploy a web app to Azure App Service using Terraform
description: Deploy a web app to Azure App Service using Terraform
tags: java, jhipster, azure, terraform
published: true
cover_image: https://thepracticaldev.s3.amazonaws.com/i/8mb4tyleqthxsvl1yxy6.png
canonical_url: https://deepu.js.org/deploy-a-web-app-to-azure-app-service-using-terraform
---

Deploying Java web applications to Azure is easy and has been tried, tested and explained many times by many people. My friend [Julien Dubois](https://dev.to/jdubois) has a nice series on it [here](https://dev.to/azure/creating-a-spring-boot-and-angular-application-for-azure-1-7-2mb8). Azure makes it really easy to use its [App Service](https://azure.microsoft.com/en-gb/services/app-service/) as it provides many different ways of deploying a web app.


If you are a modern full-stack Java developer there is a high chance that you are deploying your application as a Docker image. Hence today let's see how we can deploy a Java web application to Azure App Service using Docker and Terraform in the true spirit of infrastructure as code. The approach is pretty much the same for any web application that is built as a docker image and not necessarily tied down to just Java.

To try this out you would need to have [Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html), [NodeJS](https://nodejs.org/en/download/), [Terraform](https://www.terraform.io/), [Docker](https://docs.docker.com/install/) and [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) installed. Follow the links to install them if needed.

As one of the lead developer of [JHipster](https://www.jhipster.tech) (A handy development platform to generate, develop and deploy Spring Boot + Angular/React/Vue Web applications and Spring microservices), I would use a JHipster web application as the example here. So let's get started.

Let's build a very simple web application using JHipster. We will use the [JDL](https://www.jhipster.tech/jdl/) feature to scaffold our application.

We will use the below JDL for our application. Save it to a file named `app.jdl` in a directory where you want to create the application.

```jdl
application {
    config {
        baseName helloJHipster,
        applicationType monolith,
        packageName tech.jhipster.demo,
        authenticationType jwt,
        buildTool gradle,
        clientFramework react,
        databaseType sql,
        prodDatabaseType mysql,
        languages [en, nl]
    }
}

``` 

Now let us scaffold this using JHipster. Open your favorite console/terminal and run the below command in the directory where you saved the above JDL file, make sure it's an empty directory.

```shell
$ npx generator-jhipster import-jdl app.jdl
```

If you already have JHipster [installed](https://www.jhipster.tech/installation/) you can just run

```shell
$ jhipster import-jdl app.jdl
```

This will scaffold the application and install the required client-side dependencies. It might take a few minutes(NPM!) so maybe its time for that coffee.

You can see the application in action by running `./gradlew` on the same terminal once the scaffolding is done. You can refer to the generated `Readme.md` for more instructions regarding the application.

Now let's move on to the focus of this post, deploying this to Azure App Service with Terraform. Let us first build and publish the docker image for our application.

JHipster conveniently provides everything that is required to build docker images. Let us use the provided docker integration using [JIB](https://github.com/GoogleContainerTools/jib) to build the images. Run the below Gradle command.

```shell
$ ./gradlew bootJar -Pprod jibDockerBuild
```

Now let us tag and push this to our docker registry, make sure you have [logged into docker](https://docs.docker.com/engine/reference/commandline/login/) and run these commands. Use your own docker hub account name.

```shell
$ docker tag hellojhipster:latest deepu105/hellojhipster:latest
$ docker push deepu105/hellojhipster:latest

```
You can also push to Azure Container registry instead of Docker Hub if you like.

Now that our application and Docker images are ready, let's prepare the Terraform infrastructure for App Service and MySQL database. For other ways of deploying a JHipster web app to Azure check [this](https://www.jhipster.tech/azure/) out.

First, create a folder for our terraform files. Let's name the folder `terraform`.

Now create three files called `main.tf`, `outputs.tf`, and `variables.tf` in this folder.

Let us define the variables we will use. Save the below in `variables.tf`.

```hcl
variable "prefix" {
  description = "The prefix used for all resources in this example"
  default     = "xl"
}

variable "location" {
  description = "The Azure location where all resources in this example should be created"
}

variable "subscription_id" {
  description = "Azure Subscription ID to be used for billing"
}

variable "my_sql_master_password" {
  description = "MySql master password"
}

variable "docker_image" {
  description = "Docker image name"
}

variable "docker_image_tag" {
  description = "Docker image tag"
}

```

Now let us define our `main.tf`

First, let us add a configuration for Azure resource manager and create an Azure resource group to hold our resources. 

```hcl
provider "azurerm" {
  version         = "=1.24.0"
  subscription_id = "${var.subscription_id}"
}

resource "azurerm_resource_group" "main" {
  name     = "${var.prefix}-resources"
  location = "${var.location}"
}
```

Now let us add the configuration to create a [MySQL database server](https://www.terraform.io/docs/providers/azurerm/r/mysql_server.html) along with the required firewall rules to let App Service access the DB. If you want to add local access from your machine add a firewall rule block for your IP as well.

```hcl
# This creates a MySQL server
resource "azurerm_mysql_server" "main" {
  name                = "${var.prefix}-mysql-server"
  location            = "${azurerm_resource_group.main.location}"
  resource_group_name = "${azurerm_resource_group.main.name}"

  sku {
    name     = "B_Gen5_2"
    capacity = 2
    tier     = "Basic"
    family   = "Gen5"
  }

  storage_profile {
    storage_mb            = 5120
    backup_retention_days = 7
    geo_redundant_backup  = "Disabled"
  }

  administrator_login          = "mysqladminun"
  administrator_login_password = "${var.my_sql_master_password}"
  version                      = "5.7"
  ssl_enforcement              = "Disabled"
}

# This is the database that our application will use
resource "azurerm_mysql_database" "main" {
  name                = "${var.prefix}_mysql_db"
  resource_group_name = "${azurerm_resource_group.main.name}"
  server_name         = "${azurerm_mysql_server.main.name}"
  charset             = "utf8"
  collation           = "utf8_unicode_ci"
}

# This rule is to enable the 'Allow access to Azure services' checkbox
resource "azurerm_mysql_firewall_rule" "main" {
  name                = "${var.prefix}-mysql-firewall"
  resource_group_name = "${azurerm_resource_group.main.name}"
  server_name         = "${azurerm_mysql_server.main.name}"
  start_ip_address    = "0.0.0.0"
  end_ip_address      = "0.0.0.0"
}

```

This will create a MySQL server, a database for our app on the server and enable access from App Service.

Now let us configure the [App Service](https://www.terraform.io/docs/providers/azurerm/r/app_service.html) itself along with a service plan.

```hcl
# This creates the plan that the service use
resource "azurerm_app_service_plan" "main" {
  name                = "${var.prefix}-asp"
  location            = "${azurerm_resource_group.main.location}"
  resource_group_name = "${azurerm_resource_group.main.name}"
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Standard"
    size = "S1"
  }
}

# This creates the service definition
resource "azurerm_app_service" "main" {
  name                = "${var.prefix}-appservice"
  location            = "${azurerm_resource_group.main.location}"
  resource_group_name = "${azurerm_resource_group.main.name}"
  app_service_plan_id = "${azurerm_app_service_plan.main.id}"

  site_config {
    app_command_line = ""
    linux_fx_version = "DOCKER|${var.docker_image}:${var.docker_image_tag}"
    always_on        = true
  }

  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"
    "DOCKER_REGISTRY_SERVER_URL"          = "https://index.docker.io"

    # These are app specific environment variables
    "SPRING_PROFILES_ACTIVE"     = "prod,swagger"
    "SPRING_DATASOURCE_URL"      = "jdbc:mysql://${azurerm_mysql_server.main.fqdn}:3306/${azurerm_mysql_database.main.name}?useUnicode=true&characterEncoding=utf8&useSSL=false&useLegacyDatetimeCode=false&serverTimezone=UTC"
    "SPRING_DATASOURCE_USERNAME" = "${azurerm_mysql_server.main.administrator_login}@${azurerm_mysql_server.main.name}"
    "SPRING_DATASOURCE_PASSWORD" = "${var.my_sql_master_password}"
  }
}

```

In this configuration, under `site_config` we use `linux_fx_version` to declare our docker image and set `always_on` to true so that the application is not shut down when there is inactivity for some time.

In the `app_settings` section we need to disable storage using the flag `WEBSITES_ENABLE_APP_SERVICE_STORAGE` and also specify `DOCKER_REGISTRY_SERVER_URL`. Everything else is specific to our app. The flags passed to the MySQL connection URL is important.

Now that our `main.tf` is ready let us define some output properties that are handy. In the `outputs.tf` file add the below

```hcl
output "app_service_name" {
  value = "${azurerm_app_service.main.name}"
}

output "app_service_default_hostname" {
  value = "https://${azurerm_app_service.main.default_site_hostname}"
}
```

Now we are ready to rock and roll! let us deploy the app. Make sure you have set up your Azure CLI and have [logged in](https://docs.microsoft.com/en-us/cli/azure/authenticate-azure-cli?view=azure-cli-latest) using `az login`. Now in a terminal/console navigate to the `terraform` folder we created and execute these commands. Please change the values for `prefix`, `location` & `docker_image` accordingly.

```shell
$ terraform init

$ terraform apply \
-var prefix=myAwesomeApp \
-var location=northeurope \
-var docker_image=deepu105/hellojhipster \
-var docker_image_tag=latest
```

This will prompt you to enter a master password for MySQL server and your Azure subscription ID(You can find this from Azure portal or by running `az account list`- the `id` field is the subscription ID). Once you provide the values and confirm, Terraform will get to work and will start creating the resources. this could take a while since we are provisioning a Database server. Wait for it or go have that second coffee ;)

Once the deployment is complete, Terraform will print out the outputs which include the `app_service_default_hostname`. Copy the URL and open it in your favorite browser. The first time could take a while since the app will be started(cold start) only during the first request.

![](https://thepracticaldev.s3.amazonaws.com/i/t5kcj7r3r9w6bxghe350.png)

I hope you found this useful. This is my first post in [dev.to](https://dev.to/deepu105), I hope to migrate my blogs from [Medium](https://medium.com/@deepu105) to [dev.to](https://dev.to/deepu105) soon.

If you like this article, please leave a like or a comment.

You can follow me on [Twitter](https://twitter.com/deepu105) and [LinkedIn](https://www.linkedin.com/in/deepu05/).

My other related posts:

- [Create full Microservice stack using JHipster Domain Language under 30 minutes](https://medium.com/@deepu105/create-full-microservice-stack-using-jhipster-domain-language-under-30-minutes-ecc6e7fc3f77)
- [Deploying JHipster Microservices on Azure Kubernetes Service (AKS)](https://medium.com/@deepu105/deploying-jhipster-microservices-on-azure-kubernetes-service-aks-fb46991746ba)
- [How to set up JHipster microservices with Istio service mesh on Kubernetes](https://medium.freecodecamp.org/jhipster-microservices-with-istio-service-mesh-on-kubernetes-a7d0158ba9a3)
- [Continuous delivery of Microservices with XebiaLabs — a.k.a DevOps as Code](https://medium.com/xebialabs/continuous-delivery-of-microservices-with-xebialabs-a-k-a-devops-as-code-b5f0c3b2b1c8)

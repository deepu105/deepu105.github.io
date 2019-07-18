---
title: Create full Microservice stack using JHipster Domain Language under 30 minutes
description: Create full Microservice stack using JHipster Domain Language under 30 minutes
tags: jhipster, java, microservices, docker
published: true
cover_image: https://cdn-images-1.medium.com/max/1000/1*b4krMVZ-mqjxAIh_EM1jhQ.png
canonical_url: https://medium.com/jhipster/create-full-microservice-stack-using-jhipster-domain-language-under-30-minutes-ecc6e7fc3f77
series: Microservices with JHipster
---

It’s been quite a while since I wrote a blog, I did [a few](https://mytechnorage.blogspot.com/) some years ago but never really continued writing. So when I decided to start writing again, I didn’t have to think a lot about a topic as it was very obvious — [JHipster](https://www.jhipster.tech/).

JHipster is a development platform for Java web applications and microservices development. If you are a JVM developer you might have already heard about [JHipster](https://www.jhipster.tech/). If not, well, you are missing out on a lot and I highly recommend you check it out. You can also check out my book “**Full Stack Development with JHipster**” on [Amazon](https://www.amazon.com/Stack-Development-JHipster-Deepu-Sasidharan/dp/178847631X) and [Packt](https://www.packtpub.com/application-development/full-stack-development-jhipster) to learn about JHipster.

I have been working on JHipster from April 2015 and the coolest feature that I got to implement so far is definitely multiple applications generation using JDL. This feature is available in the latest version of JHipster. If you are not familiar with JDL, I recommend you to check out the docs at [https://www.jhipster.tech/jdl/](https://www.jhipster.tech/jdl/)

## The E-Commerce application

So let us see how we can create a microservice stack using JHipster. We will build an e-commerce store today. The stack includes-

* Service discovery using [JHipster Registry](https://www.jhipster.tech/jhipster-registry/), a Spring boot application that packs Eureka server and Spring cloud config server.

* [API management and Gateway](https://www.jhipster.tech/api-gateway/) using Spring Boot, Netflix Zuul, ReactJS, and Swagger.

* Microservices using Spring Boot.

* Monitoring using [JHipster Console](https://www.jhipster.tech/monitoring/#jhipster-console) which is made of the Elastic stack(ELK) and Zipkin.

![Microservice application architecture](https://cdn-images-1.medium.com/max/2000/1*b4krMVZ-mqjxAIh_EM1jhQ.png)*Microservice application architecture*

The Gateway routes incoming requests to two microservices, Invoice application, and Notification application.

### Requirements

In order to follow this tutorial, you would need a recent version of **Docker**, **Docker-compose**, **NodeJS** and **Java** installed on your computer. The below are the versions I have installed(**Update**: With JHipster 6+ you can use Java 11 & 12).

    $ docker -v                                                                                                                       
    Docker version 18.06.1-ce, build e68fc7a
    
    $ docker-compose -v                                
    docker-compose version 1.20.1, build 5d8c71b
    
    $ node -v                
    v8.11.4
    
    $ java -version          
    openjdk version "1.8.0_212"
    OpenJDK Runtime Environment (Zulu 8.38.0.13-CA-linux64) (build 1.8.0_212-b04)
    OpenJDK 64-Bit Server VM (Zulu 8.38.0.13-CA-linux64) (build 25.212-b04, mixed mode)


First, install the latest version of JHipster

    $ npm install generator-jhipster -g

Verify that you have version **5.3.4** or above by running

    $ jhipster --version

### Creating the JDL

Now let us create our JDL. Head over to the [JDL Studio](https://start.jhipster.tech/jdl-studio/) or your favorite IDE/Editor(*You can use [JHipster IDE](https://www.jhipster.tech/jhipster-ide/) plugin if you like*).

First, let us define our applications. We will start with the Gateway

    application {
      config {
        baseName store,
        applicationType gateway,
        packageName com.jhipster.demo.store,
        serviceDiscoveryType eureka,
        authenticationType jwt,
        prodDatabaseType mysql,
        cacheProvider hazelcast,
        buildTool gradle,
        clientFramework react,
        testFrameworks [protractor]
      }
      entities *
    }

Most of the options are self-explanatory, we are building an application named **Store** of type **Gateway** with **JWT** authentication and **Eureka**-based service discovery. The application uses a **MySQL** database and **Hazelcast** for the cache. It's built using **Gradle**. For the client-side, it uses **React** and **Sass**. It also has **Protractor** for end-to-end testing.

At the end of the definition you can see `entities *`, we will come to this later.

Now let us define our Invoice microservice

    application {
      config {
        baseName invoice,
        applicationType microservice,
        packageName com.jhipster.demo.invoice,
        serviceDiscoveryType eureka,
        authenticationType jwt,
        prodDatabaseType mysql,
        buildTool gradle,
        serverPort 8081
      }
      entities Invoice, Shipment
    }

It follows similar options like our Gateway and since it is microservice it doesn’t define any client-side options and also skips user management as it will be handled by the Gateway. Additionally, we have also mentioned a custom port **8081** since we do not want this application to conflict with the default port 8080 used by the Gateway.

Now let us define the second microservice, the Notification application

    application {
      config {
        baseName notification,
        applicationType microservice,
        packageName com.jhipster.demo.notification,
        serviceDiscoveryType eureka,
        authenticationType jwt,
        databaseType mongodb,
        cacheProvider no,
        enableHibernateCache false,
        buildTool gradle,
        serverPort 8082
      }
      entities Notification
    }

This application follows many options similar to the Gateway and Invoice application but instead of using MySQL it uses **MongoDB** as its database and also disables cache.

Now that our application definitions are done, we will proceed to define our entity model.

For our Gateway store application, let us define the below entities and enums

    /** Product sold by the Online store */
    entity Product {
        name String required
        description String
        price BigDecimal required min(0)
        size Size required
        image ImageBlob
    }

    enum Size {
        S, M, L, XL, XXL
    }

    entity ProductCategory {
        name String required
        description String
    }

    entity Customer {
        firstName String required
        lastName String required
        gender Gender required
        email String required pattern(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
        phone String required
        addressLine1 String required
        addressLine2 String
        city String required
        country String required
    }

    enum Gender {
        MALE, FEMALE, OTHER
    }

    entity ProductOrder {
        placedDate Instant required
        status OrderStatus required
        code String required
        invoiceId Long
    }

    enum OrderStatus {
        COMPLETED, PENDING, CANCELLED
    }

    entity OrderItem {
        quantity Integer required min(0)
        totalPrice BigDecimal required min(0)
        status OrderItemStatus required
    }

    enum OrderItemStatus {
        AVAILABLE, OUT_OF_STOCK, BACK_ORDER
    }

    relationship OneToOne {
        Customer{user(login) required} to User
    }

    relationship ManyToOne {
        OrderItem{product(name) required} to Product
    }

    relationship OneToMany {
        Customer{order} to ProductOrder{customer(email) required},
        ProductOrder{orderItem} to OrderItem{order(code) required},
        ProductCategory{product} to Product{productCategory(name)}
    }

    service Product, ProductCategory, Customer, ProductOrder, OrderItem with serviceClass
    paginate Product, Customer, ProductOrder, OrderItem with pagination

The JDL defines the entities, enums, the relationship between entities and options like pagination and service layer.

The entity field definition follows the syntax

    entity <entity name> {
      <field name> <type> [<validation>*]
    }

The relationship definition follows the syntax

    relationship (OneToMany | ManyToOne | OneToOne | ManyToMany) {
        <from entity>[{<relationship name>[(<display field>)]}] 
        to 
        <to entity>[{<relationship name>[(<display field>)]}]
    }

Refer the [JDL docs](https://www.jhipster.tech/jdl/) for full DSL reference.

The Invoice microservice application has the following entities

    entity Invoice {
        code String required
        date Instant required
        details String
        status InvoiceStatus required
        paymentMethod PaymentMethod required
        paymentDate Instant required
        paymentAmount BigDecimal required
    }

    enum InvoiceStatus {
        PAID, ISSUED, CANCELLED
    }

    entity Shipment {
        trackingCode String
        date Instant required
        details String
    }

    enum PaymentMethod {
        CREDIT_CARD, CASH_ON_DELIVERY, PAYPAL
    }

    relationship OneToMany {
        Invoice{shipment} to Shipment{invoice(code) required}
    }

    service Invoice, Shipment with serviceClass
    paginate Invoice, Shipment with pagination
    microservice Invoice, Shipment with invoice

Pay attention to the last **microservice** option declared here, it specifies that these entities belong to the microservice named **invoice** so that our Gateway knows where to route requests for these entities.

Now let us see the entities for the Notification microservice application

    entity Notification {
        date Instant required
        details String
        sentDate Instant required
        format NotificationType required
        userId Long required
        productId Long required
    }

    enum NotificationType {
        EMAIL, SMS, PARCEL
    }

    microservice Notification with notification

Now let us go back to the entities keyword we used in our application definitions.

    application {
      config {
        ...
      }
      entities *
    }

    application {
      config {
        ...
      }
      entities Invoice, Shipment
    }

    application {
      config {
        ...
      }
      entities Notification
    }

    /* Entities for Store Gateway */

    entity Product {
        ...
    }

    entity ProductCategory {
        ...
    }

    entity Customer {
        ...
    }

    entity ProductOrder {
        ...
    }

    entity OrderItem {
        ...
    }

    microservice Invoice, Shipment with invoice

    /* Entities for Invoice microservice */
    entity Invoice {
        ...
    }

    entity Shipment {
        ...
    }

    /* Entities for notification microservice */

    entity Notification {
        ...
    }

    microservice Notification with notification

Here we instruct the store gateway application that it should contain all the entities defined in the JDL and the gateway will know to skip server-side code for the entities that belong to another microservice and hence will only generate the client-side code for those, here namely **Invoice**, **Shipment**, and **Notification**. We also instruct the Invoice application and Notification application to include its entities.

### Generating the applications

Create a folder where we want to create our microservice stack.

    $ mkdir ecommerce && cd ecommerce

Now, let us put everything together into a JDL file. Let us call it `app.jdl` and save it into this folder.

    application {
      config {
        baseName store,
        applicationType gateway,
        packageName com.jhipster.demo.store,
        serviceDiscoveryType eureka,
        authenticationType jwt,
        prodDatabaseType mysql,
        cacheProvider hazelcast,
        buildTool gradle,
        clientFramework react,
        testFrameworks [protractor]
      }
      entities *
    }

    application {
      config {
        baseName invoice,
        applicationType microservice,
        packageName com.jhipster.demo.invoice,
        serviceDiscoveryType eureka,
        authenticationType jwt,
        prodDatabaseType mysql,
        buildTool gradle,
        serverPort 8081
      }
      entities Invoice, Shipment
    }

    application {
      config {
        baseName notification,
        applicationType microservice,
        packageName com.jhipster.demo.notification,
        serviceDiscoveryType eureka,
        authenticationType jwt,
        databaseType mongodb,
        cacheProvider no,
        enableHibernateCache false,
        buildTool gradle,
        serverPort 8082
      }
      entities Notification
    }

    /* Entities for Store Gateway */

    /** Product sold by the Online store */
    entity Product {
        name String required
        description String
        price BigDecimal required min(0)
        size Size required
        image ImageBlob
    }

    enum Size {
        S, M, L, XL, XXL
    }

    entity ProductCategory {
        name String required
        description String
    }

    entity Customer {
        firstName String required
        lastName String required
        gender Gender required
        email String required pattern(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
        phone String required
        addressLine1 String required
        addressLine2 String
        city String required
        country String required
    }

    enum Gender {
        MALE, FEMALE, OTHER
    }

    entity ProductOrder {
        placedDate Instant required
        status OrderStatus required
        code String required
        invoiceId Long
    }

    enum OrderStatus {
        COMPLETED, PENDING, CANCELLED
    }

    entity OrderItem {
        quantity Integer required min(0)
        totalPrice BigDecimal required min(0)
        status OrderItemStatus required
    }

    enum OrderItemStatus {
        AVAILABLE, OUT_OF_STOCK, BACK_ORDER
    }

    relationship OneToOne {
        Customer{user(login) required} to User
    }

    relationship ManyToOne {
     OrderItem{product(name) required} to Product
    }

    relationship OneToMany {
       Customer{order} to ProductOrder{customer(email) required},
       ProductOrder{orderItem} to OrderItem{order(code) required} ,
       ProductCategory{product} to Product{productCategory(name)}
    }

    service Product, ProductCategory, Customer, ProductOrder, OrderItem with serviceClass
    paginate Product, Customer, ProductOrder, OrderItem with pagination

    /* Entities for Invoice microservice */
    entity Invoice {
        code String required
        date Instant required
        details String
        status InvoiceStatus required
        paymentMethod PaymentMethod required
        paymentDate Instant required
        paymentAmount BigDecimal required
    }

    enum InvoiceStatus {
        PAID, ISSUED, CANCELLED
    }

    entity Shipment {
        trackingCode String
        date Instant required
        details String
    }

    enum PaymentMethod {
        CREDIT_CARD, CASH_ON_DELIVERY, PAYPAL
    }

    relationship OneToMany {
        Invoice{shipment} to Shipment{invoice(code) required}
    }

    service Invoice, Shipment with serviceClass
    paginate Invoice, Shipment with pagination
    microservice Invoice, Shipment with invoice

    /* Entities for notification microservice */

    entity Notification {
        date Instant required
        details String
        sentDate Instant required
        format NotificationType required
        userId Long required
        productId Long required
    }

    enum NotificationType {
        EMAIL, SMS, PARCEL
    }

    microservice Notification with notification

Now let us invoke JHipster CLI to import this file

    $ jhipster import-jdl app.jdl

This will create the **store**, **invoice** and **notification** folders and will do the below in each of the folders

* Generate the appropriate application and entities configuration.

* Generate the application and entities source code based on the configurations.

* Install the NPM dependencies for the application.

Once the process is complete you should see the below on your console

    Entity Product generated successfully.
    Entity ProductCategory generated successfully.
    Entity Customer generated successfully.
    Entity ProductOrder generated successfully.
    Entity OrderItem generated successfully.
    Entity Invoice generated successfully.
    Entity Shipment generated successfully.
    Entity Notification generated successfully.
    Congratulations, JHipster execution is complete!

Walk around the generated code to familiarize yourself.

### Running the applications with Docker

Now that our applications are created its time to test them locally using Docker. To do this first let us generate some docker compose configurations using JHipster.

Create a new folder inside the **ecommerce** folder and run the JHipster docker-compose command

    $ mkdir docker-compose && cd docker-compose
    $ jhipster docker-compose

It will prompt you with a few questions, choose the answers as highlighted below

    🐳  Welcome to the JHipster Docker Compose Sub-Generator 🐳
    Files will be generated in folder: /home/deepu/workspace/temp/ecommerce/docker-compose
    ✔ Docker is installed

    ? Which *type* of application would you like to deploy? Microservice application

    ? Which *type* of gateway would you like to use? JHipster gateway based on Netflix Zuul

    ? Enter the root directory where your gateway(s) and microservices are located ../

    3 applications found at /home/deepu/workspace/temp/ecommerce/
    ? Which applications do you want to include in your configuration? invoice, notification, store

    ? Which applications do you want to use with clustered databases (only available with MongoDB and Couchbase)? 

    ? Do you want to setup monitoring for your applications ? Yes, for logs and metrics with the JHipster Console (based on ELK and Zipkin)

    ? You have selected the JHipster Console which is based on the ELK stack and additional technologies, which one do you want to use ? Zipkin, for distributed tracing (only compatible with
     JHipster >= v4.2.0)

    JHipster registry detected as the service discovery and configuration provider used by your apps
    ? Enter the admin password used to secure the JHipster Registry? admin

This will generate all the required docker-compose configurations for the stack and will also print out further instructions to build the docker images.

**Note:** In the latest JHipster versions we migrated to using [Jib](https://github.com/GoogleContainerTools/jib) for creating Docker images. This is a huge improvement over the Docker Maven plugin that we were using, as a result the command to create an image has changed to `./gradlew -Pprod bootWar jibDockerBuild`.

    Docker Compose configuration generated with missing images!
    To generate the missing Docker image(s), please run:
      ./gradlew -Pprod bootWar jibDockerBuild in /home/deepu/workspace/temp/ecommerce/invoice
      ./gradlew -Pprod bootWar jibDockerBuild in /home/deepu/workspace/temp/ecommerce/notification
      ./gradlew -Pprod bootWar jibDockerBuild in /home/deepu/workspace/temp/ecommerce/store

Follow the instructions and build the docker images. Once all 3 images are built run the below command from the **docker-compose** folder to fire everything up.

    $ docker-compose up -d

Once the containers start you can stream the logs using below command

    $ docker-compose logs -f

Now point your favorite browser to [http://localhost:8080/](http://localhost:8080/) and see the E-Commerce microservice application in action.

![Gateway application(Store)](https://cdn-images-1.medium.com/max/2604/1*NR3QX_Q88_a4cWJ9X3fcnw.png)*Gateway application(Store)*

You can see the JHipster registry in action at [http://localhost:8761/](http://localhost:8761/#/)

![JHipster Registry](https://cdn-images-1.medium.com/max/2604/1*F-MV1Q_jsBvUHHeInJR8TA.png)*JHipster Registry*

And finally the JHipster console at [http://localhost:5601](http://localhost:5601)/

![JHipster Console- Kibana dashboard](https://cdn-images-1.medium.com/max/2616/1*v2tJsdLIJcVwm7RDAI_YVg.png)*JHipster Console- Kibana dashboard*

Once you are done playing around, you can shut everything down by running the below command on the **docker-compose** folder

    docker-compose down

Hope you had fun creating microservices using JHipster. To learn how to convert a JHipster monolith to microservices check out my book “*Full Stack Development with JHipster*” on [Amazon](https://www.amazon.com/Stack-Development-JHipster-Deepu-Sasidharan/dp/178847631X) and [Packt](https://www.packtpub.com/application-development/full-stack-development-jhipster).

In the coming weeks, I’ll write some posts about deploying this microservice stack to various cloud providers like GCP, Azure, AWS, Heroku and so on.

If you like JHipster don't forget to give it a star on [Github](https://github.com/jhipster/generator-jhipster).

If you like this article, please leave a like or a comment.

You can follow me on [Twitter](https://twitter.com/deepu105) and [LinkedIn](https://www.linkedin.com/in/deepu05/).

My other related posts:

1. [Deploying JHipster Microservices on Azure Kubernetes Service (AKS)](https://dev.to/deepu105/deploying-jhipster-microservices-on-azure-kubernetes-service-aks-2g6d)

1. [JHipster microservices with Istio service mesh on Kubernetes](https://medium.com/@deepu105/jhipster-microservices-with-istio-service-mesh-on-kubernetes-a7d0158ba9a3)

Originally published in [Medium](https://medium.com/jhipster/create-full-microservice-stack-using-jhipster-domain-language-under-30-minutes-ecc6e7fc3f77) on Sep 22, 2018
# Chapter 2. Installing and Configuring DreamFactory



## Choosing a DreamFactory Version

Regardless of whether you'd like to spin up a DreamFactory instance on your local laptop, within a cloud environment such as AWS or Google Cloud, or Docker, we have a ready-made solution for you!

### The DreamFactory GitHub Repository

Cloning DreamFactory's OSS repository has long been by far the most popular way to access the software. To clone the repository you'll need to install a Git client on your local machine or a server, at which point you can clone it using the following command:

    $ git clone https://github.com/dreamfactorysoftware/dreamfactory/

DreamFactory is built atop the very popular [Laravel Framework](http://www.laravel.com), which is in turn built atop PHP. This means DreamFactory is almost ubiquitously supported in all hosting environments; you'll just need to make sure your hosting environment is running PHP 7.1 or greater, a recent version of a web server such as Apache or NGINX, access to one of four databases for storing configuration data (MySQL/MariaDB, PostgreSQL, SQLite, and MS SQL Server are supported), and that you have adequate permissions to install a few requisite PHP extensions. You can learn more about the required software and extensions via our wiki:

[http://wiki.dreamfactory.com/DreamFactory/Installation#GitHub](http://wiki.dreamfactory.com/DreamFactory/Installation#GitHub)

### Docker

Our Docker container is increasingly popular, and includes everything you need to run DreamFactory including Ubuntu 16.04, PHP 7.1, and the NGINX web server. It also includes all of the required PHP extensions, meaning you should be able to begin experimenting with the latest DreamFactory version as quickly as you can spin up the container! To learn more about the container, head over to our df-docker repository:

[https://github.com/dreamfactorysoftware/df-docker](https://github.com/dreamfactorysoftware/df-docker)

### Bitnami

Many users simply want to evaluate DreamFactory without putting any time or effort whatsoever into procuring a test server or fiddling with configuration issues. If you fall into this category then our Bitnami point-and-click installers are for you! These virtual machines include everything you need to begin running DreamFactory, and include a built-in database server, web server, PHP runtime, and a bunch of other useful software.

Installers are available for Linux, Windows, and Mac OS X. Download your desired version via the following link:

[https://www.dreamfactory.com/downloads](https://www.dreamfactory.com/downloads)

### Cloud Images

Cloud environments are the hosting solution of choice these days, and for good reason. Cloud service providers offer unsurpassed levels of stability, performance, and security, and countless additional features capable of maximizing IT teams' efficiency while minimizing costs. DreamFactory offers Bitnami images targeting all of the major cloud providers, including AWS, Azure, Google, and Oracle Cloud. Download your desired version via the following link:

[https://www.dreamfactory.com/downloads](https://www.dreamfactory.com/downloads)

## Configuring DreamFactory

If you've cloned the GitHub repository, you'll need to carry out a few additional steps before launching your DreamFactory instance. The first step involves installing the required PHP packages using Composer:

    $ composer install --no-dev

The `--no-dev` option tells Composer to not install the development-specific dependencies. These development dependencies are used by our OSS community and internal developers alike to assist in software development. You can review the list of both required and developmental dependencies by opening the `composer.json` file found in the project's root directory.

If you receive an error regarding `TODO WHAT IS THIS ERROR TODO`, and you don't require MongoDB, then you can quickly hurdle the issue by additionally supplying the `--ignore-platform-reqs` option when running Composer.

With the packages installed, you'll next run the following command:

    $ php artisan df:env

TODO

    $ php artisan df:setup

### Introducing the .env File



### Enabling Debugging and Logging


## Choosing an HTTP Client

Whether your API consumer is an iPhone or Android application, a SPA (Single Page Application), or another server altogether, that consumer is often referred to as the *client*. The client issues HTTP requests to the REST API, parsing the responses and reacting accordingly. Although in most cases your team will use libraries such as [Alamofire](https://github.com/Alamofire/Alamofire) or [Axios](https://github.com/axios/axios) to manage these requests, you'll often want to interact with the APIs in a much more fluid manner during the investigatory and learning phase. The API Docs feature serves this need well, however the API Docs interface lacks the ability to bookmark and otherwise persist queries, manage parameters programmatically using variables, and other features useful for maintaining a set of easily accessible configurations.

Fortunately, there are a number of HTTP clients which fill this void very well. Two of the most popular are [Insomnia](TODO) and [Postman](TODO), which are available on OSX and multiple operating systems, respectively. In this section we'll introduce you to both HTTP clients, and as an added bonus talk about the ubiquitous cURL client which is quite possibly the most popular piece of software you've never heard of.

### Insomnia

TODO

### POSTMan

TODO

### cURL

TODO

cURL's lack of a polished interface may lead you to believe it's inferior to Insomnia and Postman. Not so! cURL is an incomparably capable bit of software


## Conclusion

TODO 

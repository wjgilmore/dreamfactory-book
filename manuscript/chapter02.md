---
sidebar: auto
---

# Chapter 2. Installing and Configuring DreamFactory

In this chapter you'll learn how to install and configure DreamFactory. A number of installation solutions are available, including GitHub repository, point-and-click installers, Docker container, and cloud-specific installers. Be sure to carefully read through the set of options before making a decision, because some might be more suitable than others for your particular situation.

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

## Installing and Configuring DreamFactory from Source

If you've cloned the GitHub repository, you'll need to carry out a few additional steps before launching your DreamFactory instance. The first step involves ensuring your server requirements have been met. Let's tackle those first, followed by an overview of software installation.

### Configuring Your Server

::: warning
This guide is under heavy development, and certain parts are complete. We suggest reading through the current installation documentation, [available here](http://wiki.dreamfactory.com/DreamFactory/Installation#GitHub).
:::

Server configuration is going to vary according to your operating system. To ensure the instructions are as specific and straightforward as possible, we've broken them out into subchapters:

* [Debian / Ubuntu](chapter02/ubuntu-server-configuration.md)

If you plan on using PHP in conjunction with one of the following databases, please review the pertinent subchapters presented below:

* [Microsoft SQL Server](chapter02/microsoft-sql-server.md)
* [SAP SQL Anywhere](chapter02/sap-sql-anywhere.md)

### Installing DreamFactory

The first step involves installing the required PHP packages using Composer:

    $ composer install --no-dev

The `--no-dev` option tells Composer to not install the development-specific dependencies. These development dependencies are used by our OSS community and internal developers alike to assist in software development. You can review the list of both required and developmental dependencies by opening the `composer.json` file found in the project's root directory.

If you receive an error regarding `Your requirements could not be resolved to an installable set of packages`, and you don't require MongoDB, then you can quickly hurdle the issue by additionally supplying the `--ignore-platform-reqs` option when running Composer.

With the packages installed, you'll next need to configure your system database. This database will house various configuration settings associated with your instance. DreamFactory supports four databases for this purpose, including Microsoft SQL Server, MySQL, PostgreSQL, and SQLite. Keep in mind you'll need to first create this database along with an account DreamFactory will use to connect to it.

You'll configure the system database by running a terminal command and answering a few prompts about your database configuration. 

To do so, run the following command from inside your project's root directory:

    $ php artisan df:env
	**************************************************
	* Configuring DreamFactory... 
	**************************************************
	Created .env file with default configuration.
	Created phpunit.xml with default configuration.

	 Which database would you like to use for system tables? [sqlite]:
	  [0] sqlite
	  [1] mysql
	  [2] pgsql
	  [3] sqlsrv
	 > 1

	 Enter your mysql Host:
	 > 192.168.10.10

	 Enter your Database Port [3306]:
	 > 

	 Enter your database name:
	 > dreamfactory

	 Enter your database username:
	 > dreamfactory_user

	 Enter your database password:
	 > 

	 Re-enter your database password:
	 > 

	CACHE DRIVER  is not supported. Using default driver file.
	Configuration complete!
	************************* WARNING! **************************
	*
	* Please take a moment to review the .env file. You can make any 
	* changes as necessary there. 
	*
	* Please run "php artisan df:setup" to complete the setup process.
	*
	*************************************************************

With the system database configured, it's time to create the system tables and seed data and then create your first system administrator account. This is accomplished by running the `df:setup` command. Because multiple prompts are involved with this command, I'll break the command output into a few parts. Immediately after running `df:setup`, the command will create the database tables and seed data:

    $ php artisan df:setup
	*********************************************
	* Welcome to DreamFactory Setup.
	*********************************************
	Running Migrations...
	Migration table created successfully.
	Migration driver used: sqlite
	Migrating: 2015_01_27_190908_create_system_tables
	Migrated:  2015_01_27_190908_create_system_tables
	Migrating: 2015_01_27_190909_create_db_extras_tables
	Migrated:  2015_01_27_190909_create_db_extras_tables
	...
	Migrating: 2018_01_23_155210_script_implements_access_list
	Migrated:  2018_01_23_155210_script_implements_access_list
	Migrating: 2018_01_29_030233_create_bitbucket_config_table
	Migrated:  2018_01_29_030233_create_bitbucket_config_table
	Migration completed successfully.
	*********************************************
	*********************************************
	Running Seeder...
	Seeding: AppSeeder
	App resources created: admin, api_docs, file_manager
	Seeding: EmailTemplateSeeder
	Email Template resources created: User Invite Default, User Registration Default, Password Reset Default
	Service resources created: system, api_docs, files, logs, db, email
	System service updated.
	Service resources created: user
	All tables were seeded successfully.

Next you'll be prompted to create your first system administration account:

	Creating the first admin user...

	 Enter your first name:
	 > Jason

	 Enter your last name:
	 > Gilmore

	 Enter your email address?:
	 > jason.gilmore@dreamfactory.com

	 Choose a password:
	 > 

	 Re-enter password:
	 > 

	Successfully created first admin user.

Finally, you'll be prompted to make sure your application's `storage` and `bootstrap/cache` directories are properly configured. This involves making sure the directory ownership and permissions are properly set using the `chown` and `chmod` commands:

	* Please make sure following directories and all directories under 
	* them are readable and writable by your web server 
	*  -> storage/
	*  -> bootstrap/cache/
	* Example:
	*  > sudo chown -R {www user}:{your user group} storage/ bootstrap/cache/ 
	*  > sudo chmod -R 2775 storage/ bootstrap/cache/ 
	
The `{www user}` string is a placeholder for the owner of your web server daemon owner. The `{your user group}` string is a placeholder for the web server group daemon owner.

Immediately following this prompt you'll be informed of successful setup:

	**********************************************************
	******************** Setup Successful! *******************
	**********************************************************
	* Setup is complete! Your instance is ready. Please launch 
	* your instance using a browser. You can run "php artisan serve" 
	* to try out your instance without setting up a web server.
	**********************************************************

If you've installed and configured DreamFactory to run on a web server, then you can open your browser and navigate to the IP address or domain name. Otherwise, if you haven't yet installed a web server, you can run `php artisan serve`:

	$ php artisan serve
	Laravel development server started: <http://127.0.0.1:8000>

This will start a simple PHP server running on `127.0.0.1` port `8000`. Open your browser and navigate to `http://127.0.0.1:8000` and you should see the following screen:

<img src="/images/02/first_boot.png" width="800">

### Introducing the .env File

It is often helpful to have different configuration values based on the environment where the application is running. For example, you may wish to use a different cache driver locally than you do on your production server.

To make this a cinch, Laravel utilizes the [DotEnv](https://github.com/vlucas/phpdotenv) PHP library by Vance Lucas. In a fresh Laravel installation, the root directory of your application will contain a `.env.example` file. If you install Laravel via Composer, this file will automatically be renamed to `.env`. Otherwise, you should rename the file manually. For more information, please see the official documentation from Laravel.

[Laravel Docs on .env](https://laravel.com/docs/5.5/configuration#environment-configuration)

### Enabling Debugging and Logging

By default, DreamFactory does not enable debugging. Debugging, while a great tool to help monitor your application, can be a large performance sink inside of a production environment. In the example `.env` file below you can see where these options live.

```php
##==============================================================================
## Environment Settings
##==============================================================================

## Use the installer.sh file in this directory to easily edit these settings.
## By default each setting is set to its internal default and commented out.

##------------------------------------------------------------------------------
## Application Settings
##------------------------------------------------------------------------------

## Application name used in email templates and other displays
#APP_NAME=DreamFactory
## Encryption cipher options are AES-128-CBC or AES-256-CBC (default)
#APP_CIPHER=AES-256-CBC
## Return debugging trace in exceptions: true or false (default)
#APP_DEBUG=false
## Environment this installation is running in: local, production (default)
APP_ENV=local
## Use 'php artisan key:generate' to generate a new key. Key size must be 16, 24 or 32.
APP_KEY=base64:YOUR_APP_KEY
#APP_LOCALE=en
## LOG setting. Where and/or how the log file is setup. Options are single (default), daily, syslog, errorlog
APP_LOG=daily
## LOG Level. This is hierarchical and goes in the following order.
## DEBUG -> INFO -> NOTICE -> WARNING -> ERROR -> CRITICAL -> ALERT -> EMERGENCY
## If you set log level to WARNING then all WARNING, ERROR, CRITICAL, ALERT, and EMERGENCY
## will be logged. Setting log level to DEBUG will log everything.
APP_LOG_LEVEL=debug
## When APP_LOG is set to 'daily', this setting dictates how many log files to keep.
APP_LOG_MAX_FILES=5
## PHP Date and Time function timezone setting
#APP_TIMEZONE=UTC
## External URL representing this install
#APP_URL=http://127.0.0.1:8000
## The starting point (page, application, etc.) when a browser points to the server root URL,
#DF_LANDING_PAGE=/dreamfactory/dist/index.html
DF_LICENSE_KEY=YOUR_LICENSE_KEY
```

When working to get your environment up and running, DreamFactory recommends turning debugging on, as well as increasing the sensitivity of the logging environment. In order to turn the application debugging on, please uncomment and change the following value:
```php
APP_DEBUG=true
```

To modify your logging values you will need to uncomment and modify the following snippets of code:
```php
APP_LOG=daily
APP_LOG_LEVEL=debug
APP_LOG_MAX_FILES=5
```
### Updating Your DreamFactory Docker Environment

Our DreamFactory environment is still a work-in-progress, however many users are actively using it thanks to Docker's streamlined configuration and deployment capabilities. Occasionally you'll want to update to a newer version of DreamFactory so we've assembled the following instructions as a guide.

::: warning
You are presumably reading this section with the intention of upgrading a DreamFactory production environment. As with any software, things can and do go wrong with upgrading production environments, and therefore you are urged to possess a readily accessible file and system database backup and recovery plan before attempting an upgrade. You have been warned!
::: 

Begin by opening a terminal and entering your DreamFactory instance's root directory. Then execute this command:

$ docker-compose exec web cat .env | grep APP_KEY
APP_KEY=base64:U/En8zI8WKrZ/F7CA9KncWjGTIhbvpGD5wN3eLoDZuQ=
...

A couple of lines of output will be returned, however you should only copy the line beginning with `APP_KEY` into a text file. Keep in mind at a *minimum* you'll need to copy down the `APP_KEY` value. If you've overridden other defaults, such as the type, location, and credentials associated with the system database, you'll need to copy those too. It is very important you perform this step otherwise you'll run into all sorts of upgrade-related issues.

Next, run the following command:

	$ git tag --list
	2.1
	2.14.1
	2.2
	2.2.1
	...

This displays all of the tagged versions. Begin by stopping the running DreamFactory container without deleting it. Keep in mind that when you run this command, your DreamFactory instance will go offline until the upgrade process is completed:

	$ docker-compose stop
	Stopping df-docker_web_1   ... done
	Stopping df-docker_mysql_1 ... done
	Stopping df-docker_redis_1 ... done

For the purposes of this example we'll presume you're running 2.12 and want to upgrade to 2.14.1. To do so you'll first want to checkout the 2.14.1 tag:

	$ git checkout tags/2.14.1

Next, you'll need to add that `APP_KEY` to the `docker-compose.yml` file. Open `docker-compose.yml` in your favorite code editor, scroll down to the `web` service, and add the `APP_KEY` property and associated value alongside the other environment variables:

	...
    DB_DATABASE: dreamfactory
    APP_KEY: 'base64:U\/En8zI8WKrZ\/F7CA9KncWjGTIhbvpGD5wN3eLoDZuQ='
    CACHE_DRIVER: redis
    ...

::: danger
It is crucial that you encapsulate the `APP_KEY` value within single quotes, and additionally escape with a backslash any forward slashes appearing in your key! As an example, compare the `APP_KEY` entry found above with the output displayed earlier.
:::

Save these changes, and then rebuild your container using the following command:

	$ docker-compose up -d --build

Once complete, you can run the following command to confirm the containers are up and running:

	$ docker-compose ps
	      Name                     Command               State          Ports
	--------------------------------------------------------------------------------
	df-docker_mysql_1   docker-entrypoint.sh mysqld      Up      3306/tcp, 33060/tcp
	df-docker_redis_1   docker-entrypoint.sh redis ...   Up      6379/tcp
	df-docker_web_1     /docker-entrypoint.sh            Up      0.0.0.0:80->80/tcp

If something has gone wrong, and one of the containers indicates it has exited, you can view the logs for that container:

	$ docker-compose logs web

Presuming the containers are up and running, you'll next want to determine whether the DreamFactory system database schema has changed. To do so run this command:

	$ docker-compose exec web php artisan migrate:status

If you see `Y` in the tabular output's `Ran?` column, then the schema has not changed. If you see `N` at any point, then you'll need to run the following command to update your system database schema:

	$ docker-compose exec web php artisan migrate

Finally, you'll want to clear your application and configuration caches by executing the following commands:

	$ docker-compose exec web php artisan config:clear
	Configuration cache cleared!

	$ docker-compose exec web php artisan cache:clear
	Cache cleared successfully.

With that done, open your DreamFactory instance in the browser, and confirm the environment is operational.

## Choosing an HTTP Client

Whether your API consumer is an iPhone or Android application, a SPA (Single Page Application), or another server altogether, that consumer is often referred to as the *client*. The client issues HTTP requests to the REST API, parsing the responses and reacting accordingly. Although in most cases your team will use libraries such as [Alamofire](https://github.com/Alamofire/Alamofire) or [Axios](https://github.com/axios/axios) to manage these requests, you'll often want to interact with the APIs in a much more fluid manner during the investigatory and learning phase. The API Docs feature serves this need well, however the API Docs interface lacks the ability to bookmark and otherwise persist queries, manage parameters programmatically using variables, and other features useful for maintaining a set of easily accessible configurations.

Fortunately, there are a number of HTTP clients which fill this void very well. Two of the most popular are [Insomnia](https://insomnia.rest/) and [Postman](https://www.getpostman.com/), which are available on OSX and multiple operating systems, respectively. In this section we'll introduce you to both HTTP clients, and as an added bonus talk about the ubiquitous cURL client which is quite possibly the most popular piece of software you've never heard of.

### Insomnia

[Insomnia](https://insomnia.rest) is a cross-platform REST client, built on top of [Electron](https://electronjs.org/). Insomnia is realtively new on the scene compared to cURL and Postman but offers a bevy of features that certainly make it competitive.  They have a very slick UI, and a ton of features, including a team option.  

<img src="/images/02/insomnia.png" width="800">

### Postman

[Postman](https://www.getpostman.com) is a tried and true GUI interface with great docs to help you set up your testing environment.  They have plans for everyone, from free solo users to large, enterprise teams.  Postman also has a great feature called [API Network](https://www.getpostman.com/api-network/), which has sample API calls from all sorts of sources.  It is definitely worth a look.

<img src="/images/02/postman1.png" width="800">

### cURL

[cURL's](https://curl.haxx.se/) lack of a polished interface may lead you to believe it's inferior to Insomnia and Postman. Not so! cURL is an incomparably capable bit of software.  cURL is a command line tool and library for transferring data with URL syntax, supporting HTTP, HTTPS, FTP, FTPS, GOPHER, TFTP, SCP, SFTP, SMB, TELNET, DICT, LDAP, LDAPS, FILE, IMAP, SMTP, POP3, RTSP and RTMP. libcurl offers a myriad of powerful features

## Conclusion

With DreamFactory installed and configured, it's time to build your first API! In the next chapter we'll do exactly that, walking through the steps necessary to generate a database-based API.

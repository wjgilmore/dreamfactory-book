---
sidebar: auto
---
# Chapter 10. Production Best Practices

While DreamFactory is already fairly fast, secure and maintenance free out of the box, there are quite a few modifications you can make to enhance your instance.  We have broken these down into several categories to make focusing on individual features easier, almost as a checklist for optimal performance and maintenance.

## Performance

For database-backed APIs, there is no more impactful task one could
take than properly indexing the database in addition to ensuring the
database server has been allocated appropriate hardware and network
resources. Please see the below links for references to database optimization.

1. [MySQL](https://dev.mysql.com/doc/refman/5.7/en/optimization.html)
2. [SQL Server](https://docs.microsoft.com/en-us/sql/relational-databases/performance/performance-center-for-sql-server-database-engine-and-azure-sql-database?view=sql-server-2017)

Enable database API caching whenever practical at service creation
time, as it will undoubtedly improve performance.

<img src="/images/10/database_caching.png" width="800">

You can achieve particularly high performance by compiling your
DreamFactory application code using OPcache. You can learn more about
OPcache in these links:
1. [Official PHP Docs](http://php.net/manual/en/book.opcache.php)
2. [How to Make your Laravel App Fly](https://medium.com/appstract/make-your-laravel-app-fly-with-php-opcache-9948db2a5f93) 

DreamFactory instances may be load balanced, and can be configured to
share the system database, cache details, and other information
necessary to operate in a distributed environment. Below are some links that may help you configure a load balancer with some of the most common cloud providers.

1. [Amazon Web Services](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html)
2. [Google Cloud](https://cloud.google.com/load-balancing/)
3. [Microsoft Azure](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview)
4. [IBM Cloud](https://www.ibm.com/cloud/load-balancer)

DreamFactory enables file-based caching by default, however you may
opt to configure one of the other supported caching solutions, such as
Redis. Please see these links to see connection tutorials:

 1. [YouTube - Setting up and using Redis](c94200f4d0567522370908afcdafd28d)<br>
 2. [Blog - Caching](http://blog.dreamfactory.com/new-dreamfactory-cache-service-supports-redis-memcahed-and-local-storage/)

## Security

For database-backed APIs, create the API using a database account
possessing privileges closely corresponding to your API privilege
requirements. For instance, if the database includes a table called
`employees` but there is no intention for this table to be accessible
via the API, then configure the proxy user's privileges accordingly.

Never use a blanket API key for your APIs! Instead, create roles which
expressly define the level of privileges intended to be exposed via
the API, and then associate the role with a new App and corresponding
API Key. Don't be afraid to create multiple roles and therefore
multiple corresponding API keys if you'd like to limit API access in
different ways on a per-client or group basis.
* You can see an example of the multitude of API Keys we have generated on our demo server.  Don't be shy!

<img src="/images/10/api_keys.png" width="800">

* You should always make sure you set up the roles you need.  The first shot is a picture of what the roles tab looks like.  

<img src="/images/10/roles.png" width="800">

* Should you need to make API documentation available to team members,
use DreamFactory's user-centric role assignment feature to make solely
the documentation available to the team members, rather than granting
unnecessary administrative access.

<img src="/images/10/role_detail.png" width="800">

Configure your DreamFactory web administration console to use SSL.
Never run your environment on port 80 as like any web application it
raises the likelihood your administration login credentials could be
stolen by a malicious third-party.  You should be running on port 443. One of our favorite resources to create SSL certificates is [Let's Encrypt](https://letsencrypt.org/getting-started/).

Below are resources on how to add an SSL cert to your web server:
1. [Nginx](http://nginx.org/en/docs/http/configuring_https_servers.html)
	* [Nginx YouTube Video](https://www.youtube.com/watch?v=X3Pr5VATOyA)
2. [Apache YouTube Example](https://www.youtube.com/watch?v=NfUoiv4FTSs)


When running DreamFactory in a production environment, be sure to set
the `.env` file's `APP_ENV` value to `production` and `APP_DEBUG` to
`false`. Leaving it set to `local` will result in detailed
error-related information being returned to the client rather than
quietly logged to the log file.

```php
##------------------------------------------------------------------------------
## Application Settings
##------------------------------------------------------------------------------

## Application name used in email templates and other displays
#APP_NAME=DreamFactory
## Encryption cipher options are AES-128-CBC or AES-256-CBC (default)
#APP_CIPHER=AES-256-CBC
## Return debugging trace in exceptions: true or false (default)
APP_DEBUG=false
## Environment this installation is running in: local, production (default)
APP_ENV=production
## Use 'php artisan key:generate' to generate a new key. Key size must be 16, 24 or 32.
APP_KEY=base64:YOUR_APP_KEY
#APP_LOCALE=en
## LOG setting. Where and/or how the log file is setup. Options are single (default), daily, syslog, errorlog
APP_LOG=daily
## LOG Level. This is hierarchical and goes in the following order.
## DEBUG -> INFO -> NOTICE -> WARNING -> ERROR -> CRITICAL -> ALERT -> EMERGENCY
## If you set log level to WARNING then all WARNING, ERROR, CRITICAL, ALERT, and EMERGENCY
## will be logged. Setting log level to DEBUG will log everything.
APP_LOG_LEVEL=ERROR
## When APP_LOG is set to 'daily', this setting dictates how many log files to keep.
APP_LOG_MAX_FILES=5
## PHP Date and Time function timezone setting
#APP_TIMEZONE=UTC
## External URL representing this install
APP_URL=https://127.0.0.1:8000
## The starting point (page, application, etc.) when a browser points to the server root URL,
#DF_LANDING_PAGE=/dreamfactory/dist/index.html
DF_LICENSE_KEY=YOUR_LICENSE_KEY

##------------------------------------------------------------------------------
## Database Settings
##------------------------------------------------------------------------------
```

## Maintenance

* Do not use Bitnami in production environments. While Bitnami
undoubtedly offers a turnkey approach to getting started with
DreamFactory, it is intended for use solely during the exploratory and
development phases of your project. Certain Bitnami characteristics
make subsequent software upgrades difficult and therefore raise the
likelihood production environment upgrades will be unreasonably
delayed.

* Please monitor the [DreamFactory blog](https://blog.dreamfactory.com) and/or subscribe to the DreamFactory
newsletter for occasional updates regarding new platform releases. You
are encouraged to review the release details and take steps to upgrade
your platform to the latest version as practical.  You can find all of the release notes compiled on the [DreamFactory wiki](http://wiki.dreamfactory.com/DreamFactory/Release_Notes) 

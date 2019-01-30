---
sidebar: auto
---

# Chapter 08. Optimizing, Securing, and Maintaining Your DreamFactory Enviroment

The DreamFactory platform is build atop the [Laravel](https://www.laravel.com). Laravel is an amazing PHP-based framework that in just a few short years has grown in popularity to become one of the today's most popular framework solutions regardless of language. We speculate there are several reasons for such soaring popularity, including a thoroughly pragmatic approach, security-first implementation, fantastic documentation, and a comprehensive ecosystem (in addition to the framework itself, the Laravel development team also maintains an e-commerce framework called Spark, an application adminstration toolkit called Nova, and an application deployment service called Envoyer. Further, it's also quite performant, capable of serving as the backbone for high-traffic, mission critical applications. Regardless, like any application you're going to want to learn all you can about how to best go about maintaining, securing, and optimizing the environment. This chapter tackles all three topics.

## Optimizing DreamFactory's Database APIs

Ensuring the DreamFactory-generated database APIs are running at peak performance is accomplished by ensuring your database is properly configured, has been allocated appropriate hardware and network resources, and turning on DreamFactory's database caching feature. In this section we'll talk more about all of these tasks.

## Index the Database

For database-backed APIs, there is no more impactful task one could take than properly indexing the database. Database indexing is what allows your database engine to quickly identify which rows match conditions defined by a `where` clause. Refer to the following resources for both general and database-specific indexing information:

* [Database Indexes Defined](https://en.wikipedia.org/wiki/Database_index)
* [Microsoft SQL Server](https://docs.microsoft.com/en-us/sql/relational-databases/indexes/indexes?view=sql-server-2017)
* [MongoDB](https://docs.mongodb.com/manual/indexes/)
* [MySQL](https://dev.mysql.com/doc/refman/5.7/en/optimization-indexes.html)
* [Oracle](https://docs.oracle.com/cd/E11882_01/server.112/e40540/indexiot.htm#CNCPT721)
* [PostgreSQL](https://www.postgresql.org/docs/9.1/indexes.html)

### Database API Caching

Enable database API caching whenever practical at service creation time, as it will undoubtedly improve performance.

<img src="/images/10/database_caching.png" width="800">

You can achieve particularly high performance by compiling your DreamFactory application code using OPcache. You can learn more about OPcache in these links:

1. [Official PHP Docs](http://php.net/manual/en/book.opcache.php)
2. [How to Make your Laravel App Fly](https://medium.com/appstract/make-your-laravel-app-fly-with-php-opcache-9948db2a5f93) 

DreamFactory instances may be load balanced, and can be configured to share the system database, cache details, and other information necessary to operate in a distributed environment. Below are some links that may help you configure a load balancer with some of the most common cloud providers.

1. [Amazon Web Services](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html)
2. [Google Cloud](https://cloud.google.com/load-balancing/)
3. [Microsoft Azure](https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview)
4. [IBM Cloud](https://www.ibm.com/cloud/load-balancer)

DreamFactory enables file-based caching by default, however you may opt to configure one of the other supported caching solutions, such as Redis. Please see these links to see connection tutorials:

 1. [YouTube - Setting up and using Redis](c94200f4d0567522370908afcdafd28d)<br>
 2. [Blog - Caching](http://blog.dreamfactory.com/new-dreamfactory-cache-service-supports-redis-memcahed-and-local-storage/)

## Security

### CORS Security

Always make sure your `CORS` settings are only set for the appropriate "scheme/host/port tuple" to ensure you are observing the maximum security you can by only allowing cross origin resources access when there is no other way around it.  For a great explanation of `CORS` and how they work, please see this [article](http://performantcode.com/web/do-you-really-know-cors).  

* You can modify your `CORS` settings in DreamFactory under the `Config` tab.

<img src="/images/10/cors.png" width="800">

For database-backed APIs, create the API using a database account privileges that closely correspond to your API privilege requirements. For instance, if the database includes a table called `employees` but there is no intention for this table to be accessible via the API, then configure the proxy user's privileges accordingly.

Never use a blanket API key for your APIs! Instead, create roles which expressly define the level of privileges intended to be exposed via the API, and then associate the role with a new App and corresponding API Key. Don't be afraid to create multiple roles and therefore multiple corresponding API keys if you'd like to limit API access in different ways on a per-client or group basis.


* Should you need to make API documentation available to team members, use DreamFactory's user-centric role assignment feature to make solely the documentation available to the team members, rather than granting unnecessary administrative access.

<img src="/images/10/role_detail.png" width="800">

### Securing Your Web Traffic

From a networking standpoint DreamFactory is a typical web application, meaning you can easily encrypt all web traffic between the platform and client using an SSL certificate. Unless you've already taken steps to add an SSL certificate to your web server, by default your DreamFactory instance will run on port 80, which means all traffic between your DreamFactory server and client will be unencrypted and therefore subject to capture and review. To fix this, you'll want to install an SSL certificate. One of our favorite resources to create SSL certificates is [Let's Encrypt](https://letsencrypt.org/getting-started/).

Below are resources on how to add an SSL cert to your web server:

1. [Nginx](http://nginx.org/en/docs/http/configuring_https_servers.html)
	* [Nginx YouTube Video](https://www.youtube.com/watch?v=X3Pr5VATOyA)
2. [Apache YouTube Example](https://www.youtube.com/watch?v=NfUoiv4FTSs)

### Suppressing Errors

When running DreamFactory in a production environment, be sure to set the `.env` file's `APP_ENV` value to `production` and `APP_DEBUG` to `false`. Leaving it set to `local` will result in detailed error-related information being returned to the client rather than quietly logged to the log file. When set properly in a production environment, your `.env` file will look like this:

```php
...
APP_DEBUG=false
## Environment this installation is running in: local, production (default)
APP_ENV=production
```

## Separating the Web Administration Interface from the Platform

New DreamFactory users often conflate the web administration interface with the API platform; in fact, the web administration interface is just a client like any other. It just so happens that the DreamFactory team built this particular interface expressly for managing the platform in an administrative capacity. This interface talks to the platform using a series of administrative APIs exposed by the platform, and accessible only when requests are accompanied by a session token associated with an authenticated administrator.

By default this interface runs on the same server as the platform itself. Some users prefer to entirely separate the two, running the interface in one networking environment and entirely isolating the platform in another.

TODO: Add link to df-admin-app README.

## Implementing Key Security Safeguards

### Obfuscating Sensitive Data

## Adding Redis Caching

One of DreamFactory's great advantages is it is built atop Laravel, and as such, you can take advantage of Laravel's support for shared caching solutions, among other things. This is great because it means the caching solution has been extensively tested and proven in production environments. 

To install the predis package you just need to navigate to your project's root directory and execute this command:

    $ composer require predis/predis

Next, open your .env file and look for this section:

    ## CACHE_DRIVER options: apc, array, database, file, memcached, redis
    CACHE_DRIVER=file

    Change CACHE_DRIVER to:

    CACHE_DRIVER=redis

Next, scroll down and uncomment these lines by removing the #, and then update the CACHE_HOST, CACHE_PORT, and (optionally) the CACHE_PASSWORD parameters to match your Redis environment:

    ## If CACHE_DRIVER = memcached or redis
    #CACHE_HOST=
    #CACHE_PORT=
    #CACHE_PASSWORD=

Finally, scroll down to the following section and uncomment CACHE_DATABASE and REDIS_CLIENT.

    ## If CACHE_DRIVER = redis
    #CACHE_DATABASE=2
    ## Which Redis client to use: predis or phpredis (PHP extension)
    #REDIS_CLIENT=predis

You can probably leave CACHE_DATABASE set to 2. For the REDIS_CLIENT you can leave it set to predis if you've installed the predis/predis package (recommended). 

Curious for how long did you program the sleep statement? It is almost certainly the case that Amazon S3 is not yet broadcasting availability of that bucket/file at the point the next script attempts to query it.

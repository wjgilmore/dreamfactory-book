---
sidebar: auto
---

# Chapter 9. Securing, and Maintaining Your DreamFactory Enviroment

The DreamFactory platform is built atop the [Laravel](https://www.laravel.com) framework. Laravel is an amazing PHP-based framework that in just a few short years has grown in popularity to become one of the today's most popular framework solutions regardless of language. We speculate there are several reasons for such soaring popularity, including a thoroughly pragmatic approach, security-first implementation, fantastic documentation, and a comprehensive ecosystem (in addition to the framework itself, the Laravel development team also maintains an e-commerce framework called Spark, an application adminstration toolkit called Nova, and an application deployment service called Envoyer. Regardless, like any application you're going to want to learn all you can about how to best go about maintaining and securing the environment. 

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

Next, scroll down and uncomment these lines by removing the `#`, and then update the `CACHE_HOST`, `CACHE_PORT`, and (optionally) the `CACHE_PASSWORD` parameters to match your Redis environment:

    ## If CACHE_DRIVER = memcached or redis
    #CACHE_HOST=
    #CACHE_PORT=
    #CACHE_PASSWORD=

Finally, scroll down to the following section and uncomment `CACHE_DATABASE` and `REDIS_CLIENT`:

    ## If CACHE_DRIVER = redis
    #CACHE_DATABASE=2
    ## Which Redis client to use: predis or phpredis (PHP extension)
    #REDIS_CLIENT=predis

You can leave CACHE_DATABASE set to 2. For the `REDIS_CLIENT` you can leave it set to predis if you've installed the predis/predis package (recommended). By default your Redis Database will be on 0, so be sure to `SELECT` whatever the number is you have set your `CACHE_DATABASE` equal to. Then you can start seeing the `KEYS` populate.

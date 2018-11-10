---
sidebar: auto
---
# Chapter 10. Production Best Practices

The DreamFactory platform is build atop the open source [Laravel](https://www.laravel.com) framework, which is not only an incredibly popular web framework thanks to its' pragmatic approach, fantastic documentation, and varied ecosystem, but it's also used in mission critical applications around the world. That said, while you're going to be satisfied with DreamFactory's out-of-the-box performance, there are a few modifications you can make to enhance your instance. In this chapter we'll enumerate different considerations, breaking down the suggestions by category.

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

Always make sure your `CORS` settings are only set for the appropriate "scheme/host/port tuple" to ensure you are observing the maximum security you can by only allowing cross origin resources access when there is no other way around it.  For a great explanation of `CORS` and how they work, please see this [article](http://performantcode.com/web/do-you-really-know-cors).  

* You can modify your `CORS` settings in DreamFactory under the `Config` tab.

<img src="/images/10/cors.png" width="800">

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

### Administer Your DreamFactory Instance From Anywhere
The app can be configured to manage your DreamFactory instance from another remote server. Simply open the app.js file contained in `app/scripts` directory and add your DreamFactory instance host name to the `INSTANCE_BASE_URL` constant at the top. You can now optionally build the app and deploy the `dist` directory. You must enable CORS in the DreamFactory instance you will be deploying the app to.

#### Theme the app
In `app/styles/sass/partials` you can find the stylesheets for all the custom parts of the app as well as a few bootswatch templates in the `themes` directory. All of these are added in a specific order in styles.scss. To change to a different bootswatch theme simply change all occurrences of the theme name in `styles.scss`. Dont forget to run `grunt build` to compile the stylesheets and build the app.

#### App Architecture
The app was designed to have plugable modules. Every module contains it's own routes, events, and logic so as to remove one would not stop the app from working. These modules are stored under app/admin_components. In order to faciliate speed a module was designed as a central repository for data that is used frequently in the app. Many other modules rely on this module for data to do their job but with a small bit of refactoring it can be removed to produce truly untethered modules.

#### Main Application
The main application files are located in two directories, `scripts` and `views` located under the app directory. The `scripts` directory contains your `app.js` file and a sub directory called `controllers` contains `main.js`. Corresponding `views` for controllers defined in `main.js` can be found in the aforementioned `views` directory. The `app.js` file contains a few constants. The ones of note are the `INSTANCE_BASE_URL`, `INSTANCE_API_PREFIX`, and `APP_API_KEY`. The `INSTANCE_BASE_URL` allows a host to be set which the application and it's modules will refer to for api calls. `INSTANCE_API_PREFIX` can be changed to match the server setup. `APP_API_KEY` is used in a config option defined below the constants that sets the API key for all calls made from the app. `app.js` also defines standard routes for login, logout, registering. These routes have corresponding controllers defined in `main.js`.

`main.js` defines app specific controllers. The MainCtrl acts as a top level scope which other modules can query for app wide data. For example, our top level navigation and component navigation links are stored here in arrays which are passed to directives that render the links and control active link highlighting. Whenever a module is added/removed it's link will need to be handled here. But you shouldn't encounter this very often (or at all).

Authentication controllers provide attachment points for authentication/register events. They implement sparse logic in dealing with auth/register events produced by the user management module. This provides a decoupling between app specific logic for auth/register and the business logic of actually authenticating/registering a user. See `main.js` comments for more info.

#### Data repository and Utility modules
A data repository module called `dfApplicationData` facilitates the loading and management of frequently used application data. It creates an object called `dfApplicationObj`. It contains generic methods to access, modify, and delete data in the application and on the server. It also provides accessor methods to retrieve and save the actual `dfApplicationObj`. While not recommended to interact with this object directly it is sometimes a necessary evil. The module also contains init code to check whether it is necessary to build a new app object or to refresh the screen with local data as well as what apis to load.

The utility module provides services, factories, directives, and filters related to the operation of modules. Things like our icon service, navs, table filtering/pagination, etc are stored here. Basically, things that multiple modules may need access to and/or have no other place to go.



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

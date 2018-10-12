---
sidebar: auto
---

# Configuring SAP SQL Anywhere

SAP SQL Anywhere is the namesake commercial database solution offered by software giant SAP SE. If your organization relies upon SQL Anywhere, you'll be pleased to know DreamFactory's Silver and Gold editions include support for this powerful database! In this chapter we'll walk you through the server configuration steps necessary to ensure your DreamFactory instance can interact with your SQL Anywhere database.

## Installing the PDO and PDO_DBLIB Extensions

DreamFactory interacts with SQL Anywhere via the PHP Data Objects (PDO) extension. It works in conjunction with a database-specific PDO driver to interface with a wide variety of databases. Fortunately, the PDO extension and associated drivers are very easy to install. You can confirm whether PDO is already installed by running this command:

    $ php -m
    ...
    PDO
    ...

If PDO doesn't appear in the list of installed extensions, just search your package manager to identify the PDO package. For instance on CentOS you would search for the PDO package like so:

    $ sudo yum search pdo
    ...
    php71-php-pdo.x86_64
    php72-php-pdo.x86_64
    php73-php-pdo.x86_64

With the desired PHP version identified you can then install it:

    $ yum install php72-php-pdo.x86_64

Next you'll want to install the SQL Anywhere driver. Confusingly enough, this driver is often identified as "Sybase" because SAP SQL Anywhere was known as Sybase SQL Anywhere prior to SAP's 2010 Sybase acquisition, and the PHP community hasn't gotten around to updating the extension's name. On Debian/Ubuntu you can install the driver using this command:

    $ sudo apt install php7.2-sybase

On CentOS this driver is identified "pdo-dblib", because "dblib" is the name given to the library used to transfer data between the client and a database that supports a protocol known as tabular data stream (TDS - more about this in a bit). However as a convenience you can search the package manager for the term "sybase" and the desired drivers will be returned:

    $ sudo yum search sybase
    ...
    php70-php-pdo-dblib.x86_64
    php71-php-pdo-dblib.x86_64
    php72-php-pdo-dblib.x86_64
    php73-php-pdo-dblib.x86_64

Now that you know the name you can install the desired version:

    $ sudo yum install php72-php-pdo-dblib.x86_64

Once complete, run `php -m` again and confirm both PDO and the pdo_dblib extensions are installed:

    $ php -m
    ...
    PDO
    pdo_dblib
    ...

With this step complete, let's move on to installing and configuring FreeTDS.

### Installing and Configuring FreeTDS

FreeTDS is an open source implementation of a protocol known as Tabular Data Stream (TDS). This protocol is used by both SQL Anywhere and Microsoft SQL Server as a means for passing data between the databases and their respective clients. Therefore your DreamFactory server requires a TDS library which allows it to talk to these databases, and FreeTDS suits that need nicely.

To install 

Open the `/etc/freetds/freetds.conf`

That said, DreamFactory will not work with the SAP-produced drivers. DreamFactory's SAP SQL Anywhere support

https://cubist.cs.washington.edu/doc/FreeTDS/userguide/x631.htm
http://www.freetds.org/userguide/choosingtdsprotocol.htm
http://www.freetds.org/userguide/freetdsconf.htm
https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup-tools?view=sql-server-2017

see /etc/profile:
export SQLANY17=/opt/sqlanywhere17 (https://forums.suse.com/archive/index.php/t-2562.html)

### Troubleshooting Your Configuration

One easy way to confirm the drivers are correctly installed and that your SQL Anywhere database can be reached is by running the following command inside your Linux shell. The `SA_HOST`, `SA_PORT`, `SA_DB`, `SA_U`, and `SA_PWD` are placeholders for your SQL Anywhere host IP or domain name, port, database name, username, and password, respectively:

    TDSDUMP="tds.log" \
    php -r "new PDO('dblib:host=SA_HOST:SA_PORT;dbname=SA_DB','SA_U','SA_PWD');"

Invoking PHP using the `-r` option will cause the command that follows to be executed using the PHP interpreter. We prefix the `php` call with creation of the the `TDSDUMP` environment variable. When this variable is set, it will result in all traffic sent to FreeTDS to be logged to the assigned file, which in this case is `tds.log`. Once this command completes, the `tds.log` file will be found in your current directory and will contain quite a bit of information about the communication workflow associated with attempting to connect to SQL Anywhere via PHP's PDO extension.

#### Using the SAP PHP Extension

A few years ago SAP released their own native SQL Anywhere PHP extension, with little background information regarding why this extension should be used in preference of PHP's PDO-based approach. To be clear, DreamFactory does *not* support the SAP PHP modules; instead we rely upon PHP's longstanding support for SQL Anywhere via the PDO and PDO_DBLIB extensions. 

That said, we recognize you might wish to use PHP to interact with a SQL Anywhere database outside of the DreamFactory-generated APIs and so because documentation on this matter is so woefully lacking we thought it might be useful to include some guidance on the matter for the benefit of all PHP users. To configure and test this module within your *custom* PHP application (not DreamFactory), follow these instructions:

1. Navigate to the following URL and download the PHP module matching your installed PHP version:

https://wiki.scn.sap.com/wiki/display/SQLANY/The+SAP+SQL+Anywhere+PHP+Module

You can easily determine the PHP version installed on your server using the following command:

    $ php -v
    PHP 7.1.22-1+0~20181001133629.6+jessie~1.gbp113f3b (cli) 
    ...

2. Move the module zip file to your server

The following command will unzip the file and place its contents in a directory named `sqlanywhere-driver` found in your system's `/tmp` directory:

    $ unzip SQLAnywhere-php-7.1_Linux.zip -d /tmp/sqlanywhere-driver

If your Linux server is a fresh instance, you may need to install the unzip package first. For instance on Ubuntu/Debian you'd do so running this command:

    $ sudo apt install unzip

3. Move the module to the PHP extension directory

Next you'll move the `php7.1.0_sqlanywhere.so` module to the PHP extension directory. You can learn the extension directory's path via this command:

    $ php -i | grep extension_dir
    extension_dir => /usr/lib/php/20160303 => /usr/lib/php/2016030

There are several versions of this module. You'll find 32-bit versions in the `/tmp/sqlanywhere-driver/bin32` directory, and 64-bit versions in the `/tmp/sqlanywhere-driver/bin64` directory. Further, each of these respective directories contains a thread safe and non-thread module. If you're using PHP's CGI version or Apache 1.X, you'll use the non-threaded module. If you're using Apache 2.X or NGINX, you'll use the threaded version, which is denoted by the `_r` filename postfix.

http://infocenter.sybase.com/help/index.jsp?topic=/com.sybase.help.sqlanywhere.12.0.1/dbprogramming/php-s-6029035.html

4. Update the php.ini file and restart the web server

Finally, you'll need to update the `php.ini` file to ensure PHP recognizes the new modules. You can learn the location of this file using the following command:

$ php --ini
...
Loaded Configuration File: /etc/php/7.1/cli/php.ini
...

Based on this output, the `php.ini` file is located in `/etc/php/7.1/cli/`. Keep in mind however that this `php.ini` file is *only* used in conjunction with PHP when running via the command line interface (the terminal). You'll also want to modify the `php.ini` file used when PHP interacts with the web server. It's location isn't obvious when running `php --ini`, however if you navigate to the `cli` directory's parent you'll find the directory housing the web server-specific `php.ini` file:

    $ cd /etc/php/7.1/
    $ ls
    apache2  cli  fpm  mods-available
    $ ls apache2/
    conf.d php.ini

Therefore you'll want to update *both* `php.ini` files to ensure the SQL Anywhere modules are recognized in both environments. To do so, you'll open up each file in a text editor and add one line:

    extension=php-7.1.0_sqlanywhere_r.so

If you're in the minority of users and require the non-threaded version, you'll instead reference the non-threaded version:

    extension=php-7.1.0_sqlanywhere.so

Keep in mind this reference must match the name of the file you copied into the PHP extensions directory!

Once done, save the changes and restart your web server. Confirm PHP's CLI environment recognizes the module by running this command:

    $ php -m | grep sqlanywhere
    sqlanywhere

Next, confirm PHP's web environment recognizes the module by creating a file named phpinfo.php in your web document root directory and adding the following 
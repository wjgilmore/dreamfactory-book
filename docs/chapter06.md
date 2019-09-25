---
sidebar: auto
meta:
  - name: "name"
    content: Integrating Business Logic Into Your DreamFactory APIs
  - name: "description"
    content: This chapter shows you how to add business logic to your DreamFactory APIs, allowing you to validate input parameters, transform responses, call other APIs, and more.
---

# Chapter 6. Integrating Business Logic Into Your DreamFactory APIs

DreamFactory does a very good job of generating APIs for a wide variety of data sources, including Microsoft SQL Server, MySQL, SFTP, AWS S3, and others. Naturally the generated API endpoints encompass the majority of capabilities a client is expected to require when interacting with the data source. However, software can rarely be created in cookie-cutter fashion, because no two companies or projects are the same. Therefore DreamFactory offers developers the ability to extend APIs through the integration of custom business logic. 

## The Scripting Interface

The scripting interface is accessible via the `Scripts` tab located at the top of the DreamFactory administration console. Once entered, you'll be presented with a list of APIs hosted within your DreamFactory instance. Enter one of the APIs and you'll see a top-level summary of the endpoint "buckets" associated with that API. For instance, if you enter a database-backed API you'll see buckets such as `_func` (stored function), `_proc` (stored procedure), `_schema` (table structure), and `_table` (tables). For instance, this screenshot presents the top-level interface for a Microsoft SQL Server API:

<img src="/images/06/scripting-sql-server.png" width="400">

You can apply scripting logic to an entire bucket, meaning it will execute in conjunction with any API endpoint matching that namespace, or you can apply logic to a very specific endpoint. Additionally, you can choose to selectively apply logic to the request or response side of the API workflow, can queue logic for execution outside of the workflow, and can specify that the logic executes in conjunction with a specific HTTP verb (GET, POST, etc.). We'll talk more about these key capabilities later in the chapter.

If you continue drilling down to a specific endpoint, you'll eventually arrive at the script editing interface. For instance in the following screenshot we've navigated to a SQL Server API's `customer` table endpoint. Specifically, this script will execute only when a `GET` request is made to this endpoint, and will fire *after* the data has been returned from the data source.

<img src="/images/06/leaf-sql-server.png" width="800">

::: tip
DreamFactory's ability to display a comprehensive list of API endpoints is contingent upon availability of corresponding OpenAPI documentation. This documentation is automatically generated for the native connectors, however for connectors such as Remote HTTP and Scripted, you'll need to supply the documentation in order to peruse the endpoints via the scripting interface.
:::

These scripts can be managed within a simple web-based editing interface, or managed within version control (GitHub, BitBucket, and GitLab are all supported). So in what languages can these scripts be written in? Read on to learn more!

### Supported Scripting Engines

DreamFactory currently supports four scripting engines, including:

* [PHP](https://www.php.net): PHP is the world's most popular server-side web development language.
* [Python](https://www.python.org): Python is a popular and multifaceted language having many different applications, including artificial intelligence, backend web development, and data analysis.
* [Node.js](https://nodejs.org): Node.js is a JavaScript runtime built atop Chrome's V8 JavaScript engine.
* [JavaScript](https://github.com/phpv8/v8js): Additional JavaScript support is provided via PHP's extension for Google's V8 JavaScript engine.

Keep in mind these aren't hobbled or incomplete versions of the scripting engine. DreamFactory works in conjunction with the actual language interpreters installed on the server, and allows you to import third-party libraries and packages into your scripting environment.

## Examples


### Reformatting a Response

	{
	  "resource": [
	    {
	      "Id": 1,
	      "FirstName": "Bob",
	      "LastName": "Anders",
	      "City": "Berlin",
	      "Country": "Germany",
	      "Phone": "030-0074321",
	      "messages": []
	    },
	    {
	      "Id": 2,
	      "FirstName": "Ana",
	      "LastName": "Trujillo",
	      "City": "México D.F.",
	      "Country": "Mexico",
	      "Phone": "(5) 555-4729",
	      "messages": []
	    },
	    ...
	    ]
	}

	$responseBody = $event['response']['content'];

	foreach ($responseBody['resource'] as $n => $record) {
		$record["Name”]["FirstName"] = $record["FirstName"];
		$record["Name”]["LastName"] = $record["LastName"];
		unset($record["FirstName"]);
		unset($record["LastName"]);
		$responseBody['resource'][$n] = $record;
	}

	$event['response']['content'] = $responseBody;


### More Information

We're still in the process of migrating scripting documentation into this guide, so for the time being please consult our wiki for more information about scripting:

* [https://wiki.dreamfactory.com/DreamFactory/Features/Scripting](https://wiki.dreamfactory.com/DreamFactory/Features/Scripting)
* [https://wiki.dreamfactory.com/DreamFactory/Tutorials/Server_Side_Scripting](https://wiki.dreamfactory.com/DreamFactory/Tutorials/Server_Side_Scripting)

## Scheduled Tasks

DreamFactory does not natively support scheduled tasks but you can setup a CRON job for this purpose. Let's create an example that calls an API every minute of the day.

### Creating the Script

First we will create the script to call the API. One easy way to do so is by navigating to the `API Docs` tab and copying the cURL command for the appropriate call we would like to make. In this case we have business logic attached to `GET` on `_table/employees` that is synchronizing data between [two databases](chapter03.html#synchronizing-records-between-two-databases).

<p>
<img src="/images/06/curl-schedule.png" width="800">
</p>

Once we have the cURL command we can convert it to PHP by using this [useful tool](https://incarnate.github.io/curl-to-php/). After we will create a file named `cron.php` in the `public` folder containing the generated PHP code.

### Running the CRON job

To start let's define the CRON job parameters:

    * * * * * /usr/bin/php /opt/dreamfactory/public/cron.php >/dev/null 2>&1

This can be broken into 4 parts, the timing, execute PHP, path to script, and the output. In this example the `* * * * *` means it will run once every minute. The second portion is the path to PHP to allow it to be executed. The important part is now providing the full path to the file you would like to run. Finally you can write the output to a file or discard it, in this case I have set it to be discarded. If you would like to learn more about the structure, check out this [article](https://crontab-generator.org/).

Next you will edit the `crontab` by running the following:
    
    crontab -e

You will be put into the text editor where you can simply paste in your CRON job and save it. Now you have a scheduled task running every minute to call your API!

## Configuring Python 3

DreamFactory 3.0 added support for Python 3 due to Python 2.X offically being retired on [January 1, 2020](https://pythonclock.org). Keep in mind DreamFactory's Python 2 integration hasn't gone away! We just wanted to provide users with plenty of time to begin upgrading their scripts to use Python 3 if so desired.

Python 3 scripting support will automatically be made available inside all DreamFactory 3 instances. However, there is an important configuration change that new and upgrading users must consider in order for Python 3 scripting to function properly. Whereas DreamFactory's Python 2 support depends upon [Bunch](https://github.com/dsc/bunch), Bunch does not support Python 3 and so a fork of the Bunch package called [Munch](https://github.com/Infinidat/munch) must be used instead.

You'll install Munch via Python's [pip](https://pip.pypa.io/en/stable/) package manager. A Python 3-specific version of pip known as pip3 should be used for the installation. If your server doesn't already include pip3 (find out by executing `which pip3`), you can install it using your server operating system's package manager. For instance on Ubuntu you can install it like this:

	$ apt-get install -y --allow-unauthenticated python3-pip

With pip3 installed, you can install munch:

	$ pip3 install munch

Once installed, you'll need to update your `.env` file (or server environment variables) to point to the Python 3 interpreter:

	DF_PYTHON3_PATH=/usr/local/bin/python3

You can find your Python 3 interpreter path by executing this command:

	$ which python3

After saving these changes, restart your PHP-FPM and Apache/Nginx service.


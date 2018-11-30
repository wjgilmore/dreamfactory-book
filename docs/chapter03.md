---
sidebar: auto
---

# Chapter 3. Generating a Database-backed API

DreamFactory's capabilities are vast, however there is no more popular feature than its ability to generate a database-backed REST API. By embracing this automated approach, development teams can shave weeks if not months off the development cycle, and in doing so greatly reduce the likelihood of bugs or security issues due to mishaps such as SQL injection. This approach doesn't come at the cost of trade offs either, because DreamFactory's database-backed APIs are fully-featured REST interfaces, offering comprehensive CRUD (create, retrieve, update, delete) capabilities, endpoints for executing stored procedures, and even endpoints for managing the schema.

In this chapter you'll learn all about DreamFactory's ability to generate, secure, and deploy a database-backed API in just minutes. You'll learn by doing, following along as we:

* Generate a new database-backed REST API
* Secure API access to your API using API keys and roles
* Interact with the auto-generated Swagger documentation
* Query the API using a third-party HTTP client

We chose MySQL as the basis for examples throughout the chapter, because it is free, ubiquitously available on hosting providers and cloud environments, and can otherwise be easily installed on all operating systems. Therefore to follow along with this chapter you'll need: 

* Access to a DreamFactory instance and a MySQL database. 
* If your MySQL database is running somewhere other than your laptop, you'll need to make sure your firewall is configured to allow traffic between port 3306 and the location where your DreamFactory instance is running.
* A MySQL user account configured in such a way that it can connect to your MySQL server from the DreamFactory instance's IP address. 

Before we begin, keep in mind MySQL is just one of DreamFactory supported 18 databases. The following table presents a complete list of what's supported:

| Databases           | SQL and No SQL
| --------------------|------------------|
| AWS DynamoDB        | IBM Informix     |
| AWS Redshift        | MongoDB          |
| Azure DocumentDB    | MySQL            |
| Azure Table Storage | Oracle           |
| Cassandra           | PostgreSQL       |
| Couchbase           | Salesforce       |
| CouchDB             | SAP SQL Anywhere | 
| Firebird            | SQLite           |
| IBM Db2             | SQL Server       |


Best of all, thanks to DreamFactory's unified interface and API generation solution, everything you learn in this chapter applies identically to your chosen database! So if you already plan on using another database, then by all means feel free to follow along using it instead!

::: tip
Looking for a more concise overview? Check out our blog post, ["Create a MySQL REST API in Minutes Using DreamFactory"](http://blog.dreamfactory.com/create-a-mysql-rest-api-in-minutes-using-dreamfactory/)!
:::

## Generating a MySQL-backed API

To generate a MySQL-backed API, login to your DreamFactory instance using an administrator account and click on the Services tab:

<img src="/images/03/navbar-services.png" width="800">

On the left side of the interface you'll see the `Create` button. Click this button to begin generating an API. You'll be presented with a single dropdown form control titled `Select Service Type`. You'll use this dropdown to both generate new APIs and configure additional authentication options. There's a lot to review in this menu, but for the moment let's stay on track and just navigate to `Databases` and then `MySQL`:

<img src="/images/03/service-create-mysql.png" width="500">

After selecting MySQL, you'll be presented with the following form:

<img src="/images/03/services-overview.png" width="500">

Let's review these fields:

* **Name**: The name will form part of your API URL, so you'll want to use a lowercase string with no spaces or special characters. Further, you'll want to typically choose something which allows you to easily identify the API's purpose. For instance for your MySQL-backed API you might choose a name such as `mysql`, `corporate`, or `store`.Keep in mind lowercasing the name is a requirement.
* **Label**: The label is used for referential purposes within the administration interface and system-related API responses. You can use something less terse here, such as "MySQL-backed Corporate Database API".
* **Description**: Like the label, the description is used for referential purposes within the administration interface and system-related API responses.
* **Active**: This determines whether the API is active. By default it is set to active however if you're not yet ready to begin using the API or would like to later temporarily disable it, just return to this screen and toggle the checkbox.

After completing these fields, click on the `Config` tab located at the top of the interface. You'll be presented with the following form (I'll only present the top of the form since this one is fairly long):

<img src="/images/03/services-config.png" width="500">

This form might look a bit intimidating at first, however in most cases there are only a few fields you'll need to complete. Let's cover those first, followed by an overview of the optional fields.

### Required Configuration Fields

There are only five (sometimes six) fields which need to be completed in order to generate a database-backed API. These include:

* **Host**: The database server's host address. This may be an IP address or domain name.
* **Port Number**: The database server's port number. For instance on MySQL this is 3306.
* **Database**: The name of the database you'd like to expose via the API.
* **Username**: The username associated with the database user account used to connect to the database.
* **Password**: The password associated with the database user account used to connect to the database.
* **Schema**: If your database supports the concept of a schema, you may specify it here. MySQL doesn't support the concept of a schema, but many other databases do.

::: warning
Keep in mind you'll be generating an API which can in fact interact with the underlying database! While perhaps obvious, once you generate this API it means any data or schema manipulation requests you subsequently issue will in fact affect your database. Therefore be sure to connect to a test database when first experimenting with DreamFactory so you don't wind up issuing a request that you later come to regret.
:::

### Optional Configuration Fields

Following the required fields you'll find a number of optional parameters. These can and do vary slightly according to the type of database you've selected, so don't be surprised if you see some variation below. Don't worry about this too much at the moment, because chances are you're not going to need to modify any of the optional configuration fields at this point in time. However we'd like to identify a few fields which are used more often than others:

* **Maximum Records**: You can use this field to place an upper limit on the number of records returned.
* **Data Retrieval Caching Enabled**: Enabling caching will dramatically improve performance. This field is used in conjunction with `Cache Time to Live`, introduced next.
* **Cache Time to Live (minutes)**: If data caching is enabled, you can use this field to specify the cache lifetime in minutes.

After completing the required fields in addition to any desired optional fields, press the `Save` button to generate your API. After a moment you'll see a pop up message indicating `Service Saved Successfully`. Congratulations you've just generated your first database-backed API! So what can you do with this cool new toy? Read on to learn more.

### A Note About API Capabilities

Most databases employ a user authorization system which gives administrators the ability to determine exactly what a user can do after successfully establishing a connection. In the case of MySQL, *privileges* are used for this purpose. Administrators can grant and revoke user privileges, and in doing so determine what databases a user can connect to, whether the user can create, retrieve, update, and delete records, and whether the user has the ability to manage the schema.

Because DreamFactory connects to your database on behalf of this user, the resulting API is logically constrained by that user's authorized capabilities. DreamFactory will however display a complete set of Swagger documentation regardless, so if you are attempting to interact with the API via the Swagger docs or via any other client and aren't obtaining the desired outcome, be sure to check your database user permissions to confirm the user can indeed carry out the desired task.

Further, keep in mind this can serve as an excellent way to further lock down your API. Although as you'll later learn DreamFactory offers some excellent security-related features for restricting API access, it certainly wouldn't hurt to additionally configure the connecting database user's privileges to reflect the desired API capabilities. For instance, if you intend for the API to be read-only, then create a database user with read-only authorization. If API read and create capabilities are desired, then configure the user accordingly.

## Interacting with Your API via the API Docs Tab

The `Service Saved Successfully` message which appears following successful generation of a new REST API is rather anticlimactic, because this simple message really doesn't convey exactly how much tedious work DreamFactory has just saved you and your team. Not only did it generate a fully-featured REST API, but also secured it from unauthorized access and additionally generated interactive [OpenAPI documentation](https://swagger.io/) for all of your endpoints! If you haven't used Swagger before, you're in for a treat because it's a really amazing tool which allows developers to get familiar with an API without being first required to write any code. Further, each endpoint is documented with details about both the input parameters and response.

To access your new API's documentation, click on the `API Docs` tab located at the top of the screen:

<img src="/images/03/navbar-apidocs.png" width="800">

You'll be presented with a list of all documentation associated with your DreamFactory instance. The `db`, `email`, `files`, `logs`, `system`, and `user` documentation are automatically included with all DreamFactory instances, and can be very useful should you eventually desire to programmatically manage your instance. Let's just ignore those for now and focus on the newly generated database documentation. Click on the table row associated with this service to access the documentation. You'll be presented with a screen that looks like this:

<img src="/images/03/apidocs-mysql.png" width="800">

Scrolling through this list, you can see that quite a few API endpoints have been generated! If you generated an API for a database which supports stored procedures, towards the top you'll find endpoints named `GET /_proc/{procedure_name}` and `POST /_proc/{procedure_name}`. Scrolling down, you'll encounter quite a few endpoints used to manage your schema, followed by a set of CRUD (create, retrieve, update, delete) endpoints which are undoubtedly the most commonly used of the bunch. 

### Querying Table Records

Let's test the API by retrieving a set of table records. Select the `GET /_table/{table_name} Retrieve one or more records` entry:

<img src="/images/03/apidocs-mysql-getrecords.png" width="800">

A slideout window will open containing two sections. The first, `Parameters`, identifies the supported request parameters. The second, `Responses`, indicates what you can expect to receive by way of a response, including the status code and a JSON response template. In the case of the `GET _/table/{table_name}` endpoint, you have quite a few parameters at your disposal, because this endpoint represents the primary way in which table data is queried. By manipulating these parameters you'll be able to query for all records, or a specific record according to its primary key, or a subset of records according to a particular condition. Further, you can use these parameters to perform other commonplace tasks such as grouping and counting records, and joining tables.

To test the endpoint, click the `Try it out` button located on the right. When you do, the input parameter fields will be enabled, allowing you to enter values to modify the default query's behavior. For the moment we're going to modify just one parameter: `table_name`. It's located at the very bottom of the parameter list. Enter the name of a table you know exists in the database, and press the blue `Execute` button. Below the button you'll see a "Loading" icon, and soon thereafter a list of records found in the designated table will be presented in JSON format. Here's an example of what I see when running this endpoint against our test MySQL database:

<img src="/images/03/apidocs-mysql-getrecords-output.png" width="800">

Congratulations! You've just successfully interacted with the database API by way of the Swagger documentation. If you don't see a list of records, be sure to confirm the following:

* Does the specified table exist? 
* If you received a `500` status code, check the service configuration credentials. The `500` code almost certainly means DreamFactory was unable to connect to the database. If everything checks out, make sure you can connect to the database from the DreamFactory instance's IP address via the database port. If you can't then it's probably a firewall issue.

The API Docs interface is fantastically useful for getting familiar with an API, and we encourage you to continue experimenting with the different endpoints to learn more about how it works. However, you'll eventually want to transition from interacting with your APIs via the API Docs interface to doing so using a third-party client, and ultimately by way of your own custom applications. So let's take that next step now, and interact with the new API using an HTTP client. In the last chapter you were introduced to a few such clients. We'll be using Insomnia for the following examples however there will be no material differences between Insomnia, Postman, or any other similar client.

But first we need to create an API key which will be used to exclusively access this database API. This is done by first creating a *role* and then assigning the role to an *application*. Let's take care of this next.

## Creating a Role

Over time your DreamFactory instance will likely manage multiple APIs. Chances are you're going to want to silo access to these APIs, creating one or several API keys for each. These API keys will be configured to allow access to one or some APIs, but in all likelihood not all of them. To accomplish this, you'll create a *role* which is associated with one or more services, and then assign that role to an *application*. An application is just an easy way to connect an API key to a role.

To create a role, click on the `Roles` tab located at the top of the screen:

<img src="/images/03/navbar-roles.png" width="800">

Presuming this is the first time you've created a role, you'll be prompted to create one as depicted in this screenshot:

<img src="/images/03/create-first-role.png" width="400">

Click the `Create a Role!` button and you'll be prompted to enter a role name and description. Unlike the service name, the role name is only used for human consumption so be sure to name it something descriptive such as `MySQL Role`. Next, click the `Access` tab. Here you'll be prompted to identify the API(s) which should be associated with this service. The default interface looks like that presented in the below screenshot:

<img src="/images/03/roles-service-access-definition-form.png" width="800">

The `Service` select box contains all of the APIs you've defined this far, including a few which are automatically included with each DreamFactory instance (`system`, `api_docs`, etc). Select the `mysql` service. Now here's where things get really interesting. After selecting the `mysql` service, click on the `Component` select box. You'll see this select box contains a list of all assets exposed through this API! If you leave the `Component` select box set to `*`, then the role will have access to all of the APIs assets. However, you're free to restrict the role's access to one or several assets by choosing for instance `_table/employees/*`. This would limit this role's access to *just* performing CRUD operations on the `employees` table! Further, using the `Access` select box, you can restrict which methods can be used by the role, selecting only `GET`, only `POST`, or any combination thereof.

If you wanted to add access to another asset, or even to another service, just click the plus sign next to the `Advanced Filters` header, and you'll see an additional row added to the interface:

<img src="/images/03/roles-service-access-definition-form-2.png" width="800">

Use the new row to assign another service and/or already assigned service component to the role. In the screenshot you can see the role has been granted complete access to the `mysql` service's `employees` table, and read-only access to the `departments` table.

Once you are satisfied with the role's configuration, press the `Save` button to create the role. With that done, it's time to create a new application which will be assigned an API key and attached to this role.

## Creating an Application

Next let's create an application, done by clicking on the `Apps` tab located at the top of the interface:

<img src="/images/03/navbar-apps.png" width="800">

Click the `Create` tab to create a new application. You'll be presented with the following form:

<img src="/images/03/app-create.png" width="800">

Let's walk through each form field:

* **Application Name** and **Description**: The application name and description are used purely for human consumption, so feel free to complete these as you see fit.
* **Active**: This checkbox can be used to toggle availability of the API key, which will be generated and presented to you when the application is saved.
* **App Location**: This field presents four options for specifying the application's location. The overwhelming majority of users will choose `No Storage Required` because the API key will be used in conjunction with a mobile or web application, or via a server-side script.
* **Assign a Default Role Filter**: Some of our customers manage dozens and even hundreds of role within their DreamFactory environment! To help them quickly find a particular role we added this real-time filtering feature which will adjust what's displayed in the `Assign a Default Role` select box. You can leave this blank for now.
* **Assign a Default Role**: It is here where you'll assign the newly created role to your application. Click on this select box and choose the role.

Click the `Save` button and the new API key will be generated. Click the clipboard icon next to your new API key to select the key, and then copy it to your clipboard, because in the next section we'll use it to interact with the API.

## Interacting with the API

We'll conclude this chapter with a series of examples intended to help you become familiar with the many ways in which you can interact with a database-backed API. For these examples we'll be using the Insomnia HTTP client (introduced in chapter 2) however you can use any similar client or even cURL to achieve the same results.

### Retrieving All Records

Let's begin by retrieving all of a particular table's records just as was done within the API Docs example. Open your client and in the address bar set the URL to `/api/v2/{service_name}/{table_name}`, replacing `{service_name}` with the name of your API and `{table_name}` with the name of a table found within the database (and to which your API key's associated role has access). For the remainder of this chapter we'll use `mysql` as the service nam, and in this particular example the table we're querying is called `employees` so the URL will look like this:

    http://localhost/api/v2/_table/employees

Also, because we're retrieving records the method will be set to `GET`. 

Next, we'll need to set the header which defines the API key. This header should be named `X-DreamFactory-Api-Key`. You might have to hunt around for a moment within your HTTP client to figure out where this is placed, but we promise it is definitely there. In the case of Insomnia the header is added via a tab found directly below the address bar:

<img src="/images/03/insomnia-api-key.png" width="800">

With the URL and header in place, request the URL and you should see the table records returned in JSON format:

<img src="/images/03/insomnia-all-records.png" width="400">

The equivalent SQL query would look like this:

    SELECT * FROM employees;

### Limiting Results

The previous example returns all records found in the `employees` table. But what if you only wanted to return five or 10 records? You can use the `limit` parameter to do so. Modify your URL to look like this:

    http://localhost/api/v2/_table/employees?limit=10

The equivalent SQL query would look like this:

    SELECT * FROM employees LIMIT 10;

### Ordering Results

You can order results by any column using the `order` parameter. For instance to order the `employees` tab by the `emp_no` field, modify your URL to look like this:

    http://localhost/api/v2/_table/employees?order=emp_no

The equivalent SQL query looks like this:

    SELECT * FROM employees ORDER BY emp_no;

To order in descending fashion, just append `desc` to the `order` string:

	http://localhost/api/v2/_table/employees?order=emp_no%20desc

Note the space separating `emp_no` and `desc` has been HTML encoded. Most programming languages offer HTML encoding capabilities either natively or through a third-party library so there's no need for you to do this manually within your applications. The equivalent SQL query looks like this:

    SELECT * FROM employees ORDER BY emp_no DESC;

### Selecting Specific Fields

It's often the case that you'll only require a few of the fields found in a table. To limit the fields returned, use the `fields` parameter:

	http://localhost/api/v2/_table/employees?fields=emp_no%2Clast_name

The equivalent SQL query looks like this:

    SELECT emp_no, last_name FROM employees;

### Filtering Records by Condition

You can filter records by a particular condition using the `filter` parameter. For instance to return only those records having a `gender` equal to `M`, set the `filter` parameter like so:

	http://localhost/api/v2/_table/employees?filter=(gender=M)

The equivalent SQL query looks like this:

    SELECT * FROM employees where gender='M';

You're free to use any of the typical comparison operators, such as `LIKE`:

    http://localhost/api/v2/_table/employees?filter=(last_name%20like%20G%25)

The equivalent SQL query looks like this:

    SELECT * FROM employees where last_name LIKE 'G%';

### Combining Parameters

The REST API's capabilities really begin to shine when combining multiple parameters together. For example, let's query the `employees` table to retrieve only those records having a `last_name` beginning with `G`, ordering the results by `emp_no`:

    http://localhost/api/v2/_table/employees?filter=(last_name%20like%20G%25)&order=emp_no

The equivalent SQL query looks like this:

    SELECT * FROM employees where last_name LIKE 'G%' ORDER BY emp_no;

### Querying by Primary Key

You'll often want to select a specific record using a column that uniquely defines it. Often (but not always) this unique value is the *primary key*. You can retrieve a record using its primary key by appending the value to the URL like so:

	/api/v2/_table/supplies/45

The equivalent SQL query looks like this:

    SELECT * FROM supplies where id = 5;

If you'd like to use this URL format to search for another unique value not defined as a primary key, you'll need to additionally pass along the `id_field` and `id_type` fields like so:

    /api/v2/_table/employees/45abchdkd?id_field=guid&id_type=string

### Joining Tables

One of DreamFactory's most interesting database-related features is the automatic support for table joins. When DreamFactory creates a database-backed API, it parses all of the database tables, learning everything it can about the tables, including the column names, attributes, and relationships. The relationships are assigned aliases, and presented for referential purposes within DreamFactory's `Schema` tab. For instance, the following screenshot contains the list of relationship aliases associated with the `employees` table:

<img src="/images/03/schema-relationships.png" width="800">

Using these aliases along with the `related` parameter we can easily return sets of joined records via the API. For instance, the following URI would be used to join the `employees` and `departments` tables together:

	/api/v2/mysql/_table/employees?related=dept_emp_by_emp_no

The equivalent SQL query looks like this:

	SELECT * FROM employees 
	  LEFT JOIN departments on employees.emp_no = departments.emp_no;

The joined results will be presented within a JSON array having a name matching that of the alias:

	{
		"emp_no": 10001,
		"birth_date": "1953-09-02",
		"first_name": "Georgi",
		"last_name": "Facello",
		"gender": "M",
		"hire_date": "1986-06-26",
		"birth_year": "1953",
		"dept_emp_by_emp_no": [
			{
				"emp_no": 10001,
				"dept_no": "d005",
				"from_date": "1986-06-26",
				"to_date": "9999-01-01"
			}
		]
	}


### Inserting Records

To insert a record, you'll send a `POST` request to the API, passing along a JSON-formatted payload. For instance, to add a new record to the `supplies` table, we'd send a `POST` request to the following URI:

	/api/v2/mysql/_table/supplies

The body payload would look like this:

    {
        "resource": [
            {
                "name": "Stapler"
            }
        ]
    }

If the request is successful, DreamFactory will return a `200` status code and a response containing the record's primary key:

    {
        "resource": [
          {
            "id": 9
          }
        ]
    }

#### Adding Records to Multiple Tables

It's often the case that you'll want to create a new record and associate it with another table. Believe it or not this is possible via a single HTTP request. Consider the following two tables. The first, `supplies`, manages a list of company supplies (staplers, brooms, etc). The company requires that all supply whereabouts be closely tracked in the corporate database, and so another table, `locations`, was created for this purpose. Each record in the `locations` table includes a location name and foreign key reference to a record found in the `supplies` table. 

::: note
We know in the real world the location names would be managed in a separate table and then a join table 
would relate locations and supplies together; just trying to keep things simple for the purposes of demonstration.
:::

The table schemas look like this:

    CREATE TABLE `supplies` (
	  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	  `name` varchar(255) DEFAULT NULL,
	  PRIMARY KEY (`id`)
	) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

	CREATE TABLE `locations` (
	  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	  `supply_id` int(10) unsigned NOT NULL,
	  `name` varchar(255) DEFAULT NULL,
	  PRIMARY KEY (`id`),
	  KEY `supply_id` (`supply_id`),
	  CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`supply_id`) REFERENCES `supplies` (`id`)
	) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

Remember from the last example that DreamFactory will create convenient join aliases which can be used in conjunction with the `related` parameter. In this case, that alias would be `locations_by_supply_id`. To create the relationship alongside the new `supplies` record, we'll use that alias to nest the location name within the payload, as demonstrated here:


	{
		"resource": [
			{
				"name": "Broom",
				"locations_by_supply_id": [
					{    
						"name": "Broom Closet"
					}
				]
			}
		]
	}

With the payload sorted out, all that remains is to make a request to the `supplies` table endpoint:

    /api/v2/mysql/_table/supplies

If the nested insert is successful, you'll receive a `200` status code in return along with the primary key ID of the newly inserted `supplies` record:

	{
		"resource": [
			{
				"id": 15
			}
		]
	}

### Updating Records

Updating database records is a straightforward matter in DreamFactory. However to do so you'll first need to determine which type of REST update you'd like to perform. Two are supported:

* **PUT**: The `PUT` request replaces an existing resource in its entirety. This means you need to pass along *all* of the resource attributes regardless of whether the attribute value is actually being modified.
* **PATCH**: The `PATCH` request updates only part of the existing resource, meaning you only need to supply the resource primary key and the attributes you'd like to update. This is typically a much more convenient update approach than `PUT`, although to be sure both have their advantages.

Let's work through update examples involving each method.

#### Updating Records with PUT

When updating records with `PUT` you'll need to send along *all* of the record attributes within the request payload:

	{
		"resource": [
			{
				"emp_no": 500015,
				"birth_date": "1900-12-15",
				"first_name": "Johnny",
				"last_name": "Football",
				"gender": "m",
				"hire_date": "2007-01-01"
			}
		]
	}

With the payload in place, you'll send a `PUT` request to the `employees` table endpoint:

    /api/v2/mysql/_table/employees

If successful, DreamFactory will return a `200` status code and a response body containing the primary key of the updated record:

	{
		"resource": [
			{
				"emp_no": 500015
			}
		]
	}

The equivalent SQL query looks like this:

   UPDATE supplies SET first_name = 'Johnny', last_name = 'Football', 
     birthdate = '1900-12-15', gender = 'm', hire_date = '2007-01-01' WHERE emp_no = 500015;

#### Updating Records with PATCH

To update one or more (but not all) attributes associated with a particular record found in the `supplies` table, you'll send a `PATCH` request to the `supplies` table endpoint, accompanied by the primary key:

    /api/v2/mysql/_table/supplies/8

Suppose the `supplies` table includes attributes such as `name`, `description`, and `purchase_date`, but we only want to modify the `name` value. The JSON request body would look like this:

    {
      "name": "Silver Stapler"
    }

If successful, DreamFactory will return a `200` status code and a response body containing the primary key of the updated record:

    {
      "id": 8
    }

The equivalent SQL query looks like this:

   UPDATE supplies SET name = 'Silver Stapler' WHERE id = 8; 

### Deleting Records

To delete a record, you'll send a `DELETE` request to the table endpoint associated with the record you'd like to delete. For instance, to delete a record from the `employees` table you'll reference this URL:

    /api/v2/mysql/_table/employees/500016

If deletion is successful, DreamFactory will return a 200 status code with a response body containing the deleted record's primary key:

    {
        "resource": [
            {
                "emp_no": 500016
            }
        ]
    }

The equivalent SQL query looks like this:

    DELETE FROM employees WHERE emp_no = 500016;

## Conclusion

Congratulations! In less than an hour you've successfully generated, secured, and deployed a database-backed API. In the next chapter, you'll learn how to add additional authentication and authorization solutions to your APIs.

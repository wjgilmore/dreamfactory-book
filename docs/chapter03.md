# Chapter 3. Generating a Database-backed API

DreamFactory's capabilities are vast, however there is no more popular feature than its ability to generate a database-backed REST API. By embracing this automated approach, development teams can shave weeks if not months off the development cycle, and in doing so greatly reduce the likelihood of bugs or security issues due to mishaps such as SQL injection. This approach doesn't come at the cost of trade offs either, because DreamFactory's database-backed APIs are fully-featured REST interfaces, offering comprehensive CRUD (create, retrieve, update, delete) capabilities, endpoints for executing stored procedures, and even endpoints for managing the schema.

In this chapter you'll learn all about DreamFactory's database support by way of an introduction to the following topics:

* Generating a new database-backed REST API
* Interacting with the auto-generated Swagger documentation
* Securing API access to your API using API keys and roles

We chose MySQL as the basis for examples found throughout the chapter, because it is free, ubiquitously available on hosting providers and cloud environments, and can otherwise be easily installed on all operating systems. Therefore to follow along with this chapter you'll need: 

* Access to a DreamFactory instance and a MySQL database. 
* If your MySQL database is running somewhere other than your laptop, you'll need to make sure your firewall is configured to allow traffic between port 3306 and the location where your DreamFactory instance is running.
* A MySQL user account configured in such a way that it can connect to your MySQL server from the DreamFactory instance's IP address. 

Before we begin, keep in mind MySQL is just one of DreamFactory supported 18 databases. The following table presents a complete list of what's supported:

TABLE HERE

Best of all, thanks to DreamFactory's unified interface and API generation solution, everything you learn in this chapter applies identically to your chosen database! So if you already plan on using another database, then by all means feel free to follow along using it instead!

## Generating a MySQL-backed API

To generate a MySQL-backed API, login to your DreamFactory instance using an administrator account and click on the Services tab:

![The Services Tab](/images/navbar-services.png)

On the left side of the interface you'll see the `Create` button. Click this button to begin generating an API. You'll be presented with a single dropdown form control titled `Select Service Type`. You'll use this dropdown to both generate new APIs and configure additional authentication options. There's a lot to review in this menu, but for the moment let's stay on track and just navigate to `Databases` and then `MySQL`:

<img src="/images/service-create-mysql.png" width="1000">

After selecting MySQL, you'll be presented with the following form:

<img src="/images/services-overview.png" width="1000">

Let's review these fields:

* **Name**: The name will form part of your API URL, so you'll want to use a lowercase string with no spaces or special characters. Further, you'll want to typically choose something which allows you to easily identify the API's purpose. For instance for your MySQL-backed API you might choose a name such as `mysql`, `corporate`, or `store`. 
* **Label**: The label is used for referential purposes within the administration interface and system-related API responses. You can use something less terse here, such as "MySQL-backed Corporate Database API".
* **Description**: Like the label, the description is used for referential purposes within the administration interface and system-related API responses.
* **Active**: This determines whether the API is active. By default it is set to active however if you're not yet ready to begin using the API or would like to later temporarily disable it, just return to this screen and toggle the checkbox.

After completing these fields, click on the `Config` tab located at the top of the interface. You'll be presented with the following form (I'll only present the top of the form since this one is fairly long):

<img src="/images/services-config.png" width="1000">

This form might look a bit intimidating at first, however in most cases there are only a few fields you'll need to complete. Let's cover those first, followed by an overview of the optional fields.

### Required Configuration Fields



* **Host**: 
* **Port Number**:
* **Database**:
* **Username**:
* **Password**


W> Keep in mind you'll be generating an API which can in 
W> fact interact with the underlying database! While perhaps 
W> obvious, once you generate this API it means any data or 
W> schema manipulation requests you subsequently issue will 
W> in fact affect your database. Therefore be sure to connect 
W> to a test database when first experimenting with DreamFactory 
W> so you don't wind up issuing a request that you later come to regret.

### Optional Configuration Fields

Following the required fields you'll find a number of optional parameters. These can and do vary slightly according to the type of database you've selected, so don't be surprised if you see some variation below. Don't worry about this too much at the moment, because chances are high you're not going to need to modify any of the optional configuration fields at this point in time. However it's nonetheless instructive to at least review their capabilities in case you want to return to them later:

* **Schema**:
* **Character Set**:
* **Character Set Collation**:
* **Timezone**:
* **Session Modes**:
* **Use Strict Mode**:
* **Socket Connection**:
* **Driver Options**:
* **Driver Attributes**:
* **Additional SQL Statements**:
* **Allow Upsert**:
* **Maximum Records**:
* **Data Retrieval Caching Enabled**:
* **Cache Time to Live (minutes)**:

After completing the required fields in addition to any desired optional fields, press the `Save` button to generate your API. After a moment you'll see a pop up message indicating `TODO`. Congratulations you've just generated your first database-backed API! So what can you do with this shiny new toy? Read on to learn more.

### A Note About API Capabilities

Most databases employ a user authorization system which gives administrators the ability to determine exactly what a user can do after successfully establishing a connection. In the case of MySQL, *privileges* are used for this purpose. Administrators can grant and revoke user privileges, and in doing so determine what databases a user can connect to, whether the user can create, retrieve, update, and delete records, and whether the user has the ability to manage the schema.

Because DreamFactory connects to your database on behalf of this user, the resulting API is logically constrained by that user's authorized capabilities. DreamFactory will however display a complete set of Swagger documentation regardless, so if you are attempting to interact with the API via the Swagger docs or via any other client and aren't obtaining the desired outcome, be sure to check your database user permissions to confirm the user can indeed carry out the desired task.

Further, keep in mind this can serve as an excellent way to further lock down your API. Although as you'll later learn DreamFactory offers some excellent security-related features for restricting API access, it certainly wouldn't hurt to additionally configure the connecting database user's privileges to reflect the desired API capabilities. For instance, if you intend for the API to be read-only, then create a database user with read-only authorization. If API read and create capabilities are desired, then configure the user accordingly.

## Interacting with Your API via the API Docs Tab

The `TODO` message which appears following successful generation of a new REST API is rather anticlimactic, because this simple message really doesn't convey exactly how much tedious work DreamFactory has just saved you and your team. Not only did it generate a fully-featured REST API, but also secured it from unauthorized access and additionally generated interactive [Swagger documentation](TODO) for all of your endpoints! If you haven't used Swagger before, you're in for a treat because it's a really amazing tool which allows developers to get familiar with an API without being first required to write any code. Further, each endpoint is documented with details about both the input parameters and response.

To access your new API's documentation, click on the `API Docs` tab located at the top of the screen:

INSERT API DOCS NAV BAR HIGHLIGHT HERE

You'll be presented with a list of all documentation associated with your DreamFactory instance. The `db`, `email`, `files`, `logs`, `system`, and `user` documentation are automatically included with all DreamFactory instances, and can be very useful should you eventually desire to programmatically manage your instance. Let's just ignore those for now and focus on the newly generated database documentation. Click on the table row associated with this service to access the documentation. You'll be presented with a screen that looks like this:

DOCS SCREENSHOT, FADED AT BOTTOM

Scrolling through this list, you can see that quite a few API endpoints have been generated! If you generated an API for a database which supports stored procedures, towards the top you'll find endpoints named `TODO` and `TODO`. Scrolling down, you'll encounter quite a few endpoints used to manage your schema, followed by a set of CRUD (create, retrieve, update, delete) endpoints which are undoubtedly the most commonly used of the bunch. 

### Querying Table Records

Let's test the API by retrieving a set of table records. Select the `GET /_table/{table_name} Retrieve one or more records` entry:

ENDPOINT LINE ITEM SCREENSHOT

A slideout window will open containing two sections. The first, `Parameters`, identifies the supported request parameters. The second, `Responses`, indicates what you can expect to receive by way of a response, including the status code and a JSON response template. In the case of the `GET _/table/{table_name}` endpoint, you have quite a few parameters at your disposal, because this endpoint represents the primary way in which table data is queried. By manipulating these parameters you'll be able to query for all records, or a specific record according to its primary key, or a subset of records according to a particular condition. Further, you can use these parameters to perform other commonplace tasks such as grouping and counting records, and joining tables.

To test the endpoint, click the `Try it out` button located on the right. When you do, the input parameter fields will be enabled, allowing you to enter values to modify the default query's behavior. For the moment we're going to modify just one parameter: `table_name`. It's located at the very bottom of the parameter list. Enter the name of a table you know exists in the database, and press the blue `Execute` button. Below the button you'll see a "Loading" icon, and soon thereafter a list of records found in the designated table will be presented in JSON format. Here's an example of what I see when running this endpoint against our test MySQL database:

MYSQL DB TABLE RECORD OUTPUT

Congratulations! You've just successfully interacted with the database API by way of the Swagger documentation. If you don't see a list of records, be sure to confirm the following:

* Does the specified table exist? 
* If you received a `500` status code, check the service configuration credentials. The `500` code almost certainly means DreamFactory was unable to connect to the database. If everything checks out, make sure you can connect to the database from the DreamFactory instance's IP address via the database port. If you can't then it's probably a firewall issue.

The API Docs interface is fantastically useful for getting familiar with an API, and we encourage you to continue experimenting with the different endpoints to learn more about how it works. However, you'll eventually want to transition from interacting with your APIs via the API Docs interface to doing so using a third-party client, and ultimately by way of your own custom applications. So let's take that next step now, and interact with the new API using a tool located squarely outside of the DreamFactory platform.

## Using an HTTP Client

Whether your API consumer is an iPhone or Android application, a SPA (Single Page Application), or another server altogether, that consumer is often referred to as the *client*. The client issues HTTP requests to the REST API, parsing the responses and reacting accordingly. Although in most cases your team will use libraries such as [Alamofire](https://github.com/Alamofire/Alamofire) or [Axios](https://github.com/axios/axios) to manage these requests, you'll often want to interact with the APIs in a much more fluid manner during the investigatory and learning phase. The API Docs feature serves this need well, however the API Docs interface lacks the ability to bookmark and otherwise persist queries, manage parameters programmatically using variables, and other features useful for maintaining a set of easily accessible configurations.

Fortunately, there are a number of HTTP clients which fill this void very well. Two of the most popular are [Insomnia](TODO) and [Postman](TODO), which are available on OSX and multiple operating systems, respectively. In this section we'll introduce you to both HTTP clients, and as an added bonus talk about the ubiquitous cURL client which is quite possibly the most popular piece of software you've never heard of.

### Insomnia

Insomnia is an

### POSTMan


### cURL


cURL is decidedly the antithesis of Insomnia and Postman, 


### Querying by Primary Key

### Adding a Record Filter


### Grouping Records

### Inserting Records

###







### Creating a New Record

	{
		"resource": [
			{
				"dept_no": "d015",
				"dept_name": "Fruit Department"
			}
		]
	}

#### Adding Records to Multiple Tables

	CREATE TABLE `locations` (
	  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	  `supply_id` int(10) unsigned NOT NULL,
	  `name` varchar(255) DEFAULT NULL,
	  PRIMARY KEY (`id`),
	  KEY `supply_id` (`supply_id`),
	  CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`supply_id`) REFERENCES `supplies` (`id`)
	) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;


	CREATE TABLE `supplies` (
	  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	  `name` varchar(255) DEFAULT NULL,
	  PRIMARY KEY (`id`)
	) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

Call /api/v2/mysql/_table/supplies

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

Response

	{
		"resource": [
			{
				"id": 1
			}
		]
	}



### Updating Records

#### PUT

#### PATCH

### Deleting Records

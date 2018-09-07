# Chapter 3. Generating a Database-backed API

Although DreamFactory supports almost 60 data sources, in addition to the ability to mount third-party REST and SOAP services, and create completely custom scripted services using four supported scripting engines (Node.js, PHP, Python, and V8.js), it might not come as a surprise that DreamFactory's database support is by far the most popular feature. Databases are after all an indispensable part of the application ecosystem, providing a persistent store for every conceivable type of data.

In this chapter you'll learn all about DreamFactory's database support by way of an introduction to the following topics:

* Generating a new database-backed REST API
* Interacting with the auto-generated Swagger documentation
* Securing access to your API using API keys and roles

## Supported Databases

Although DreamFactory offers API generation capabilities for a wide variety of services, including file systems, e-mail delivery providers, and IoT device message brokers, the platform’s database support is far and away the most popular feature. It’s no wonder, considering the ability to expose CRUD (create, retrieve, update, delete) endpoints in just minutes is incredibly appealing, considering manually building out such features often takes at minimum weeks of work.

## Generating a MySQL-backed REST API



## Interacting with Your API via the API Docs Tab


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

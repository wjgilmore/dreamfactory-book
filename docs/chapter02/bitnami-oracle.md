---
sidebar: auto
---

# Configuring Oracle on Bitnami

These instructions are for configuring the Oracle drivers to work with DreamFactory's commercial Bitnami edition.

To begin, follow steps 1-3 found in this section of the Bitnami documentation:

* [Bitnami Oracle documentation](https://docs.bitnami.com/installer/apps/dreamfactory/administration/configure-oracledb/)

Once that's done, you'll want to complete one more step. SSH into the server where your DreamFactory Bitnami installation is hosted, and navigate to the `/php/bin` directory found inside the installation directory. For reference purposes, we'll use the `INSTALL_DIR` placeholder to refer to this directory/

	$ cd /INSTALL_DIR/php/bin

Next, run the following command, making sure you prefix the `php` command with `./`:

	$ ./php -i | grep ini

In the output you will see the following line:

	Loaded Configuration File => /opt/dreamfactorygold-3.0.1-0/php/etc/php.ini

The value of `Loaded Configuration File` identifies the location of Bitnami's `php.ini` configuration file. Keep in mind your path might be different from the example presented above. Open this `php.ini` file with a text editor and search for this line:

	;extension=oci8.so

Uncomment it by removing the semicolon and save the changes. Now restart Bitnami's Apache server:

	$ cd /INSTALL_DIR/
	$ ./ctlscript restart apache

Once restarted your DreamFactory Bitnami instance is capable of connecting to an Oracle database. After configuring a new Oracle API using DreamFactory's Oracle service connector, head over to the `API Docs` tab to confirm you can connect to the Oracle database. One of the easiest ways to do so is by executing the following endpoint:

	GET /_table Retrieve one or more OracleTables.

Executing this endpoint will result in a list of tables being returned from the connected database.

## Troubleshooting Oracle Connections

DreamFactory uses PHP's [OCI8](https://www.php.net/manual/en/ref.oci8.php) library to connect to and interact with Oracle databases. Therefore successful installation of the Oracle client driver and SDK is a crucial part of the process. Sometimes it is useful to attempt a connection outside of DreamFactory in order to further isolate the problem. One way to do so is by placing the following PHP script on the same server where DreamFactory is installed:

	<?php
	    $conn=oci_connect("USERNAME","PASSWORD","HOST/DATABASE");
		if (!$conn) {
	        $e = oci_error();
	        echo 'Could not connect to Oracle:';
	        echo $e['message'];
	        
	    } else {
	        echo 'Successfully connected to Oracle';
	    }

	oci_close($conn);
	?>

Replace the `USERNAME`, `PASSWORD`, and `HOST/DATABASE` placeholders with your credentials, name the script `oracle.php` or similar, and place it in the `public` directory of your DreamFactory installation. Then open a browser and navigate to `https://YOUR_DOMAIN/oracle.php`. If the connection is successful you'll see a corresponding message; otherwise you should see some additional details pertaining to the nature of the error.
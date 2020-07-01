---
sidebar: auto
---

# Configuring on Bitnami

These instructions are for configuring the drivers to work with DreamFactory's commercial Bitnami edition.

## Bitnami Linux Oracle

To begin, follow steps 1-3 found in this section of the Bitnami documentation:

* [Bitnami  documentation](https://docs.bitnami.com/installer/apps/dreamfactory/administration/configure-db/)

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

Once restarted your DreamFactory Bitnami instance is capable of connecting to an  database. After configuring a new  API using DreamFactory's  service connector, head over to the `API Docs` tab to confirm you can connect to the  database. One of the easiest ways to do so is by executing the following endpoint:

	GET /_table Retrieve one or more Tables.

Executing this endpoint will result in a list of tables being returned from the connected database.

## Bitnami Windows Oracle

Start by downloading the Oracle Instant Client [here](https://www.oracle.com/database/technologies/instant-client/downloads.html). Since the Windows Bitnami stack is 64-bit you need to download the 64-bit instant client.

Upon successful download you can now extract the zip file to your preferred location, such as C:\instantclient_X_X.

Edit the below line in your php.ini file (C:\Bitnami\dreamfactory-x.x.x-x\php\php.ini) by removing the semicolon before extension. If you installed Instant Client 19 at the beginning you will still leave the extension uncommented as 12c. This is the only way PHP will recognize the driver.

	;extension=php_oci8_12c.dll  ; Use with Oracle Database 12c Instant Client

Now we must make our Windows machine aware of the driver, go to Control Panel->System->Advanced System Settings.

Click on Environment Variables and under System variables, double click on Path. At the end of the Variable value, add the path to the instant client directory. Use a semicolon to separate this new entry from the current last entry.

	;C:\instantclient_X_X

Restart the system

## Troubleshooting  Connections

DreamFactory uses PHP's [OCI8](https://www.php.net/manual/en/ref.oci8.php) library to connect to and interact with  databases. Therefore successful installation of the  client driver and SDK is a crucial part of the process. Sometimes it is useful to attempt a connection outside of DreamFactory in order to further isolate the problem. One way to do so is by placing the following PHP script on the same server where DreamFactory is installed:

	<?php
	    $conn=oci_connect("USERNAME","PASSWORD","HOST/DATABASE");
		if (!$conn) {
	        $e = oci_error();
	        echo 'Could not connect to :';
	        echo $e['message'];
	        
	    } else {
	        echo 'Successfully connected to ';
	    }

	oci_close($conn);
	?>

Replace the `USERNAME`, `PASSWORD`, and `HOST/DATABASE` placeholders with your credentials, name the script `.php` or similar, and place it in the `public` directory of your DreamFactory installation. Then open a browser and navigate to `https://YOUR_DOMAIN/.php`. If the connection is successful you'll see a corresponding message; otherwise you should see some additional details pertaining to the nature of the error.
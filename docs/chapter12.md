---
sidebar: auto
---

# Chapter 12. Creating File System APIs



## Creating an SFTP REST API

SFTP (SSH File Transfer Protocol) is the secure version of FTP, capable of transferring data over a Secure Shell (SSH) data stream. Despite the media buzz being focused on file services like Dropbox and AWS S3, SFTP-based file transfers remain an indispensable part of IT infrastructures large and small. But incorporating SFTP functionality into a web application or system management script can be a real drag. Fortunately you can use DreamFactory to easily create a full-featured REST API for your SFTP servers. This API can perform all of the standard tasks associated with an SFTP server, including:

* Creating, listing, updating, and deleting folders
* Creating, listing, retrieving, updating, and deleting files

In this tutorial we'll show you how to configure DreamFactory's SFTP connector, and then walk through several usage examples. 

### Generating the SFTP API and Companion Documentation

To generate your SFTP API, log into DreamFactory and click on the `Services` tab, then click the `Create` link located on the left side of the page. Click on the `Select Service Type` dropdown, navigate to the `File` category, and select `SFTP File Storage`:

<p>
<img src="/images/12/sftp-select.png" width="600">
</p>

You'll be prompted to supply an API name, label, and description. Keep in mind the name must be lowercase and alphanumeric, as it will be used as the namespace within your generated API URI structure. The label and description are used for reference purposes within the administration console so you're free to title these as you please:

<p>
<img src="/images/12/sftp-create-info.png" width="600">
</p>

Next, click the `Config` tab. There you'll supply the SFTP server connection credentials. There are however only 5 required fields:

* **Host**: The SFTP server hostname or IP address.
* **Port**: The SFTP server port. This defaults to 22.
* **Username**: The connecting account username.
* **Password**: The connecting account password.
* **Root folder**: The designated SFTP account root directory.

The other fields (**Timeout**, **Host Finger Print**, **Private Key**) are not always required, and depend upon your particular SFTP server's configuration.

After saving your changes, head over to the `API Docs` tab to review the generated documentation. You'll be presented with a list of 13 generated endpoints:

<p>
<img src="/images/12/sftp-api-docs.png" width="600">
</p>

### Listing Directory Contents

If the root directory you identified during the configuration process already contains a few files and/or directories, click on the `List the folder's content, including properties` endpoint and press `Try It Out`. Doing so will enable all of the supported parameters for this endpoint, allowing you to experiment. Scroll down to the `folder_path` parameter, set it to `/`, and press `Execute`. You should see output similar to the following:

	{
	  "resource": [
	    {
	      "path": "Marketing/",
	      "type": "folder",
	      "name": "Marketing",
	      "last_modified": "Tue, 23 Jul 2019 15:31:31 GMT"
	    },
	    {
	      "path": "Operations/",
	      "type": "folder",
	      "name": "Operations",
	      "last_modified": "Tue, 23 Jul 2019 15:31:20 GMT"
	    }
	  ]
	}

### Creating a Folder

To create a folder, you can use one of two endpoints:

* `POST / Create some folders and/or files`
* `POST /{folder_path}/ Create a folder and/or add content`

These endpoints are identical in functionality, but their URI signatures differ so you might choose one over the other depending upon the desired approach. Let's start by creating a single empty folder. To do so, click on the `POST / Create some folders and/or files` endpoint inside API Docs, press the `Try It Out` button, and enter a folder name in the `X-Folder-Name` field. In the `folder_path` field enter the destination path, such as `/`. Press `Execute` and the folder will be created and a `201` response code returned with a response body that looks like this:

	{
	  "name": "Marketing",
	  "path": "Marketing"
	}

Note the `X-Folder-Name` field is identified as a header, meaning you'll need to handle it accordingly when performing an API call outside of API Docs. The screenshot below shows you how this is handled in the great HTTP testing client Insomnia:

<p>
<img src="/images/12/sftp-create-directory.png" width="600">
</p>

### Creating an AWS S3 REST API

Section forthcoming.


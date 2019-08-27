---
sidebar: auto
meta:
  - name: "name"
    content: Integrating Business Logic Into Your DreamFactory APIs
  - name: "description"
    content: This chapter shows you how to add business logic to your DreamFactory APIs, allowing you to validate input parameters, transform responses, call other APIs, and more.
---

# Chapter 6. Integrating Business Logic Into Your DreamFactory APIs

TODO

## The Scripting Interface

### Supported Scripting Engines

## Scripting Examples

### Validating Client Input

### Masking Sensitive Data

### Transforming Response Content

### Calling Other APIs

## Scheduled Tasks

DreamFactory does not natively support scheduled tasks but you can easily setup a CRON job for this. We will walk through calling an API every minute which can be very useful if you have business logic attached to the endpoint as well.

### Creating the Script

First we will have to create the script to call the API. We can go to the `API Docs` tab and get the cURL command for the appropriate call we would like to make. In this case we have business logic attached to `GET` on `_table/employees` that is syncing data between [two databases](chapter03.html#synchronizing-records-between-two-databases).

<p>
<img src="/images/06/curl-schedule.png" width="800">
</p>

Once we have the cURL command we can convert it to PHP by using this [useful tool](https://incarnate.github.io/curl-to-php/). After we will create a file named `cron.php` in the `public` folder containing the output from [Curl to PHP](https://incarnate.github.io/curl-to-php/).

### Running the CRON job

To start lets analyze the below CRON job.

    * * * * * /usr/bin/php /opt/dreamfactory/public/cron.php >/dev/null 2>&1

This can be broken down into 4 parts, the timing, execute PHP, path to script, and the output. In this example the `* * * * *` means it will run once every minute. The second portion is the path to PHP to allow it to be executed. The important part is now providing the full path to the file you would like to run. Finally you can write the output to a file or discard it, in this case I have set it to be discarded. If you would like to learn more about the structure, check out this [article](https://crontab-generator.org/).

Next you will edit the `crontab` by running the following:
    
    crontab -e

You will be put into the text editor where you can simply paste in your CRON job and save it. Now you have a scheduled task running every minute to call your API!




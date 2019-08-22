---
sidebar: auto
---

# Configuring Firebird for DreamFactory

These instructions are for installing the Firebird driver from its [source code](https://github.com/php/pecl-database-interbase).

## Install the Firebird driver

    cd /tmp
    git clone https://github.com/php/pecl-database-interbase.git
    cd pecl-database-interbase/
    apt-get install firebird-dev autoconf build-essential
    phpize --clean
    phpize
    ./configure
    make
    make install

Once downloaded, you will want to enable the driver in your php.ini file. After that, the extension will appear in the list of enabled extensions.

    php -m
    [PHP Modules]

## Troubleshooting

If you receive a 500 error with the message of `The Response content must be a string or object`, make sure your database is configured for UTF8.
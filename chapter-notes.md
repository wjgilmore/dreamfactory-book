# README

### Chapter 8. Troubleshooting Your APIs

Rest assured the DreamFactory platform is going to do an amazing job at generating your API. We can also guarantee you’ll soon thereafter curse DreamFactory when attempting to query that API. Chances are these initial challenges can be easily overcome using our troubleshooting guide in conjunction with a popular HTTP client. If not, in this chapter we’ll outline ways in which you can contribute to DreamFactory and help us improve the platform!

# Chapter X. Production Best Practices

## Performance

For database-backed APIs, there is no more impactful task one could
take than properly indexing the database in addition to ensuring the
database server has been allocated appropriate hardware and network
resources.

Enable database API caching whenever practical at service creation
time, as it will undoubtedly improve performance.

You can achieve particularly high performance by compiling your
DreamFactory application code using OPcache. You can learn more about
OPcache here: http://php.net/manual/en/book.opcache.php.

DreamFactory instances may be load balanced, and can be configured to
share the system database, cache details, and other information
necessary to operate in a distributed environment.

DreamFactory enables file-based caching by default, however you may
opt to configure one of the other supported caching solutions, such as
Redis.

## Security

For database-backed APIs, create the API using a database account
possessing privileges closely corresponding to your API privilege
requirements. For instance, if the database includes a table called
`employees` but there is no intention for this table to be accessible
via the API, then configure the proxy user's privileges accordingly.

Never use a blanket API key for your APIs! Instead, create roles which
expressly define the level of privileges intended to be exposed via
the API, and then associate the role with a new App and corresponding
API Key. Don't be afraid to create multiple roles and therefore
multiple corresponding API keys if you'd like to limit API access in
different ways on a per-client or group basis.

Configure your DreamFactory web administration console to use SSL.
Never run your environment on port 80 as like any web application it
raises the likelihood your administration login credentials could be
stolen by a malicious third-party.

Should you need to make API documentation available to team members,
use DreamFactory's user-centric role assignment feature to make solely
the documentation available to the team members, rather than granting
unnecessary administrative access.

When running DreamFactory in a production environment, be sure to set
the `.env` file's `APP_ENV` value to `production` and `APP_DEBUG` to
`false`. Leaving it set to `local` will result in detailed
error-related information being returned to the client rather than
quietly logged to the log file.

## Maintenance

* Do not use Bitnami in production environments. While Bitnami
undoubtedly offers a turnkey approach to getting started with
DreamFactory, it is intended for use solely during the exploratory and
development phases of your project. Certain Bitnami characteristics
make subsequent software upgrades difficult and therefore raise the
likelihood production environment upgrades will be unreasonably
delayed.

* Please monitor the DreamFactory blog at
https://blog.dreamfactory.com and/or subscribe to the DreamFactory
newsletter for occasional updates regarding new platform releases. You
are encouraged to review the release details and take steps to upgrade
your platform to the latest version as practical.

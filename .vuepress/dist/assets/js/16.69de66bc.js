(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{156:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("The DreamFactory platform is build atop the "),a("a",{attrs:{href:"https://www.laravel.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel"),a("OutboundLink")],1),e._v(". Laravel is an amazing PHP-based framework that in just a few short years has grown in popularity to become one of the today's most popular framework solutions regardless of language. We speculate there are several reasons for such soaring popularity, including a thoroughly pragmatic approach, security-first implementation, fantastic documentation, and a comprehensive ecosystem (in addition to the framework itself, the Laravel development team also maintains an e-commerce framework called Spark, an application adminstration toolkit called Nova, and an application deployment service called Envoyer. Further, it's also quite performant, capable of serving as the backbone for high-traffic, mission critical applications. Regardless, like any application you're going to want to learn all you can about how to best go about maintaining, securing, and optimizing the environment. This chapter tackles all three topics.")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Ensuring the DreamFactory-generated database APIs are running at peak performance is accomplished by ensuring your database is properly configured, has been allocated appropriate hardware and network resources, and turning on DreamFactory's database caching feature. In this section we'll talk more about all of these tasks.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Database_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("Database Indexes Defined"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/indexes/indexes?view=sql-server-2017",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft SQL Server"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/indexes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/optimization-indexes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.oracle.com/cd/E11882_01/server.112/e40540/indexiot.htm#CNCPT721",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.postgresql.org/docs/9.1/indexes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostgreSQL"),a("OutboundLink")],1)])]),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("Enable database API caching whenever practical at service creation time, as it will undoubtedly improve performance.")]),e._v(" "),a("img",{attrs:{src:"/images/10/database_caching.png",width:"800"}}),e._v(" "),a("p",[e._v("You can achieve particularly high performance by compiling your DreamFactory application code using OPcache. You can learn more about OPcache in these links:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"http://php.net/manual/en/book.opcache.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official PHP Docs"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/appstract/make-your-laravel-app-fly-with-php-opcache-9948db2a5f93",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Make your Laravel App Fly"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("DreamFactory instances may be load balanced, and can be configured to share the system database, cache details, and other information necessary to operate in a distributed environment. Below are some links that may help you configure a load balancer with some of the most common cloud providers.")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon Web Services"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://cloud.google.com/load-balancing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Azure"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.ibm.com/cloud/load-balancer",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Cloud"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("DreamFactory enables file-based caching by default, however you may opt to configure one of the other supported caching solutions, such as Redis. Please see these links to see connection tutorials:")]),e._v(" "),a("ol",[e._m(5),e._v(" "),a("li",[a("a",{attrs:{href:"http://blog.dreamfactory.com/new-dreamfactory-cache-service-supports-redis-memcahed-and-local-storage/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blog - Caching"),a("OutboundLink")],1)])]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("Always make sure your "),a("code",[e._v("CORS")]),e._v(' settings are only set for the appropriate "scheme/host/port tuple" to ensure you are observing the maximum security you can by only allowing cross origin resources access when there is no other way around it.  For a great explanation of '),a("code",[e._v("CORS")]),e._v(" and how they work, please see this "),a("a",{attrs:{href:"http://performantcode.com/web/do-you-really-know-cors",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),a("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(8),e._v(" "),a("img",{attrs:{src:"/images/10/cors.png",width:"800"}}),e._v(" "),e._m(9),e._v(" "),a("p",[e._v("Never use a blanket API key for your APIs! Instead, create roles which expressly define the level of privileges intended to be exposed via the API, and then associate the role with a new App and corresponding API Key. Don't be afraid to create multiple roles and therefore multiple corresponding API keys if you'd like to limit API access in different ways on a per-client or group basis.")]),e._v(" "),e._m(10),e._v(" "),a("img",{attrs:{src:"/images/10/role_detail.png",width:"800"}}),e._v(" "),e._m(11),e._v(" "),a("p",[e._v("From a networking standpoint DreamFactory is a typical web application, meaning you can easily encrypt all web traffic between the platform and client using an SSL certificate. Unless you've already taken steps to add an SSL certificate to your web server, by default your DreamFactory instance will run on port 80, which means all traffic between your DreamFactory server and client will be unencrypted and therefore subject to capture and review. To fix this, you'll want to install an SSL certificate. One of our favorite resources to create SSL certificates is "),a("a",{attrs:{href:"https://letsencrypt.org/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Let's Encrypt"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Below are resources on how to add an SSL cert to your web server:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"http://nginx.org/en/docs/http/configuring_https_servers.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nginx"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=X3Pr5VATOyA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nginx YouTube Video"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=NfUoiv4FTSs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache YouTube Example"),a("OutboundLink")],1)])]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._m(15),e._v(" "),a("p",[e._v("New DreamFactory users often conflate the web administration interface with the API platform; in fact, the web administration interface is just a client like any other. It just so happens that the DreamFactory team built this particular interface expressly for managing the platform in an administrative capacity. This interface talks to the platform using a series of administrative APIs exposed by the platform, and accessible only when requests are accompanied by a session token associated with an authenticated administrator.")]),e._v(" "),a("p",[e._v("By default this interface runs on the same server as the platform itself. Some users prefer to entirely separate the two, running the interface in one networking environment and entirely isolating the platform in another.")]),e._v(" "),a("p",[e._v("TODO: Add link to df-admin-app README.")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"chapter-08-optimizing-securing-and-maintaining-your-dreamfactory-enviroment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chapter-08-optimizing-securing-and-maintaining-your-dreamfactory-enviroment","aria-hidden":"true"}},[this._v("#")]),this._v(" Chapter 08. Optimizing, Securing, and Maintaining Your DreamFactory Enviroment")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"optimizing-dreamfactory-s-database-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimizing-dreamfactory-s-database-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" Optimizing DreamFactory's Database APIs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"index-the-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index-the-database","aria-hidden":"true"}},[this._v("#")]),this._v(" Index the Database")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For database-backed APIs, there is no more impactful task one could take than properly indexing the database. Database indexing is what allows your database engine to quickly identify which rows match conditions defined by a "),t("code",[this._v("where")]),this._v(" clause. Refer to the following resources for both general and database-specific indexing information:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"database-api-caching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-api-caching","aria-hidden":"true"}},[this._v("#")]),this._v(" Database API Caching")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{attrs:{href:"c94200f4d0567522370908afcdafd28d"}},[this._v("YouTube - Setting up and using Redis")]),t("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"security-dreamfactory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-dreamfactory","aria-hidden":"true"}},[this._v("#")]),this._v(" Security DreamFactory")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"cors-security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors-security","aria-hidden":"true"}},[this._v("#")]),this._v(" CORS Security")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("You can modify your "),t("code",[this._v("CORS")]),this._v(" settings in DreamFactory under the "),t("code",[this._v("Config")]),this._v(" tab.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For database-backed APIs, create the API using a database account privileges that closely correspond to your API privilege requirements. For instance, if the database includes a table called "),t("code",[this._v("employees")]),this._v(" but there is no intention for this table to be accessible via the API, then configure the proxy user's privileges accordingly.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Should you need to make API documentation available to team members, use DreamFactory's user-centric role assignment feature to make solely the documentation available to the team members, rather than granting unnecessary administrative access.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"securing-your-web-traffic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#securing-your-web-traffic","aria-hidden":"true"}},[this._v("#")]),this._v(" Securing Your Web Traffic")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"suppressing-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#suppressing-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Suppressing Errors")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("When running DreamFactory in a production environment, be sure to set the "),a("code",[e._v(".env")]),e._v(" file's "),a("code",[e._v("APP_ENV")]),e._v(" value to "),a("code",[e._v("production")]),e._v(" and "),a("code",[e._v("APP_DEBUG")]),e._v(" to "),a("code",[e._v("false")]),e._v(". Leaving it set to "),a("code",[e._v("local")]),e._v(" will result in detailed error-related information being returned to the client rather than quietly logged to the log file. When set properly in a production environment, your "),a("code",[e._v(".env")]),e._v(" file will look like this:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n"),a("span",{attrs:{class:"token constant"}},[e._v("APP_DEBUG")]),a("span",{attrs:{class:"token operator"}},[e._v("=")]),a("span",{attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n"),a("span",{attrs:{class:"token shell-comment comment"}},[e._v("## Environment this installation is running in: local, production (default)")]),e._v("\n"),a("span",{attrs:{class:"token constant"}},[e._v("APP_ENV")]),a("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("production\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"separating-the-web-administration-interface-from-the-platform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#separating-the-web-administration-interface-from-the-platform","aria-hidden":"true"}},[this._v("#")]),this._v(" Separating the Web Administration Interface from the Platform")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"implementing-key-security-safeguards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementing-key-security-safeguards","aria-hidden":"true"}},[this._v("#")]),this._v(" Implementing Key Security Safeguards")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"obfuscating-sensitive-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obfuscating-sensitive-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Obfuscating Sensitive Data")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[this._v("#")])])}],!1,null,null,null);n.options.__file="chapter08.md";t.default=n.exports}}]);
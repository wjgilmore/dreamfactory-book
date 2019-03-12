(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{150:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("The DreamFactory platform is built atop the "),a("a",{attrs:{href:"https://www.laravel.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel"),a("OutboundLink")],1),e._v(" framework. Laravel is an amazing PHP-based framework that in just a few short years has grown in popularity to become one of the today's most popular framework solutions regardless of language. We speculate there are several reasons for such soaring popularity, including a thoroughly pragmatic approach, security-first implementation, fantastic documentation, and a comprehensive ecosystem (in addition to the framework itself, the Laravel development team also maintains an e-commerce framework called Spark, an application adminstration toolkit called Nova, and an application deployment service called Envoyer. Regardless, like any application you're going to want to learn all you can about how to best go about maintaining and securing the environment.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("Always make sure your "),a("code",[e._v("CORS")]),e._v(' settings are only set for the appropriate "scheme/host/port tuple" to ensure you are observing the maximum security you can by only allowing cross origin resources access when there is no other way around it.  For a great explanation of '),a("code",[e._v("CORS")]),e._v(" and how they work, please see this "),a("a",{attrs:{href:"http://performantcode.com/web/do-you-really-know-cors",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),a("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(3),e._v(" "),a("img",{attrs:{src:"/images/10/cors.png",width:"800"}}),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("Never use a blanket API key for your APIs! Instead, create roles which expressly define the level of privileges intended to be exposed via the API, and then associate the role with a new App and corresponding API Key. Don't be afraid to create multiple roles and therefore multiple corresponding API keys if you'd like to limit API access in different ways on a per-client or group basis.")]),e._v(" "),e._m(5),e._v(" "),a("img",{attrs:{src:"/images/10/role_detail.png",width:"800"}}),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("From a networking standpoint DreamFactory is a typical web application, meaning you can easily encrypt all web traffic between the platform and client using an SSL certificate. Unless you've already taken steps to add an SSL certificate to your web server, by default your DreamFactory instance will run on port 80, which means all traffic between your DreamFactory server and client will be unencrypted and therefore subject to capture and review. To fix this, you'll want to install an SSL certificate. One of our favorite resources to create SSL certificates is "),a("a",{attrs:{href:"https://letsencrypt.org/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Let's Encrypt"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Below are resources on how to add an SSL cert to your web server:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"http://nginx.org/en/docs/http/configuring_https_servers.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nginx"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=X3Pr5VATOyA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nginx YouTube Video"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=NfUoiv4FTSs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache YouTube Example"),a("OutboundLink")],1)])]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),a("p",[e._v("New DreamFactory users often conflate the web administration interface with the API platform; in fact, the web administration interface is just a client like any other. It just so happens that the DreamFactory team built this particular interface expressly for managing the platform in an administrative capacity. This interface talks to the platform using a series of administrative APIs exposed by the platform, and accessible only when requests are accompanied by a session token associated with an authenticated administrator.")]),e._v(" "),a("p",[e._v("By default this interface runs on the same server as the platform itself. Some users prefer to entirely separate the two, running the interface in one networking environment and entirely isolating the platform in another.")]),e._v(" "),a("p",[e._v("TODO: Add link to df-admin-app README.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("One of DreamFactory's great advantages is it is built atop Laravel, and as such, you can take advantage of Laravel's support for shared caching solutions, among other things. This is great because it means the caching solution has been extensively tested and proven in production environments.")]),e._v(" "),a("p",[e._v("To install the predis package you just need to navigate to your project's root directory and execute this command:")]),e._v(" "),e._m(14),e._v(" "),a("p",[e._v("Next, open your .env file and look for this section:")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"chapter-9-securing-and-maintaining-your-dreamfactory-enviroment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chapter-9-securing-and-maintaining-your-dreamfactory-enviroment","aria-hidden":"true"}},[this._v("#")]),this._v(" Chapter 9. Securing, and Maintaining Your DreamFactory Enviroment")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security","aria-hidden":"true"}},[this._v("#")]),this._v(" Security")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"cors-security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors-security","aria-hidden":"true"}},[this._v("#")]),this._v(" CORS Security")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("You can modify your "),t("code",[this._v("CORS")]),this._v(" settings in DreamFactory under the "),t("code",[this._v("Config")]),this._v(" tab.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For database-backed APIs, create the API using a database account privileges that closely correspond to your API privilege requirements. For instance, if the database includes a table called "),t("code",[this._v("employees")]),this._v(" but there is no intention for this table to be accessible via the API, then configure the proxy user's privileges accordingly.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Should you need to make API documentation available to team members, use DreamFactory's user-centric role assignment feature to make solely the documentation available to the team members, rather than granting unnecessary administrative access.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"securing-your-web-traffic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#securing-your-web-traffic","aria-hidden":"true"}},[this._v("#")]),this._v(" Securing Your Web Traffic")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"suppressing-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#suppressing-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Suppressing Errors")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("When running DreamFactory in a production environment, be sure to set the "),a("code",[e._v(".env")]),e._v(" file's "),a("code",[e._v("APP_ENV")]),e._v(" value to "),a("code",[e._v("production")]),e._v(" and "),a("code",[e._v("APP_DEBUG")]),e._v(" to "),a("code",[e._v("false")]),e._v(". Leaving it set to "),a("code",[e._v("local")]),e._v(" will result in detailed error-related information being returned to the client rather than quietly logged to the log file. When set properly in a production environment, your "),a("code",[e._v(".env")]),e._v(" file will look like this:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n"),a("span",{attrs:{class:"token constant"}},[e._v("APP_DEBUG")]),a("span",{attrs:{class:"token operator"}},[e._v("=")]),a("span",{attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n"),a("span",{attrs:{class:"token shell-comment comment"}},[e._v("## Environment this installation is running in: local, production (default)")]),e._v("\n"),a("span",{attrs:{class:"token constant"}},[e._v("APP_ENV")]),a("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("production\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"separating-the-web-administration-interface-from-the-platform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#separating-the-web-administration-interface-from-the-platform","aria-hidden":"true"}},[this._v("#")]),this._v(" Separating the Web Administration Interface from the Platform")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"implementing-key-security-safeguards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementing-key-security-safeguards","aria-hidden":"true"}},[this._v("#")]),this._v(" Implementing Key Security Safeguards")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"obfuscating-sensitive-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obfuscating-sensitive-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Obfuscating Sensitive Data")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"adding-redis-caching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-redis-caching","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding Redis Caching")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("$ composer require predis/predis\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("## CACHE_DRIVER options: apc, array, database, file, memcached, redis\nCACHE_DRIVER=file\n\nChange CACHE_DRIVER to:\n\nCACHE_DRIVER=redis\n")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Next, scroll down and uncomment these lines by removing the "),a("code",[e._v("#")]),e._v(", and then update the "),a("code",[e._v("CACHE_HOST")]),e._v(", "),a("code",[e._v("CACHE_PORT")]),e._v(", and (optionally) the "),a("code",[e._v("CACHE_PASSWORD")]),e._v(" parameters to match your Redis environment:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("## If CACHE_DRIVER = memcached or redis\n#CACHE_HOST=\n#CACHE_PORT=\n#CACHE_PASSWORD=\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Finally, scroll down to the following section and uncomment "),t("code",[this._v("CACHE_DATABASE")]),this._v(" and "),t("code",[this._v("REDIS_CLIENT")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("## If CACHE_DRIVER = redis\n#CACHE_DATABASE=2\n## Which Redis client to use: predis or phpredis (PHP extension)\n#REDIS_CLIENT=predis\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can probably leave CACHE_DATABASE set to 2. For the "),t("code",[this._v("REDIS_CLIENT")]),this._v(" you can leave it set to predis if you've installed the predis/predis package (recommended).")])}],!1,null,null,null);n.options.__file="chapter08.md";t.default=n.exports}}]);
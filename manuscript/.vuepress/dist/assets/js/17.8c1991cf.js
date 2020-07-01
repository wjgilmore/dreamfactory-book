(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{155:function(e,a,t){"use strict";t.r(a);var r=t(0),n=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("p",[e._v("DreamFactory is a PHP-based application, and while we work hard to optimize the code at every opportunity, performance is going to largely be dictated by decisions made at the infrastructure level. Fortunately, these decisions are not so much dictated by budget as by sound technology and hosting choices. While your DreamFactory environment will undoubtedly be more performant on for instance an AWS t2.large than on a $15 Digital Ocean Droplet, the chasm between the two can be dramatically reduced when care is taken to properly configure and tune the environment. In this chapter we'll provide some general performance benchmarks, and then provide guidance how to ensure your DreamFactory instance is running at peak capacity.")]),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("The following table presents DreamFactory’s average response time in association with hosting the platform on various popular hosting solutions. In each case the hosting environments were unmodified, and not optimized in any fashion. It is however important to note all are running PHP 7.2, NGINX, and PHP-FPM.")]),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("These load tests were carried out using the third-party load testing service https://loader.io.")]),e._v(" "),t("p",[e._v("The clearest takeaway here is that enabling database caching can have a tremendous impact on performance in the event you’re running DreamFactory on a low-powered server. In more robust server environments the impact isn’t as stark, however all the same enabling caching on the AWS t2.large produced on average a 11.6% performance improvement for the scenarios cited above. So what else can you do to improve performance?")]),e._v(" "),e._m(3),e._v(" "),t("p",[e._v("Ensuring the DreamFactory-generated database APIs are running at peak performance is accomplished by ensuring your database is properly configured, has been allocated appropriate hardware and network resources, and turning on DreamFactory's database caching feature. In this section we'll talk more about all of these tasks.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Database_index",target:"_blank",rel:"noopener noreferrer"}},[e._v("Database Indexes Defined"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/relational-databases/indexes/indexes?view=sql-server-2017",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft SQL Server"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.mongodb.com/manual/indexes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/optimization-indexes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/cd/E11882_01/server.112/e40540/indexiot.htm#CNCPT721",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.postgresql.org/docs/9.1/indexes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostgreSQL"),t("OutboundLink")],1)])]),e._v(" "),e._m(6),e._v(" "),t("p",[e._v("Enable database API caching whenever practical, as it will undoubtedly improve performance.")]),e._v(" "),t("img",{attrs:{src:"/images/10/database_caching.png",width:"800"}}),e._v(" "),t("p",[e._v("DreamFactory instances may be load balanced, and can be configured to share the system database, cache details, and other information necessary to operate in a distributed environment. Below are some links that may help you configure a load balancer with some of the most common cloud providers.")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancer-getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon Web Services"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://cloud.google.com/load-balancing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Azure"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.ibm.com/cloud/load-balancer",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Cloud"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("DreamFactory enables file-based caching by default, however you may opt to configure one of the other supported caching solutions, such as Redis. Please see these links to see connection tutorials:")]),e._v(" "),t("ol",[e._m(7),e._v(" "),t("li",[t("a",{attrs:{href:"http://blog.dreamfactory.com/new-dreamfactory-cache-service-supports-redis-memcahed-and-local-storage/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blog - Caching"),t("OutboundLink")],1)])]),e._v(" "),e._m(8),e._v(" "),t("p",[e._v("You can use a load balancer to distribute API requests among multiple servers. A load balancer can also perform health checks and remove an unhealthy server from the pool automatically. Most large server architectures include load balancers at several points throughout the infrastructure. You can cluster load balancers to avoid a single point of failure. DreamFactory is specifically designed to work with load balancers and all of the various scheduling algorithms. A REST API request can be sent to any one of the web servers at any time and handled in a stateless manner.")]),e._v(" "),t("img",{attrs:{src:"/images/performance/load-balanced-diagram.png"}}),e._v(" "),e._m(9),e._v(" "),t("p",[e._v("You can achieve particularly high performance by compiling your DreamFactory application code using OPcache. The following")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"http://php.net/manual/en/book.opcache.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP's OPcache Documentation"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://medium.com/appstract/make-your-laravel-app-fly-with-php-opcache-9948db2a5f93",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Make your Laravel App Fly"),t("OutboundLink")],1)])])])},[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"chapter-8-performance-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chapter-8-performance-considerations","aria-hidden":"true"}},[this._v("#")]),this._v(" Chapter 8. Performance Considerations")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"performance-benchmarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-benchmarks","aria-hidden":"true"}},[this._v("#")]),this._v(" Performance Benchmarks")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[e._v("Environment")]),e._v(" "),t("th",[e._v("Load and API Type")]),e._v(" "),t("th",[e._v("Average Response Time")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("$15 Digital Ocean Droplet")]),e._v(" "),t("td",[e._v("10 MySQL API requests/second (10 records)")]),e._v(" "),t("td",[e._v("2524 ms")])]),e._v(" "),t("tr",[t("td",[e._v("$15 Digital Ocean Droplet")]),e._v(" "),t("td",[e._v("10 MySQL API requests/second with caching enabled (10 records)")]),e._v(" "),t("td",[e._v("101 ms (96% improvement)")])]),e._v(" "),t("tr",[t("td",[e._v("$15 Digital Ocean Droplet")]),e._v(" "),t("td",[e._v("10 MySQL API requests/second with caching enabled (100 records)")]),e._v(" "),t("td",[e._v("145ms")])]),e._v(" "),t("tr",[t("td",[e._v("AWS t2.large")]),e._v(" "),t("td",[e._v("50 MySQL API requests/second (100 records)")]),e._v(" "),t("td",[e._v("83 ms")])]),e._v(" "),t("tr",[t("td",[e._v("AWS t2.large")]),e._v(" "),t("td",[e._v("50 MySQL API requests/second with caching enabled (100 records)")]),e._v(" "),t("td",[e._v("72 ms (13.3% improvement)")])]),e._v(" "),t("tr",[t("td",[e._v("AWS t2.large")]),e._v(" "),t("td",[e._v("100 MySQL API requests/second (100 records)")]),e._v(" "),t("td",[e._v("85 ms")])]),e._v(" "),t("tr",[t("td",[e._v("AWS t2.large")]),e._v(" "),t("td",[e._v("100 MySQL API requests/second with caching enabled (100 records)")]),e._v(" "),t("td",[e._v("73 ms (14.2% improvement)")])]),e._v(" "),t("tr",[t("td",[e._v("AWS t2.large")]),e._v(" "),t("td",[e._v("10 S3 API JPEG file requests/second")]),e._v(" "),t("td",[e._v("198 ms")])]),e._v(" "),t("tr",[t("td",[e._v("AWS t2.large")]),e._v(" "),t("td",[e._v("10 MySQL API requests/second (1,000 records)")]),e._v(" "),t("td",[e._v("281 ms")])]),e._v(" "),t("tr",[t("td",[e._v("AWS t2.large")]),e._v(" "),t("td",[e._v("10 MySQL API requests/second with caching enabled (1,000 records)")]),e._v(" "),t("td",[e._v("264 ms (7.2% improvement)")])])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"optimizing-dreamfactory-s-database-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimizing-dreamfactory-s-database-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" Optimizing DreamFactory's Database APIs")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"index-the-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index-the-database","aria-hidden":"true"}},[this._v("#")]),this._v(" Index the Database")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("For database-backed APIs, there is no more impactful task one could take than properly indexing the database. Database indexing is what allows your database engine to quickly identify which rows match conditions defined by a "),a("code",[this._v("where")]),this._v(" clause. Refer to the following resources for both general and database-specific indexing information:")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"database-api-caching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-api-caching","aria-hidden":"true"}},[this._v("#")]),this._v(" Database API Caching")])},function(){var e=this.$createElement,a=this._self._c||e;return a("li",[a("a",{attrs:{href:"c94200f4d0567522370908afcdafd28d"}},[this._v("YouTube - Setting up and using Redis")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"load-balancing-your-dreamfactory-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-balancing-your-dreamfactory-environment","aria-hidden":"true"}},[this._v("#")]),this._v(" Load Balancing Your DreamFactory Environment")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"compiling-the-dreamfactory-code-with-opcache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-dreamfactory-code-with-opcache","aria-hidden":"true"}},[this._v("#")]),this._v(" Compiling the DreamFactory Code with OPcache")])}],!1,null,null,null);n.options.__file="performance.md";a.default=n.exports}}]);
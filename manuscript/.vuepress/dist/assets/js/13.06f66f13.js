(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{151:function(e,t,i){"use strict";i.r(t);var a=i(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("In this chapter you'll learn how to use DreamFactory's API limiting and logging capabilities to assign and monitor access to your restricted APIs.")]),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("Whether you're debugging API workflows or conforming to regulatory requirements, logging is going to play a crucial role in the process. In this section we'll review various best practices pertaining to configuring and managing both your DreamFactory platform logs and logs managed through DreamFactory's Elastic Stack integration.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("Here's an example of typical output sent to the log:")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("DreamFactory's Gold edition offers Elastic Stack (Elasticsearch, Logstash, Kibana) support via the Logstash connector. This connector can interface easily with the rest of the ELK stack (Elasticsearch, Logstash, Kibana) from "),i("a",{attrs:{href:"https://www.elastic.co",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elastic.io"),i("OutboundLink")],1),e._v(" or connect to other analytics and monitoring sources such as open source "),i("a",{attrs:{href:"https://grafana.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("If you're new to Logstash and are searching for an easy and cheap way to get started,\nwe recommend following along with the excellent Digital Ocean tutorial titled\n"),i("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-install-elasticsearch-logstash-and-kibana-elastic-stack-on-ubuntu-18-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Install Elasticsearch, Logstash, and Kibana on Ubuntu 18.04"),i("OutboundLink")],1),e._v(".")])]),e._v(" "),e._m(7),e._v(" "),i("img",{attrs:{src:"/images/07/logstash.png",alt:"Logstash service setup",width:"800"}}),e._v(" "),e._m(8),e._v(" "),i("ul",[i("li",[e._v("GELF (UDP): GELF (GrayLog Extended Format) was created as an optimized alternative to syslog formatting. Learn more about it "),i("a",{attrs:{href:"http://docs.graylog.org/en/2.1/pages/gelf.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("li",[e._v("HTTP: Choose this option if your Logstash service is configured to listen on HTTP protocol. DreamFactory will send the data to Logstash in JSON format.")]),e._v(" "),i("li",[e._v("TCP: Choose this option if your Logstash service is configured to listen on TCP protocol. DreamFactory will send the data to Logstash in JSON format.")]),e._v(" "),i("li",[e._v("UDP: Choose this option if your Logstash service is configured to listen on UDP protocol. DreamFactory will send the data to Logstash in JSON format.")])]),e._v(" "),i("img",{attrs:{src:"/images/07/logstash_host.png",alt:"Logstash hostname setup",width:"800"}}),e._v(" "),i("p",[e._v("In this second screenshot, you can see some of the logging options available to you via the Logstash connector. I have also added a few services that I would like to log.  You can pick various levels information you would like to log. For more detailed information, please see this "),i("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/current/logstash-settings-file.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),i("OutboundLink")],1),e._v(".\nValid options are:")]),e._v(" "),e._m(9),e._v(" "),i("img",{attrs:{src:"/images/07/logstash_service_config.png",alt:"Logstash service config setup",width:"800"}}),e._v(" "),e._m(10),e._v(" "),i("p",[e._v("Sensitive information such as social security numbers, dates of birth, and genetic data must often be treated in a special manner and often altogether excluded from log files. Fortunately Logstash offers a powerful suite of features for removing and mutating data prior to its insertion within Elasticsearch. For instance, if you wanted to prevent API keys from being logged to Elasticsearch you could define the following filter:")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),i("p",[e._v("If Logstash is unable to talk to Elasticsearch and the services reside on two separate servers, the issue is quite possibly due to a firewall restriction.")]),e._v(" "),e._m(15),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/current/tuning-logstash.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logstash Performance Tuning"),i("OutboundLink")],1),i("br")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://www.elastic.co/pdf/white-paper-of-gdpr-compliance-with-elastic-and-the-elastic-stack.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elastic Stack GDPR Compliance"),i("OutboundLink")],1),i("br")]),e._v(" "),i("li",[i("a",{attrs:{href:"http://info.dreamfactory.com/security_whitepaper/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DreamFactory Security Whitepaper"),i("OutboundLink")],1),i("br")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://logz.io/learn/complete-guide-elk-stack/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logz.io Blog Post"),i("OutboundLink")],1)])]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),i("p",[e._v("Each API limit is based on a specific period of time when the limit expires and resets. Options here are configurable and include minute, hour, day, 7-day (week), and 30-day (month). The variety of limit types in combination with limit periods allows for a wide range of control over your instance. The following table provides an overview of the different types of limits available.")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),i("p",[e._v("Like all other services in DreamFactory, limits can be managed via the API alone, provided that the user has the appropriate permissions to the system/ resource. Limits can be managed from the following endpoints:")]),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),i("p",[e._v("Standard required parameters include: type, rate, period, and name. Below is a table which describes all of the available parameters that can be passed when creating limits.")]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),i("p",[e._v("You can assign a limit to a specific user for the entire instance, a particular service, or a specific endpoint. This type of limit will only affect a single user, not the entire instance, service, or endpoint. Each User type limits can also be created for these as well, the main difference being that in an Each User limit, every user will get a separate counter. For example, if you set a limit on a particular service and set the rate at 1,000 hits per day, a single user can reach the limit and it would affect any subsequent requests coming in to that service, regardless of user. In an Each User Service type limit, every user will get a separate counter to reach the 1,000 per day. This also works the same with the other limit types.")]),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),i("p",[e._v("When you create a service limit, you are limiting based on a specific service. To create this type of limit, pass in the id of the service you want to create.")]),e._v(" "),e._m(31),e._v(" "),i("p",[e._v("Role limits are much the same as the service limits, but combined with the security settings in Role, you can create some really powerful role-based limit combinations.")]),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),e._m(42)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"chapter-7-limiting-and-logging-your-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chapter-7-limiting-and-logging-your-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" Chapter 7. Limiting and Logging Your APIs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"logging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"introducing-the-dreamfactory-platform-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introducing-the-dreamfactory-platform-logs","aria-hidden":"true"}},[this._v("#")]),this._v(" Introducing the DreamFactory Platform Logs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("DreamFactory developers and administrators will often need to debug platform behavior using informational and error messages. This logging behavior can be configured within your "),t("code",[this._v(".env")]),this._v(" file or within server environmental variables. If you open the "),t("code",[this._v(".env")]),this._v(" file you'll find the following logging-related configuration parameters towards the top of the file:")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("code",[e._v("APP_DEBUG")]),e._v(": When set to "),i("code",[e._v("true")]),e._v(", a debugging trace will be returned if an exception is thrown. While useful during the development phase, you'll undoubtedly want to set this to "),i("code",[e._v("false")]),e._v(" in production.")]),e._v(" "),i("li",[i("code",[e._v("APP_LOG")]),e._v(": DreamFactory will by default write log entries to a file named "),i("code",[e._v("dreamfactory.log")]),e._v(" found in "),i("code",[e._v("storage/logs")]),e._v(". This is known as single file mode. You can instead configure DreamFactory to break log entries into daily files such as "),i("code",[e._v("dreamfactory-2019-02-14.log")]),e._v(" by setting "),i("code",[e._v("APP_LOG")]),e._v(" to "),i("code",[e._v("daily")]),e._v(". Keep in mind however that by default only 5 days of log files are maintained. You can change this default by assigning the desired number of days to "),i("code",[e._v("APP_LOG_MAX_FILES")]),e._v(". Alternatively, you could send log entries to the operating system syslog by setting "),i("code",[e._v("APP_LOG")]),e._v(" to "),i("code",[e._v("syslog")]),e._v(", or to the operating system error log using "),i("code",[e._v("errorlog")]),e._v(".")]),e._v(" "),i("li",[i("code",[e._v("APP_LOG_LEVEL")]),e._v(": This parameter determines the level of log sensitivity, and can be set to "),i("code",[e._v("DEBUG")]),e._v(", "),i("code",[e._v("INFO")]),e._v(", "),i("code",[e._v("NOTICE")]),e._v(", "),i("code",[e._v("WARNING")]),e._v(", "),i("code",[e._v("ERROR")]),e._v(", "),i("code",[e._v("CRITICAL")]),e._v(", "),i("code",[e._v("ALERT")]),e._v(", and "),i("code",[e._v("EMERGENCY")]),e._v(". DreamFactory can be very chatty when this parameter is set to "),i("code",[e._v("DEBUG")]),e._v(", "),i("code",[e._v("INFO")]),e._v(", or "),i("code",[e._v("NOTICE")]),e._v(", so be wary of using these settings in a production environment. Also, keep in mind these settings are hierarchical, meaning if you set "),i("code",[e._v("APP_LOG_LEVEL")]),e._v(" to "),i("code",[e._v("WARNING")]),e._v(" for instance, then all "),i("code",[e._v("WARNING")]),e._v(", "),i("code",[e._v("ERROR")]),e._v(", "),i("code",[e._v("CRITICAL")]),e._v(", "),i("code",[e._v("ALERT")]),e._v(", and "),i("code",[e._v("EMERGENCY")]),e._v(" messages will be logged.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('[2019-02-14 22:35:45] local.DEBUG: API event handled: mysql._table.{table_name}.get.pre_process\n[2019-02-14 22:35:45] local.DEBUG: API event handled: mysql._table.employees.get.pre_process\n[2019-02-14 22:35:45] local.DEBUG: API event handled: mysql._table.{table_name}.get.post_process\n[2019-02-14 22:35:45] local.DEBUG: API event handled: mysql._table.employees.get.post_process\n[2019-02-14 22:35:45] local.DEBUG: Service event handled: mysql._table.{table_name}.get\n[2019-02-14 22:35:45] local.DEBUG: Logged message on [mysql._table.{table_name}.get] event.\n[2019-02-14 22:35:45] local.DEBUG: Service event handled: mysql._table.{table_name}.get\n[2019-02-14 22:35:45] local.DEBUG: Service event handled: mysql._table.employees.get\n[2019-02-14 22:35:45] local.INFO: [RESPONSE] {"Status Code":200,"Content-Type":null}\n[2019-02-14 22:35:45] local.INFO: [RESPONSE] {"Status Code":200,"Content-Type":"application/json"}\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"logstash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logstash","aria-hidden":"true"}},[this._v("#")]),this._v(" Logstash")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("To enable the Logstash connector you'll begin as you would when configuring any other service. Navigate to "),i("code",[e._v("Services")]),e._v(", then "),i("code",[e._v("Create")]),e._v(", then in the "),i("code",[e._v("Service Type")]),e._v(" select box choose "),i("code",[e._v("Log > Logstash")]),e._v(". Then, add a name, label, and description as you would when configuring other services:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('Next, navigate to the "Config" tab at the top of the service creation page. In the next two screenshots you can see the fields and options you will need to select. In the first screenshot, you will add the host. In this case, I am hosting the Logstash connector locally, on my DreamFactory instance. The other optionss are the '),t("code",[this._v("Port")]),this._v(" and "),t("code",[this._v("Protocol/Format")]),this._v(". The port corresponds to the port in which your Logstash daemon is running. The "),t("code",[this._v("Protocol/Format")]),this._v(" field should be set to match the protocol/format for which your Logstash service is configured to accept input:")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("fatal")]),e._v(" "),i("li",[e._v("error")]),e._v(" "),i("li",[e._v("warn")]),e._v(" "),i("li",[e._v("info")]),e._v(" "),i("li",[e._v("debug")]),e._v(" "),i("li",[e._v("trace")]),e._v(" "),i("li",[e._v("info")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"filtering-sensitive-data-from-elastic-stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filtering-sensitive-data-from-elastic-stack","aria-hidden":"true"}},[this._v("#")]),this._v(" Filtering Sensitive Data from Elastic Stack")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('filter {\n  json {\n    source => "message"\n    remove_field => ["[_platform][session][api_key]", "[_event][request][headers][x-dreamfactory-api-key]"]\n  }\n}\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"troubleshooting-your-logstash-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-your-logstash-environment","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting Your Logstash Environment")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you're not seeing results show up within Kibana, the first thing you should do is determine whether Logstash is talking to Elasticsearch. You'll find useful diagnostic information in the Logstash logs, which are found in "),t("code",[this._v("LS_HOME/logs")]),this._v(" or possibly within "),t("code",[this._v("/var/log/logstash")]),this._v(". If your Logstash environment is unable to talk to Elasticsearch you'll find an error message like this in the log:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("[2019-02-14T16:20:24,403][WARN ][logstash.outputs.elasticsearch] Attempted to resurrect connection to dead ES instance, but got an error\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"additional-logstash-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#additional-logstash-resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Additional Logstash Resources")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"dreamfactory-api-rate-limiting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dreamfactory-api-rate-limiting","aria-hidden":"true"}},[this._v("#")]),this._v(" DreamFactory API Rate Limiting")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("DreamFactory limits can be set for a specific user, role, service, or endpoint. Additionally, you can set limits for each user, where every user will get a separate counter. Limits can be created to only interact with a specific HTTP verb, such as a "),t("code",[this._v("GET")]),this._v(" or you could create another limit for a "),t("code",[this._v("POST")]),this._v(" to a specific service. Endpoint limits also provide yet another powerful way to restrict at a granular level within your DreamFactory instance.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"limits-hierarchy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limits-hierarchy","aria-hidden":"true"}},[this._v("#")]),this._v(" Limits Hierarchy")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Limits can be created to cover an entire instance or provide coverage down to a specific endpoint. When limits are combined, a type of limits hierarchy is created where the broader limits can sometimes override the more granular ones. Take for example a limit created for the entire instance with 500 hits per minute. If a limit is created for a specific service for 1,000 hits per minute, the instance limit would issue a "),t("code",[this._v("429 HTTP")]),this._v(" (over limit) error at 500 hits within a minute, so the service limit would never ever reach 1,000. Make sure to keep the big picture in mind when creating multiple limits and planning your limits strategy. Set the more broad-based limit types at an appropriate level to the more granular ones.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"limit-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Limit Types")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",[i("thead",[i("tr",[i("th",[e._v("Limit Type")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Instance")]),e._v(" "),i("td",[e._v("Controls rate limiting over the entire instance to include all services, roles, and users. Limit counter here is cumulative, regardless of user, service, etc.")])]),e._v(" "),i("tr",[i("td",[e._v("User")]),e._v(" "),i("td",[e._v("Provides rate limit control to a specified user. In the case where both a User limit and an Each User limit is set, the user-specific limit will override Each User in terms of rate. However, both counters will still increment.")])]),e._v(" "),i("tr",[i("td",[e._v("Each User")]),e._v(" "),i("td",[e._v("Sets a rate limit for each user. The main difference between this and the entire instance is that every user gets a separate counter.")])]),e._v(" "),i("tr",[i("td",[e._v("Role")]),e._v(" "),i("td",[e._v("Enable rate limiting by a specified role.")])]),e._v(" "),i("tr",[i("td",[e._v("Service")]),e._v(" "),i("td",[e._v("Enable rate limiting by a specified service.")])]),e._v(" "),i("tr",[i("td",[e._v("Service by User")]),e._v(" "),i("td",[e._v("Enable rate limiting for a specific user on a specific service.")])]),e._v(" "),i("tr",[i("td",[e._v("Service by Each User")]),e._v(" "),i("td",[e._v("Enable rate limiting for each user on a specific service.")])]),e._v(" "),i("tr",[i("td",[e._v("Endpoint")]),e._v(" "),i("td",[e._v("Enable rate limiting by a specified endpoint.")])]),e._v(" "),i("tr",[i("td",[e._v("Endpoint by User")]),e._v(" "),i("td",[e._v("Enable rate limiting for a specific user on a specific endpoint.")])]),e._v(" "),i("tr",[i("td",[e._v("Endpoint by Each User")]),e._v(" "),i("td",[e._v("Enable rate limiting for each user on a specific endpoint.")])]),e._v(" "),i("tr",[i("td",[e._v("Limit Periods")]),e._v(" "),i("td",[e._v("Limit periods include minute, hour, day, 7-day (week), and 30-day (month). The limit period determines how long the limit remains in effect until automatically resetting after the period has expired.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"limits-via-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limits-via-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Limits via API")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("api/v2/system/limit")]),this._v(" - Endpoints to manage CRUD operations for limits.")]),this._v(" "),t("li",[t("code",[this._v("api/v2/system/limit_cache")]),this._v(" - Endpoints to check current limit volume levels and reset limit counters manually.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"creating-limits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-limits","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating Limits")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Limits are created by sending a "),t("code",[this._v("POST")]),this._v(" to "),t("code",[this._v("/api/v2/system/limit")]),this._v(". To create a simple instance limit, "),t("code",[this._v("POST")]),this._v(" the following resource to the endpoint:")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",[i("thead",[i("tr",[i("th",[e._v("Limit Type")]),e._v(" "),i("th",[e._v('API "type" Parameter')]),e._v(" "),i("th",[e._v("Additional Required Params *")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Instance")]),e._v(" "),i("td",[e._v("instance")]),e._v(" "),i("td",[e._v("N/A")])]),e._v(" "),i("tr",[i("td",[e._v("User")]),e._v(" "),i("td",[e._v("instance.user")]),e._v(" "),i("td",[e._v("user_id")])]),e._v(" "),i("tr",[i("td",[e._v("Each User")]),e._v(" "),i("td",[e._v("instance.each_user")]),e._v(" "),i("td",[e._v("N/A")])]),e._v(" "),i("tr",[i("td",[e._v("Service")]),e._v(" "),i("td",[e._v("instance.service")]),e._v(" "),i("td",[e._v("service_id")])]),e._v(" "),i("tr",[i("td",[e._v("Service By User")]),e._v(" "),i("td",[e._v("instance.user.service")]),e._v(" "),i("td",[e._v("user_id, service_id")])]),e._v(" "),i("tr",[i("td",[e._v("Service by Each User")]),e._v(" "),i("td",[e._v("instance.each_user.service")]),e._v(" "),i("td",[e._v("service_id")])]),e._v(" "),i("tr",[i("td",[e._v("Endpoint")]),e._v(" "),i("td",[e._v("instance.service.endpoint")]),e._v(" "),i("td",[e._v("service_id, endpoint")])]),e._v(" "),i("tr",[i("td",[e._v("Endpoint by User")]),e._v(" "),i("td",[e._v("instance.user.service.endpoint")]),e._v(" "),i("td",[e._v("user_id, service_id, endpoint")])]),e._v(" "),i("tr",[i("td",[e._v("Endpoint by Each User")]),e._v(" "),i("td",[e._v("instance.each_user.service.endpoint")]),e._v(" "),i("td",[e._v("service_id, endpoint")])]),e._v(" "),i("tr",[i("td",[e._v("Role")]),e._v(" "),i("td",[e._v("instance.role")]),e._v(" "),i("td",[e._v("role_id")])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",[i("thead",[i("tr",[i("th",[e._v("Parameter")]),e._v(" "),i("th",[e._v("Type")]),e._v(" "),i("th",[e._v("Required")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("type")]),e._v(" "),i("td",[e._v("{string}")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("The type of instance you are creating.  See table above for a detailed description")])]),e._v(" "),i("tr",[i("td",[e._v("key_text")]),e._v(" "),i("td",[e._v("{string}")]),e._v(" "),i("td",[e._v("N/A")]),e._v(" "),i("td",[e._v("Informational field only.  This key is built automatically byt the system and is a unique identifier for the limit.")])]),e._v(" "),i("tr",[i("td",[e._v("rate")]),e._v(" "),i("td",[e._v("{integer}")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("Number of allowed hits during the limit period.")])]),e._v(" "),i("tr",[i("td",[e._v("period")]),e._v(" "),i("td",[e._v("{enum}")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("Period where limit automatically resets.  Valid values are: 'minute', 'hour', 'day', '7-day', '30-day'")])]),e._v(" "),i("tr",[i("td",[e._v("user_id")]),e._v(" "),i("td",[e._v("{integer}")]),e._v(" "),i("td",[e._v("(see above table)")]),e._v(" "),i("td",[e._v("Id of the user for user type limits.")])]),e._v(" "),i("tr",[i("td",[e._v("role_id")]),e._v(" "),i("td",[e._v("{integer}")]),e._v(" "),i("td",[e._v("(see above table)")]),e._v(" "),i("td",[e._v("Id of the role for role type limits.")])]),e._v(" "),i("tr",[i("td",[e._v("service_id")]),e._v(" "),i("td",[e._v("{integer}")]),e._v(" "),i("td",[e._v("(see above table)")]),e._v(" "),i("td",[e._v("Id of the service for service and endpoint type limits.")])]),e._v(" "),i("tr",[i("td",[e._v("name")]),e._v(" "),i("td",[e._v("{string}")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("Arbitrary name of the limit (required).")])]),e._v(" "),i("tr",[i("td",[e._v("description")]),e._v(" "),i("td",[e._v("{string}")]),e._v(" "),i("td",[e._v("No")]),e._v(" "),i("td",[e._v("Limit description (optional)")])]),e._v(" "),i("tr",[i("td",[e._v("is_active")]),e._v(" "),i("td",[e._v("{boolean}")]),e._v(" "),i("td",[e._v("No")]),e._v(" "),i("td",[e._v('Defaults to true.  Additionally, you can create a limit that is in an "inactive" state which can be activated later (optional).')])]),e._v(" "),i("tr",[i("td",[e._v("create_date")]),e._v(" "),i("td",[e._v("{timestamp}")]),e._v(" "),i("td",[e._v("N/A")]),e._v(" "),i("td",[e._v("Informational only.")])]),e._v(" "),i("tr",[i("td",[e._v("last_modified_date")]),e._v(" "),i("td",[e._v("{timestamp}")]),e._v(" "),i("td",[e._v("N/A")]),e._v(" "),i("td",[e._v("Informational only.")])]),e._v(" "),i("tr",[i("td",[e._v("endpoint")]),e._v(" "),i("td",[e._v("{string}")]),e._v(" "),i("td",[e._v("(see above table)")]),e._v(" "),i("td",[e._v("Endpoint string (see table above when required).  Additionally, reference the section on Endpoint Limits for additional information.")])]),e._v(" "),i("tr",[i("td",[e._v("verb")]),e._v(" "),i("td",[e._v("{enum}")]),e._v(" "),i("td",[e._v("No")]),e._v(" "),i("td",[e._v("Defaults to all verbs.  Passing an individual verb will only set the limit for those requests.  Can be specified with any limit type.  Valid values are:  "),i("code",[e._v("GET")]),e._v(", "),i("code",[e._v("POST")]),e._v(", "),i("code",[e._v("PUT")]),e._v(", "),i("code",[e._v("PATCH")]),e._v(", "),i("code",[e._v("DELETE")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"user-vs-each-user-limits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-vs-each-user-limits","aria-hidden":"true"}},[this._v("#")]),this._v(" User vs. Each User Limits")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("NOTE: There is no way to clear an individual user’s counter with Each User type limits, only a User limit.\nClearing the counter for an Each User limit type will reset all users.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"service-limits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-limits","aria-hidden":"true"}},[this._v("#")]),this._v(" Service Limits")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"role-limits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#role-limits","aria-hidden":"true"}},[this._v("#")]),this._v(" Role Limits")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"endpoint-limits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#endpoint-limits","aria-hidden":"true"}},[this._v("#")]),this._v(" Endpoint Limits")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Endpoint limits allow an API administrator to get very granular on what type of requests can be singled out for limiting. Basically anything available in the API Docs tab of the Admin Application can be used as an endpoint limit. Endpoint limits can, and in some cases should be combined with a specific verb. Since all of the endpoints within DreamFactory are tied into services, a service_id is required when creating endpoint limits. So, if you are targeting "),t("code",[this._v("db/_table/contact")]),this._v(", you will need to select the db service by id and the supply the rest of the endpoint as a string. Example:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Creating the type of limit as shown in the example above would only hit if the specific resource of the request coming in matches exactly the stored limit. Therefore, only "),t("code",[this._v("_table/contact")]),this._v(" would increment the limit counter, not "),t("code",[this._v("_table/contact/5")]),this._v(" or further variations on the endpoint’s parameters.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"wildcard-endpoints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wildcard-endpoints","aria-hidden":"true"}},[this._v("#")]),this._v(" Wildcard Endpoints")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Because there may be a situation where you want to limit an endpoint and all variations on the endpoint as well, we have built in the ability to add wildcards to your endpoint limits. So, by adding a wildcard "),t("code",[this._v("*")]),this._v(" character to your endpoint, you are creating an endpoint limit that will hit with the specific endpoint as well as any additional parameters. Every endpoint limit is associated with a service. Therefore, endpoint limits are simply an extension of a service type limit. A service limit will provide limit coverage to every endpoint under the service, whereas the endpoint limit is more targeted. Combined with wildcards and specific verbs, endpoint limits become very powerful.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"limit-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit-cache","aria-hidden":"true"}},[this._v("#")]),this._v(" Limit Cache")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default, Limits use a file-based cache storage system. Garbage collection is automatic and is based on the limit period. You can poll the limit cache system via API in order to get the current hit count for each limit. The "),t("code",[this._v("GET")]),this._v(" call to system/limit_cache will provide the Id of the limit, a unique key, the max number of attempts and the current attempt count, as well as remaining attempts in the limit period.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"clearing-limit-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clearing-limit-cache","aria-hidden":"true"}},[this._v("#")]),this._v(" Clearing Limit Cache")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Clearing the limit cache involves resetting the counter for a specific limit. Additionally, all limit counters can be reset at once by passing a "),i("code",[e._v("allow_delete=true")]),e._v(" parameter to the system/limit_cache endpoint. Passing the "),i("code",[e._v("Id")]),e._v(" of a specific limit to the "),i("code",[e._v("system/limit_cache endpoint")]),e._v(", such as "),i("code",[e._v("system/limit_cache/11")]),e._v(" will only clear the limit counter for that particular limit.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"limit-cache-storage-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit-cache-storage-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Limit Cache Storage Options")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default, the limit cache uses file-based caching. This file cache is separate from the DreamFactory (main) cache so that when cache is cleared in DreamFactory, limit counts are not affected. Redis can also be used with the limit cache. Please see the "),t("code",[this._v(".env-dist")]),this._v(" file for limit cache options.")])}],!1,null,null,null);r.options.__file="chapter07.md";t.default=r.exports}}]);
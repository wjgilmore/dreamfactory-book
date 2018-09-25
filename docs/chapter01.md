# Chapter 1. Introducing DreamFactory

No matter your role in today's IT industry, APIs are an inescapable part of the job. Marketers regularly integrate Salesforce, Pipedrive, and MailChimp APIs into campaigns, while software developers rely upon Stripe, Google Maps, and Twitter APIs to build compelling web applications. Data scientists down the hall are grappling with an increasingly unwieldy avalanche of company metrics using Amazon Machine Learning, Elasticsearch, and IBM EventStore APIs. Meanwhile, the executive team relies upon Geckoboard, Google Analytics, and Baremetrics to monitor company progress and future direction. 

In addition to integrating third-party APIs, your organization is likely deeply involved in the creation of internal APIs used to interact with proprietary data sources. But unlike the plug-and-play APIs mentioned above, manual API development is anything but a walk in the park. This process is incredibly time-consuming, error-prone, and ultimately a distraction from the far more important task of building compelling products and services.

This chapter introduces you to DreamFactory, an automated REST API generation, integration, and management platform. You can use DreamFactory to generate REST APIs for hundreds of data sources, including databases such as MySQL and Microsoft SQL Server, file systems including Amazon S3, e-mail delivery providers like Mandrill. You can also integrate third-party APIs, including all of the aforementioned services mentioned in this chapter's opening paragraph. This opens up a whole new world of possibilities in terms of building sophisticated workflows. But before we jump into this introduction, some readers might be wondering what a REST API is in the first place, let alone why so many organizations rely on REST for their API implementations.

## Introducing REST

If you were to design an ideal solution for passing data between computers ("computers" being an umbrella term used to represent servers, laptops, mobile phone, and any other Internet-connected device), what would it look like? 

For starters, we might consider HTTP for the transport protocol since applications can quickly be created that communicate over HTTP and HTTPS. Further, HTTP supports *request URLs*, which can be constructed to easily identify a particular target resource (e.g. https://www.example.com/employees/42), *request methods*, which identify what we'd like to do in conjunction with the target resource (e.g. GET (retrieve), POST (insert), PUT (update), DELETE (destroy)), and *request payloads* in the form of URL parameters and message bodies.

We'd also want to incorporate an understandable and parseable messaging format such as XML or JSON; not only can programming languages easily construct and navigate these formats, but they're also relatively easy on the eyes for us humans.

Finally, we would want the solution to be extensible, allowing for integration of capabilities such as caching, authentication, and load balancing. In doing so, we can create secure and scalable applications.

If such a solution sounds appealing, then you're going to love working with REST APIs. Representational State Transfer (REST) is a term used to define a system that embodies several characteristics (see https://en.wikipedia.org/wiki/Representational_state_transfer):

* **Client-server architecture**: By embracing the client-server model, REST API-based solutions can incorporate multiple application and database servers to create a distributed, secure, and maintainable environment.

* **Uniform interface**: REST's use of HTTP URLs, HTTP methods, and media type declarations not only contribute to an environment that is easily understandable by both the implementers and end users.

* **Statelessness**: All REST-based communication is stateless, meaning each client request includes everything the server requires to respond to the request. The target URL, requeset method, content type, and API key are just a few examples of what might be included in the request.

* **Layered system**: Support for system layering is what allows middleware to be easily introduced, allowing for user authentication and authorization, data caching, load balancing, and proxies to be introduced without interfering with the implementation.

* **Cache control**: The HTTP response can include information indicating whether the response data is cacheable, ensuring intermediary environments don't erroneously serve stale data while also allowing for scaleability.

Now that you understand a bit more about REST architecture, let's review a number of typical REST requests and responses.

::: tip
Throughout this book you'll often come across the term *resource*. In the REST context, a resource is any bit of data that can be named. For instance, an image, employee, classroom, or vehicle would all be referred to as a resource. Further, a resource can be a single instance of this named data, or can be a collection. In other words, an employee would be a singleton resource, whereas a set of employees would be a collection resource.
:::

## Dissecting REST Requests and Responses

REST API integrators spend a great deal of time understanding how to generate proper REST requests, and how to parse REST responses. As has already been discussed, these requests and responses revolve around HTTP URLs, HTTP methods, request payloads, and response formats. In this section you'll learn more about the role of each. If you're not familiar with these REST concepts, then spending a few minutes learning about them will dramatically reduce the amount of time and effort you'll otherwise have to spend when later getting acquainted with DreamFactory.

### Retrieving Resources

A proper REST API URL pattern implementation is one which is centered around the *resource* (the noun), and leaves any indication of the desired action (the verb) to the accompanying HTTP method. Consider the following request:

    GET /api/v2/employees

If the endpoint exists and records are found, the REST API server would respond with a `200` status code and JSON-formatted results. For instance, here's an example response returned by DreamFactory:

    {
      "resource": [
        {
          "id": 1,
          "first_name": "Georgi",
          "last_name": "Facello"
        },
        {
          "id": 2,
          "first_name": "Bezalel",
          "last_name": "Simmel"
        }
        ...
      ]
    }

This clarity is representative of a typical REST request; based on the method and URL, it is abundantly clear the client is requesting a list of employees. We know the client wants to retrieve records because the request is submitted using the `GET` method. Contrast this with the following request:

    GET /api/v2/employees/find

This will not be RESTful because the implementer has incorporated an action into the URL. Returning to the original pattern, consider how a specific employee might be requested:

    GET /api/v2/employees/42

The addition of an ID (often but not always a resource's primary key) indicates the client is interested in retrieving the employee record associated with a unique identifier which has been assigned the value `42`. The JSON response might look like this:

    {
      "id": 42,
      "first_name": "Claudi",
      "last_name": "Kolinko"
    }

Many REST API implementations, DreamFactory included, support the passage of query parameters to modify query behavior. For instance, if you wanted to retrieve just the `first_name` field when retrieving a resource, then DreamFactory supports a `fields` parameter for doing so:

    GET /api/v2/employees/42?fields=first_name

The response would look something like this:

    {
      "first_name": "Claudi"
    }

`GET` requests are *idempotent*, meaning no matter how many times you submit the request, the same results can be expected, with no unintended side effects. Contrast this with `POST` requests (introduced next), which are considered non-idempotent because if you submitted the same resource creation request more than once, chances are duplicate resources would be created. 

### Creating Resources

If the client desired to insert a new record into the `employees` table, then the `POST` method will be used:

    POST /api/v2/employees

Of course, the request will need to be accompanied by the data to be created. This would be passed along via the request body and might look like this:

    {
      "resource": [
        {
          "first_name": "Johnny",
          "last_name": "Football"
        }
      ]
    }

### Updating Resources

HTTP supports two different methods for updating data:

* **PUT**: The `PUT` method replaces an existing resource in its entirety. This means you need to pass along *all* of the resource attributes regardless of whether the attribute value is actually being modified.
* **PATCH**: The `PATCH` method updates only part of the existing resource, meaning you only need to supply the resource primary key and the attributes you'd like to update. This is typically a much more convenient update approach than `PUT`, although to be sure both have their advantages.

When updating resources with `PUT` you'll send a `PUT` request like so:

    PUT /api/v2/employees

You'll send along *all* of the resource attributes within the request payload:

    {
      "resource": [
        {
          "id": 42,
          "first_name": "Johnny",
          "last_name": "Baseball"
        }
      ]
    }

To instead update one or more (but not all) attributes associated with a particular record found in the `employees` resource, you'll send a `PATCH` request to the `employees` URL, accompanied by the primary key:

    /api/v2/employees/42

Suppose the `employees` table includes attributes such as `first_name`, `last_name`, and `employee_id`, but we only want to modify the `first_name` value. The JSON request body would look like this:

    {
      "resource": [
        {
          "first_name": "Paul"
        }
      ]
    }

### Deleting Resources

To delete a resource, you'll send a `DELETE` request to the endpoint associated with the resource you'd like to delete. For instance, to delete an `employees` resource you'll reference this URL:

    DELETE /api/v2/employees/42

## Introducing DreamFactory

In light of everything we've discussed thus far with regards to implementing a REST API, the idea of implementing one yourself probably sounds pretty daunting. It should, because it is. In doing so, not only would you be responsible for building out the logic required to process the request methods and URLs, but you'd also be on the hook for integrating authentication and authorization, generating and maintaining documentation, and figuring out how to sanely generate working APIs for any number of third-party data sources. 

And this is really only the beginning of your challenges. As your needs grow, so will the complexity. Consider the amount of work required to add per-endpoint business logic capabilities to your API. Or bolting on API limiting features. Or adding per-service API logging. The amount of work required to build and maintain these features can be staggering, and will surely distract you and your team from the far more important goal of satisfying customers through the creation of superior products and services.

Fortunately, an amazing alternative exists. DreamFactory is an API automation solution that handles *all* of these challenges for you, and for the most part does so through an easy point-and-click web interface. We'll conclude this chapter with a survey of DreamFactory's key features, giving you all of the information you need to determine whether DreamFactory is a worthy addition to your organization's development toolkit.

### API Generation

### OpenAPI Documentation


### API Security

 

### Business Logic


### API Limiting


### API Logging

## Conclusion


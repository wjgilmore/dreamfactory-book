---
sidebar: auto
meta:
  - name: "name"
    content: Modifying the Service Definition
  - name: "description"
    content: This chapter shows you how to customize your API Docs tab.
---

# Chapter 17. Modifying the Service Definition

There can be a variety of reasons for wanting to modify the pre-defined API documentation that is generated in the API Docs tab. We will cover modifying the documentation and exporting the documentation to have a developer portal without any coding.

## Exporting API Documentation

When in the API Docs for any Service you will see `Download Service Doc` at the top of the page. This will download the documentation in JSON format to use elsewhere. In this example we are downloading the Service Definition and importing it into [SwaggerHub](https://app.swaggerhub.com/). This tool enables us to leverage the DreamFactory documentation, modify the endpoints, and expose it as a developer portal.

<p>
<img src="/images/17/download-service-doc.png" width="800" alt="Download Service Doc">
</p>

We can then use a tool such as [JSON2YAML](https://www.json2yaml.com/) to convert our Service Definition from JSON to YAML. Now we can paste it into [SwaggerHub](https://app.swaggerhub.com/). You might notice that it is not playing well and that is because we need to point it to our DreamFactory instance. 

Under the `servers` section you will want to add your DreamFactory instance details like below:

```
servers:
  - url: '{server}/api/v2/{service_name}'
    description: 'DreamFactory Demo'
    variables:
      server:
        default: https://YOUR_INSTANCE.com
```

Now you have a fully functioning developer portal for your API!

<p>
<img src="/images/17/swaggerhub-docs.png" width="800" alt="Download Service Doc">
</p>

## Modifying Existing API Documentation

TODO
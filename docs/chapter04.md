---
sidebar: auto
---

# Chapter 4. Securing Your APIs

## Authenticating with Okta

[Okta](https://www.okta.com) is a powerful and popular identity management solution used by thousands of businesses across the globe. Many developers wish to integrate Okta into their application authentication infrastructure, and DreamFactory offers a straightforward solution for doing so. In this tutorial we'll guide you through the configuration process.

### Configuring OKTA
                
Begin by creating an Okta account at [https://www.okta.com](https://www.okta.com) if you haven't already done so. Once logged-in, open the `Admin` section:

<p>
<img src="/images/04/okta/3453a85c_2019.18.04..png" width="800">
</p>
                    
Next, you'll add a new application:

<p>
<img src="/images/04/okta/createapp.jpeg" width="800">
</p>

Be sure to select SAML 2.0:
                
<p>
   <img src="/images/04/okta/ec143ec9_2019.18.04..png" width="800" />
</p>

Next, we'll configure the application:
                
<p>
    <img src="/images/04/okta/okta-app-first-conf.jpeg" width="800" />
</p>
                
Open `Setup instructions`, making sure you don't close the tab containing these instructions as we'll return to them later:
                
<p>
    <img src="/images/04/okta/805a39fb_2019.18.04..png" width="800"/>
</p>

### Configuring DreamFactory
                
Next, we'll configure DreamFactory to support the new OKTA application. Begin by signing into DreamFactory as an administrator, and then navigate to the `Roles` section and configure a role for the users who will sign in via Okta SSO. Here's an example of a role defining access to all APIs (not typical but nonetheless illustrative):

<p>
    <img src="/images/04/okta/role.jpeg" width="800" />
</p>

With the role defined, navigate to the `Apps` tab and create a new API key which will be associated with this role:

<p>
    <img src="/images/04/okta/4d5147a6_2019.18.04..png" width="800" />
</p> 
 
#### Creating the SAML 2.0 Service
 
With the role and API key defined, it's time to create the SAML 2.0 service that will connect your Okta application to DreamFactory. Navigate to `Services > Create`, choose `SSO`, and finally `SAML 2.0`:

<p>
    <img src="/images/04/okta/269c5d5d_2019.18.04..png" width="800" />
</p>

Begin by configuring the `Info` tab:
                
<p>
    <img src="/images/04/okta/74a971ed_2019.18.04..png" width="800" />
</p>

Next, configure the `Config` tab, filling in the fields with the information found in Okta's `Setup instructions` page:

<p>
    <img src="/images/04/okta/374044b6_2019.18.04..png" width="800" />
</p>

Save these changes, and navigate to the `API Docs` tab. Here you can see new Okta endpoints:

<p>
    <img src="/images/04/okta/30050024_2019.18.04..png" width="800" />
</p>

## Adding Okta Users to the DreamFactory Application
                
With your Okta application created and DreamFactory configured, return to Okta, and in the Admin app navigate to the `Application` page:
                
<p>
    <img src="/images/04/okta/b72eb33c_2019.18.04..png" width="800" />
</p>

Select our DreamFactory application in the list:
                

<p>
    <img src="/images/04/okta/038b771f_2019.18.04..png" width="800" />
</p>

Assign this application to the People and Groups who will use it:
                
<p>
    <img src="/images/04/okta/345418e2_2019.18.04..png" width="800" />
</p>

Go to the `General` tab and click the `Edit` button:
                =
<p>
    <img src="/images/04/okta/a765987e_2019.18.04..png" width="800" />
</p>
                
Change `Single sign on URL` and `Audience URI (SP Entity ID)` to the values presented in DreamFactory's Okta API documentation, and then save the changes:
                
<p>
    <img src="/images/04/okta/1e2f05e7_2019.18.04..png" width="800" />
</p>

                
#### Application configuration
                
We're almost done! Now we can sign in via Okta by going to the service's /sso endpoint. In our example application we assign `Sign in with OKTA` button to this endpoint. Clicking this button, DreamFactory can return the `X-DreamFactory-Session-Token`, which we have to use for comunication with DreamFactory:
                
<p>
    <img src="/images/04/okta/1a0f8d6f_2019.18.04..png" width="800" />
</p>

But how does DreamFactory know where send the token? We have to configure our `Relay State` for this purpose. Open the `Services` tab and select your OKTA SSO service. Navigate to the `Config` tab and update the `Relay State` field URL which will contain the token returned from DreamFactory. Our example site hosted on `http://127.0.0.1:5500` will pass token to the `/hello.html` page:

<p>
    <img src="/images/04/okta/a74c1d41_2019.18.04..png" width="800" />
</p>
                
DreamFactory will replace the `_token_` with a real `X-DreamFactory-Session-Token`. You might then use JavaScript to persist this token to local storage, or use server-side languages to do the same using cookies:
                
<p>
    <img src="/images/04/okta/a11d4aaf_2019.18.04..png" width="800" />
</p>

Now we can communicate with DreamFactory by including `X-DreamFactory-Session-Token` and `X-DreamFactory-API-Key` in the request header:

<p>
    <img src="/images/04/okta/123452d6_2019.18.04..png" width="800" />
</p>
                
Don't forget add your application to the CORS interface via `Config > CORS`. Our example CORS configuration allows any requests to all DreamFactory endpoints with any headers. You can configure it to be more secure:
                
<p>
    <img src="/images/04/okta/6a3f1331_2019.18.04..png" width="800" />
</p>

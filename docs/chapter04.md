---
sidebar: auto
---

# Chapter 4. Securing Your APIs

One of DreamFactory's most popular features is the wide-ranging authentication support. While API Key-based authentication is suffice for many DreamFactory-powered applications, developers often require a higher degree of security through user-specific authentication. In some cases [Basic HTTP authentication](http://wiki.dreamfactory.com/DreamFactory/Tutorials/Basic_Auth) will get the job done, however many enterprises require more sophisticated and flexible approaches largely because of the growing adoption of Single Sign On (SSO)-based solutions such as Active Directory and LDAP, and use of third-party identity providers and solutions such as [AWS Cognito](https://aws.amazon.com/cognito/), [Auth0](https://auth0.com/), and Okta(https://www.okta.com/). 

You'll be pleased to know DreamFactory supports all of these options through a comprehensive set of authentication connectors. These connectors include Active Directory, LDAP, OAuth through well-known identity providers such as Facebook, GitHub, and Twitter, OpenID Connect, and SAML 2.0. In this chapter we'll walk you through all of the different authentication integration options at your disposal!

## Authenticating with Basic HTTP Authentication

[Section Forthcoming]

## Authenticating with OpenID

OpenID affords users the convenience of using an existing account for signing into different websites. Not only does this eliminate the need to juggle multiple passwords, but OpenID also gives users greater control over what personal information is shared with websites that support OpenID. OpenID has been widely adopted since its inception in 2005, with companies such as Google, Microsoft, and Facebook offering OpenID provider services. Additionally, several OpenID libraries are available for integrating with these providers. Commercial editions of DreamFactory (versions 2.7 and newer) also support OpenID, allowing you to use OpenID-based authentication in conjunction with your APIs.

### Configuring OpenID Connect

To configure DreamFactory's OpenID connector, you'll first need to identify an OpenID provider. This provider manages the credentials your users will use for authentication purposes. For the purposes of this tutorial we'll use Google's implementation. If you want to follow along with this specific example you'll first need to login to [Google's API Console](https://console.developers.google.com) to create a set of OAuth2 credentials. After logging in, use the search field at the top of the screen to search for `OAuth`. In the dropdown that appears choose `Credentials` (see below screenshot).

<p>
<img src="/images/04/openid/google-search.png" width="600">
</p>

Next, click on the `Create credentials` dropdown and select `OAuth client ID`:

<p>
<img src="/images/04/openid/google-create-credentials.png" width="600">
</p>

Next you'll be prompted to configure your consent screen. This is the screen the user sees when initiating the authentication process. Click `Configure consent screen`, and you'll be prompted to add or confirm the following items:

* Application type: Will this OpenID integration be used solely for users of your organization, or could users outside of your organization also use it to authenticate?
* Application name: The name of the application associated with OpenID integration.
* Application logo: You can optionally upload your organization or project logo for presentation on the consent screen.
* Support email: An organizational e-mail address which the user could contact with questions and issues.
* Scopes for Google APIs: This settings determines what data your application will be able to access on behalf of the authenticated user. We'll use the default scopes for this example (email, profile, and openid).
* Privacy policy URL: Self-explanatory
* Terms of service URL: Self-explanatory

After saving these changes, you'll be prompted for two final pieces of information:

* The application type: You can select between `Web application`, `Android`, `Chrome App`, `iOS`, or `Other`. What you choose here won't affect DreamFactory's behavior, so be sure to choose the type most suitable to your specific application.
* Restrictions: This oddly-named field asks you to supply an authorized JavaScript origin URL and/or an authorized redirect URI. The redirect URI is crucial here because it is the destination where Google will send the authorization code following successful authentication. This code must be intercepted by your application and forwarded on to DreamFactory to complete the process and generate the session token (JWT). If you don't yet understand exactly how this will work, I suggest just reading on and returning to this configuration screen after seeing an example later in this section.

After saving your changes, you're ready to configure DreamFactory's OpenID Connect connector!

### Configuring DreamFactory

DreamFactory's authentication connectors are found in the same location as the standard API connectors. To view them, login to your DreamFactory instance and navigate to the `Services` tab. Choose `Create`, and in the dropdown that appears, select `OAuth` and finally `OpenID Connect`. You'll be presented with the following initial configuration screen:

<p>
<img src="/images/04/openid/openid-connect-info-df.png" width="600">
</p>

* **Name**: The name will form part of your API URL, so you'll want to use a lowercase string with no spaces or special characters. Further, you'll want to typically choose something which allows you to easily identify the API's purpose. For instance for your Google-backed OpenID Connect authentication API you might choose a name such as `google` or `openid`. Keep in mind a lowercased, alphanumeric name is required.
* **Label**: The label is used for referential purposes within the administration interface and system-related API responses. You can use something less terse here, such as "Google OpenID API".
* **Description**: Like the label, the description is used for referential purposes within the administration interface and system-related API responses.
* **Active**: This determines whether the API is active. By default it is set to active however if you're not yet ready to begin using the API or would like to later temporarily disable it, just return to this screen and toggle the checkbox.

With these fields completed, click the `Config` tab to finish configuration. On this screen you'll be presented with a number of fields, including:

* `Default Role`:
* `Discovery Document Endpoint`: If your identity provider offers a discovery document endpoint, then this will be the *fastest* way to configure your OpenID Connect connector. This is because all you will need to supply is this value, the client ID, client secret, and redirection URL.
* `Authorization Endpoint`:
* `Token Endpoint`:
* `User Info Endpoint`:
* `Validate ID Token`:
* `JWKS URI`:
* `Scopes`:
* `Client ID`:
* `Client Secret`:
* `Redirect URL`:
* `Icon Class`:
* `Role per App`:

After configuring these settings, press `Save` to persist the changes. Next we'll complete the configuration process by creating a script responsible for completing the OAuth callback and generating the session token (JWT)

### The OpenID Authentication Process

Recall when configuring Google's OpenID settings you added the redirection URI:

<p>
<img src="/images/04/openid/google-authorized-redirect-uris.png" width="600">
</p>

This endpoint is responsible for intercepting the OAuth callback parameters which need to be forwarded onto DreamFactory in order to generate the session token. The following example PHP script does exactly this, and then returns the JSON object containing the JWT and other user profile data such as the name and e-mail address. Here's the script:

    <?php

    $queryString = $_SERVER['QUERY_STRING'];

    # Create a connection
    $url = 'https://example.com/api/v2/user/session?oauth_callback=true&' . $queryString;
    $ch = curl_init($url);

    # Setting our options
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    # Get the response
    $response = curl_exec($ch);
    curl_close($ch);

    $json = json_decode($response);

    var_dump($json);

And here is the formatted JSON output:

    object(stdClass)#1 (12) { 
        ["session_token"]=> string(353) 
        "JWT_TOKEN_HERE" 
        ["id"]=> int(9) 
        ["name"]=> string(13) "Jason Gilmore" 
        ["first_name"]=> string(5) "Jason" 
        ["last_name"]=> string(7) "Gilmore" 
        ["email"]=> string(37) "jason.gilmore+google@dreamfactory.com" 
        ["is_sys_admin"]=> bool(false) 
        ["last_login_date"]=> string(19) "2019-07-10 15:04:45" 
        ["host"]=> string(20) "dreamfactory-demo-30" 
        ["oauth_token"]=> string(129) "OAUTH_TOKEN_HERE" 
        ["id_token"]=> string(1245) "ID_TOKEN_HERE" 
    }

You'll add a script like this to your application in order to retrieve the JWT (defined within the `session_token` attribute) and subsequently pass that JWT along with future API requests.

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

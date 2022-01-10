# JWT (JSON Web Tokens)

https://jwt.io/introduction

A compact and self-contained way for securely transmitting information between parties as a JSON object

## Use Cases of JWT

- Authorization
- Information Exchange

## Authorization vs Authentication

- Authorization: authorize a user to access a resource
- Authentication: verifies that a user is someone that it claimed

## JWT Structure

(header).(payload).(signature)

- Header: Consists of the type of the token (JWT), and the signing algorithm being used. Then this is Base64Url encoded to form the first part of the JWT

- Payload: Data to be transmitted. Then this is Base64Url encoded to form the second part of the JWT

- Signature: A hash both encoded header and payload, using a secret key

## How does JWT work

1. Authenticate user
2. Return JWT with relevant data/payload
3. Use JWT to access resources (using Authorization header)

## Note

With signed tokens, all the information contained within the token is exposed to users or other parties, even though they are unable to change it. This means you should not put secret information within the token.

# JWT In Practice

https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/

## Access Token

An artifact that client applications can use to make secure calls to an API server. Those who hold the token can use it. The access token then acts as a credential artifact to access protected resources rather than an identification artifact.

## Threats

Malicious users could theoretically compromise a system and steal access tokens, which in turn they could use to access protected resources by presenting those tokens directly to the server.

## Solution

One mitigation method is to create access tokens that have a short lifespan: they are only valid for a short time defined in terms of hours or days.

There are different ways that a client application can get a new access token for a user. For example, once an access token expires, the client application could prompt the user to log in again to get a new access token. Alternatively, the authorization server could issue a refresh token to the client application that lets it replace an expired access token with a new one.

## Refresh Token

A credential artifact that lets a client application get new access tokens without having to ask the user to log in again. The client application can get a new access token as long as the refresh token is valid and unexpired.

## Flow

https://stackoverflow.com/questions/27726066/jwt-refresh-token-flow

1. When you do log in, send 2 tokens (Access token, Refresh token) in response to the client.
1. The access token will have less expiry time and Refresh will have long expiry time.
1. The client will store refresh token and access token.
1. The client will use an access token for calling APIs. But when it expires, pick the refresh token and call auth server API to get the new token.
1. Your auth server will have an API exposed which will accept refresh token and checks for its validity and return a new access token.
1. Once the refresh token is expired, the User will be logged out.

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

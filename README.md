## node-RESTful-api Built on Express Router middleware, Mongoose and MongoDB
The API connects to MongoDB using Mongoose ODM for schematic application data modeling.
We are going to be using a remote db from https://modulus.io/ platform and connect to the db using Mongoose ODM.

## Handling CRUD using this API
- The API will use standard http URL, ie. http://mysite.com/api and requests will be appended to the URL
- It will use appropriate HTTP verbs, ie. GET, POST, PUT, DELETE in order to implement the RESTful protocol 
- The server response will be sent to the client in JSON format

## MVC architecture for the API. 
```
node-RESTful-api
├── app.js
├── controllers
│   └── profiles.js
├── models
│   └── profile.js
└── routeController.js
```

We havn't implemented any Views in the api since we will be testing the app in JSON format using a Web REST client for all the HTTP requests and responses.

## Installations
`The API requires node and npm installed in the system`
- From the console, clone the repository: `git clone git@github.com:md5sha1/node-RESTful-api`
- In the app directory, install dependencies: `npm install`
- Now initialize the server: `node app.js`

## API Tests 
Test the app using a Web REST client such as [POSTMAN](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en).
- Assuming we are using a localhost on port 9000,
  1. To test successful connection, use url, `localhost:9000/api/`
  2. To CREATE a profile record, use url: `localhost:9000/api/profiles/create` (Select POST, and enctype: x-www-form-urlencoded)
  3. To SHOW all the profiles, use url: `localhost:9000/api/profiles` (GET)
  4. To GET a profile with single id: `localhost:9000/api/profiles/id`
  5. To DESTROY a profile: `localhost:9000/api/profiles/id` (DELETE)
  6. To UPDATE a profile: `localhost:9000/api/profiles/id` (PUT)

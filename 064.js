const express = require('express'); 
const app = express();
const port = 3000;

app.use();

/* 
Our `app.use()` method takes a middleware as a parameter. In this tutorial series we will receive a JSON data from our client, to take care of that type of requests
we need to parse it by using Express build in function: `express.urlencoded()`. Provide `express.urlencoded()` as a middleware to our `app.use()` method.
*/
const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded());

/* 
	Since received user data will have nested object in it we have to provide `{extended: true}` option to our `express.urlencoded()` by putting it inside the parentheses of a method.
*/
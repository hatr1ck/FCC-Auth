const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const DataBase = [];

/*

When the user is making a request to receive the page of our website hes making a "get request". 
That means that as a sever we need to give back the data that the client asked for. 
This is something that express framework handles for us in a 'app.get()' method, that takes the name of a route as a parameter.
Add 'app.get()' method to your 'server.js', and provide '"/"' as an argument.

*/

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
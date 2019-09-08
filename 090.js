const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const DataBase = [];

/* 
In order to send our html page to the client use `app.get()` method with "/" as a first argument, 
and as a second argument provide a callback function that will take a `req` (request) and `res` (response).
Inside this callback function we will send our static html file with `res.sendFile(__dirname + '/views/index.html');`
*/

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
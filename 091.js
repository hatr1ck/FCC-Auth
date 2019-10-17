const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const DataBase = [];

app.get('/');

/* 
As a second argument `app.get()` takes a callback function, 
that function holds for us the request of a client, and a response that we can use to send back information, those usually used as a `req` and `res` respectevely.
Next to route definition provide a callback function with `req` and `res` as an arguments.
*/

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
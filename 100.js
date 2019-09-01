const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const DataBase = [];

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//Next we should provide an endpoint for our register request from the front end. So for that we have to use app.post method, 
//with "/register" as a first argument, and a callback function with "req" and "res" as a second one.

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
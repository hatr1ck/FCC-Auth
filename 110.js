const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const DataBase = [];

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/register', function (req, res) {
/* 
Earlier in this project we used `express.urlencoded()` method in our app, now thanks to that we can access our user register data through `req.data` object.
User data from each input field will be stored by their `name` attribute that we provided in html form.
Declare three variables: `username`, `password` and `passwordRepeat` with the same name value keys from `req.body` object.
For example:
const login = req.body.login
*/
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
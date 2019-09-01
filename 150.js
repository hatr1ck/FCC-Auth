const express = require('express'); 
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');

app.use(express.urlencoded({ extended: true }));

const DataBase = [];

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/register', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const passwordRepeat  = req.body.passwordRepeat;

  if (!username || !password || !passwordRepeat || password !== passwordRepeat) {
   return res.send('Incorrect credentials.');
  }
//After checking credentials with our if statement we want to hash user password.
//To do that we going to use bcrypt.hash() method that will take three arguments.
//First argument is password from our input.
//Second argument is salt, this is something that we have to provide in order to make our hashing more complex and secure, most common value is 10.
//Third argument is a callback function that will receive for us error message and hashed password, like so: function(error, hash)
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
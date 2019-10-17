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
   res.send('Incorrect credentials.');
  }
  else{
       bcrypt.hash(password, 10);
  }

  /*
     And the last part of our hashing is the handling hashed password itself. 
     We can do that by providing a callback function as a third argument to our `hash` method.
     That callback cares for us a couple things, first one is `error` and the second one is `hash`.
     After salt create a callback with two arguments in it: `error` and `hash`.
  */
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
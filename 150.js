const express = require('express'); 
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');

app.use(express.urlencoded({ extended: true }));

const DataBase = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const passwordRepeat  = req.body.passwordRepeat;

  if (!username || !password || !passwordRepeat || password !== passwordRepeat) {
   res.send('Incorrect credentials.');
  }

  /* 
     After making sure that user credentials was correct to create an else statement in which we will start from hashing user's password.
     Hashing the password is needed to store user data in more secure state.
     Create an else statement and put our user's password that is stored in a variable into `bcrypt.hash()` method to create a hashed version of it.
  */
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
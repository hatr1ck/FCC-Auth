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

  bcrypt.hash(password, 10, (error, hash) => {
/*
  Each of the users will be stored as a separate javascript object with the two keys: `username` and `password`.
  Earlier  in this series we created a `DataBase` array, now we can store our user object in it by using `Array.push()` method.
  Remember to store a hashed version of password and not the real one.
*/
  })

})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
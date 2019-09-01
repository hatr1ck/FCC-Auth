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
    DataBase.push({
        username:username,
        password:hash
      })
  })
  	res.send(`You're signed in. <br /> username: ${username}<br /> password: ${password}<br /> hashed password: ${hash}`);
})

app.post('/login', function (req, res) {
   const username = req.body.username;
   const password = req.body.password;
   //After registration we put our user information into DataBase array.
   //Now we need to find user that tries to log in into our API.
   //To do that you should use Array.find() method that will iterate through DataBase and return user by matching username from login form and username stored in database.
   //Declare a variable with the name "user" and assign our founded user to it.
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
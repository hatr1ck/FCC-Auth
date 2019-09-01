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
   const user = DataBase.find(user => user.username === username)
   //Now we want to have some response to our client if there is no such user in database.
   //Create a if statement that will be invoked when we didn't found provided user.
   //And in that statement return "No such user" as a response message to our client.
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
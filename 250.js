const express = require('express'); 
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');

app.use(express.urlencoded({ extended: true }));

const DataBase = [];

app.get('/', function (req, res) {
  return res.sendFile(__dirname + '/views/index.html');
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
   if(!user){ 
       return res.send('No such user');
    }
    /*
      Now after we found our user in database we have to compare provided in login form password with the hashed password that was stored.
      For that we can use `bcrypt.compare()` method, that will take password provided in login form as a first argument,
      hashed password from stored user as a second and as a third argument it will take a callback function with error and our comparison response that we call "result".
    */

})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
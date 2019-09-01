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
   
   if(user){
       bcrypt.compare(password, user.password, (error, result) => {

    //Our callback function in bcrypt.compare() method will give us a boolean value in a variable that we called "result".
    //Let's create an if/else statement that will depends on that value.
    //If result is truthy then we can send to the client user info as a template string.
    //If it's not then we will response with "Incorrect password".
    });
    }
    else{
      return res.send('No such user')
    }
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
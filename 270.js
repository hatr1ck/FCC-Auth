const express = require('express'); 
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');

app.use(express.urlencoded({ extended: true }));

const DataBase = [];

app.get('/', function (req, res) {
  return res.sendFile(__dirname + '../views/index.html');
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
  
  	return res.send(`You're signed in. <br /> username: ${username}<br /> password: ${password}<br /> hashed password: ${hash}`);
})})

app.post('/login', function (req, res) {
   const username = req.body.username;
   const password = req.body.password;
   const user = DataBase.find(user => user.username === username)
 
   if(user){
       bcrypt.compare(password, user.password, (error, result) => {
		if(result){
      return res.send(`You're logged in. <br /> username: ${username}<br /> password: ${password}<br /> hashed password: ${user.password}`);
    }
      else{
      return res.send('Incorrect password')
    }
    });
    }
    else{
      return res.send('No such user')
    }
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
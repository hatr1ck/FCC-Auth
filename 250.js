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
  else{
  bcrypt.hash(password, 10, (error, hash) => {
    DataBase.push({
        username:username,
        password:hash
      })
  })
       res.send(`You're signed in. <br /> username: ${username}<br /> password: ${password}<br /> hashed password: ${hash}`);
}
})

app.post('/login', (req, res) => {
   const username = req.body.username;
   const password = req.body.password;
   const user = DataBase.find(user => user.username === username);
   if(!user){ 
         res.send('No such user');
    }
     /*
     Now after handling the case in which we couldn't find our user we can have an `else` statement in which we will compare password from request with stored password from the database.
     To do this we can use `bcrypt.compare()` method, that will take provided password as a first argument and a hashed one as a second.
     Create an `else` statement at the end of the login form and invoke a `bcrypt.compare()` function inside of it.
     */

})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
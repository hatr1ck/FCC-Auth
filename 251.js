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
    else{
     bcrypt.compare();
     /*
     Now we should provide some arguments to our `bcrypt.compare()` method.
     First argument should be a raw password that we took from `req.body` object, and as a second argument we need to pass a hashed version of it.
     Pass password from `req.body` and from `user` object from the database to the `bcrypt.compare()` function.
     */
    }
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
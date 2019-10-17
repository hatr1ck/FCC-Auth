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
   const user = DataBase.find(user => user.username === username)
   
   if(!user){

      res.send('No such user');
    }
    else{
       bcrypt.compare(password, user.password, (error, result) => {
    /*
      Our callback function in `bcrypt.compare()` method will give us a boolean value in a variable that we called `result`.
      Let's create an `if` statement that will depends on that value.
      If result is truthy then we can send to the client user info as a template string.
      Something like this: `You're logged in. <br /> username: ${username}<br /> password: ${password}<br /> hashed password: ${user.password}`
    */
    });
    }
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
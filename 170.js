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
   return res.send('Incorrect credentials.');
  }
  else{
  bcrypt.hash(password, 10, (error, hash) => {
    DataBase.push({ 
        username:username,
        password:hash
      })
  })
}
/*
  At the end of our request we want to send back registered user data in order to know that registration was successful.
  Use `res.send()` method to send back a template string with `username`, `password`, and a `hash` variables inside.
*/
})

app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
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
       bcrypt.hash(password);
  }

  /*
     Hashing is not ended on that. Second thing that we have to provide to our `bcrypt.hash()` is salt,
     this is something that we have to define in order to make our hashing more complex and secure, the most commonly used value is `10`.
     Put salt value next to `password` inside `hash` mathod.
  */
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
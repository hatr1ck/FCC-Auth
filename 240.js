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
       res.send(`You're signed in. <br /> username: ${username}<br /> password: ${password}<br /> hashed password: ${hash}`);
}
})

app.post('/login', (req, res) => {
   const username = req.body.username;
   const password = req.body.password;
   const user = DataBase.find(user => user.username === username);

   /*
     Now we want to have some response to our client if there is no such user in database.
     Create an `if` statement that will be invoked when we didn't found a provided user (`user==undefined` or `!user`).
     And in that statement send back "No such user" as a response message to our client, by using `res.send()`.
  */

})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
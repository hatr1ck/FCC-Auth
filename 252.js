
    hashed password from stored user as a second and as a third argument it will take a callback function with error and our comparison response that we call "result".
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
     bcrypt.compare(password, user.password);
     /*
          Next we have to handle a result of that comparison in callback function that we can provide as a third argument to our `bcrypt.compare()` method.
          That callback takes cares of couple things for us, those are `error` and the `result` itself.
          Pass a function to `bcrypt.compare()` with two parameters `error` and `result`.
     */
    }

})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
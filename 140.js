const express = require('express'); 
const app = express();
const port = 3000;
//For safety reasons, we want to store encrypted version of the user password. To do that we will use library called bcrypt.
//Let's declare a const variable on the top of our document to require bcrypt library in our project.

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
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
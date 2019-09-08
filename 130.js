const express = require('express'); 
const app = express();
const port = 3000;

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

/*
    In that if statement we want to give a response to our client with the message: "Incorrect credentials.".
    We can do that by returning a `res.send()` method with that message inside.
*/
  }
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
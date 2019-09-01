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
  const passwordRepeat = req.body.passwordRepeat;

  //Now we want to check if the user send to us correct credentials.
  //Create an if statement with condition that will be truthy in case of any provided input was empty or password and passwordRepeat do not match each other.
})

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const DataBase = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/register')
/* 
Same way as we did in our get request we have to provide a callback function that will handle a `req` and a `res` for us.
Provide a callback to `app.post()` register route.
*/

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
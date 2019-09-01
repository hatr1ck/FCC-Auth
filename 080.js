const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// For the purpose of simplicity we're going to use a javascript array to represent our database.
// Declare a DataBase variable with the 'const' keyword, and set it to the empty array.

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
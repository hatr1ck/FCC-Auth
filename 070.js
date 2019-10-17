const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

/* 
In order to run our server we will use express method that is now stored in our `app` called `listen`
Start the server by passing our port variable as a parameter to `app.listen()` method

*/
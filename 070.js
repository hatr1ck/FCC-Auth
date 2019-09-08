const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

/* 
Start the server listening for connections with `app.listen()`. Pass in the port and a callback function to notify that the server is listening. 
The parameters should be ``port, () => console.log(`Review server listening on port ${port}!`)``
*/
// Pass in the port and a callback function to notify that the server is listening. 
// The parameters should be ``port, () => console.log(`Review server listening on port ${port}!`)``

const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.listen(port);
/* 
Congratulations! Your server is up and running. Now what we also can do in `listen()` method is provide a second argument to it,
that argument is a function that will fire right after our server started, this is something that you'll see a lot in node/express apps and it's called a "callback function". 
The common practise in this case is to log the port and that the server is listening.

Provide a callback function as a second argument to `app.listen(port, ...)`, 
and inside that function log out string interpolation like so ``Your app is listening on port ${port}``.
*/
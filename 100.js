const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const DataBase = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

/* 
Next we should provide an endpoint for our register request from the front end.
Since this request will have data attach to it we will use another type of method that is called `app.post()`.
And in a same way as we did in our `get` request the first argument will be the route of were the request will be taken.
Both of these things we already defined inside register form tag in our html.
Create `app.post()` method with a "/register" as a argument.
*/

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
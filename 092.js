
const express = require('express'); 
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const DataBase = [];

app.get('/', (req,res)=>{

});

/* 
Inside our get request callback we can use build into `res` metod that is called `sendFile()`.
This method is used to send front-end from a server. As an argument to `sendFile` method we want to pass a path to our `index.html`.
Also since we are using node we need to specify root directory of provided path, for that we'll use `__dirname` variable build into node.
Send static html file with `res.sendFile(__dirname + `/views/index.html`);`
*/

app.listen(port, ()=> {
  console.log(`Your app is listening on port ${port}`);
});
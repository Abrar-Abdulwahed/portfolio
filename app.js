const http = require('http');
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
  });
  
server.listen(port,() => {
console.log(`Server running at port `+port);
});
app.set('view engine','ejs');



app.use(express.static('public'));
app.get("/", (req, res)=>{
    res.render("index");
});

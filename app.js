const http = require('http');
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine','ejs');
app.listen(port);
app.use(express.static('public'));

app.use(express.static('public'));
app.get("/", (req, res)=>{
    res.render("index");
});

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine','ejs');
app.listen(port);
app.use(express.static('public'));


app.get(['/', '/home', '/index'], (req, res)=>{
    res.render('index', {title: 'Abrar - Portfolio'});
});
app.get(['/dashboard', '/dashboard/index'], (req, res)=>{
    console.log(req);
    res.render('dashboard/index', {title: 'Abrar - Portfolio'});
});
app.get(['/dashboard/skill'], (req, res)=>{
    console.log(req);
    res.render('dashboard/skill', {title: 'Abrar - Portfolio'});
});
app.get(['/dashboard/experience'], (req, res)=>{
    console.log(req);
    res.render('dashboard/experience', {title: 'Abrar - Portfolio'});
});
app.get(['/dashboard/education'], (req, res)=>{
    console.log(req);
    res.render('dashboard/education', {title: 'Abrar - Portfolio'});
});
app.use((req, res) => {
    res.status(404).render('404', {title: 'Not Found Page'});
});

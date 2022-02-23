const express = require("express");
const multer  = require('multer');
const {default: mongoose} = require('mongoose');
const Personal_Info = require('./models/personal_info');
const app = express();

const port = process.env.PORT || 2000;
app.set('view engine','ejs');
app.listen(port);
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/profile_cms');
//.then((result)=>console.log(result)).catch((err)=>console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        if(file.mimetype == "image/jpeg")
            cb(null,'public/img/');
        else if(file.mimetype == "application/pdf")
            cb(null,'public/pdf/');
    },
    filename:(req, file, cb)=>{
        var extension = file.originalname.split('.');
        var ext = extension[extension.length - 1];
        var fileName = file.filename + '-'+ Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + ext;
        cb(null, fileName);
    }
}) 
const upload = multer({
    storage: storage,
    fileFilter: (req, file, callback)=>{
        if(file.mimetype == "image/jpeg" ||  file.mimetype == "application/pdf")
            callback(null, true)
        else callback(null, false);
    },
    limits:1024*1024 *5,
});
app.use(express.urlencoded());


app.get('/dashboard', (req, response)=>{
    Personal_Info.findOne().sort({_id:-1}).then(res => response.render('dashboard/index', {info: res}));
    // response.render('dashboard/index', {info: null});
}); 

app.post('/dashboard', upload.fields([{name: "profile_image"}, {name: "cv"}]), async (req, res)=>{
    const instance = new Personal_Info({
            id: mongoose.Types.ObjectId,
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            profile_image:  req.files["profile_image"] !== undefined? req.files["profile_image"][0].filename : null,
            cv:  req.files["cv"] !== undefined ? req.files["cv"][0].filename : null,
        })
        await instance.save((error, result) => {
                if (error)
                    console.log(error.message);
                
        });
    res.redirect('/dashboard');
});


// Routes
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

const express = require("express");
const multer  = require('multer');
const {default: mongoose} = require('mongoose');
const Personal_Info = require('./models/personal_info');
const app = express();

const port = process.env.PORT || 2000;
app.set('view engine','ejs');
app.listen(port);
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/profile_cms').then((result)=>console.log(result)).catch((err)=>console.log(err));
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg")
            cb(null,'public/img/');
        else if(file.mimetype == "application/pdf")
            cb(null,'public/pdf/');
    },
    filename:(req, file, cb)=>{
        var extension = file.originalname.split('.');
        var ext = extension[extension.length - 1];
        var imgName = file.filename + '-'+ Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + ext;
        // var imgName = Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname;

        cb(null, imgName);
    }
}) 
const upload = multer({
    storage: storage,
    fileFilter: (req, file, callback)=>{
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" ||  file.mimetype == "application/pdf")
            callback(null, true)
        else callback(null, false);
    },
    limits:1024*1024 *5,
});

app.use(express.urlencoded());


app.get('/dashboard', (req, response)=>{
    Personal_Info.findOne().sort({_id:-1}).then(res => response.render('dashboard/index', {info: res}))
}); 



// app.post('/product/add', upload.fields([{name:"p_image"}, {name: "p_image_2"}]), (req, res)=>{
//     res.end();
// });
app.post('/dashboard', upload.single('profile_image'), (req, res)=>{
    const p_info = new Personal_Info({
        profile_image:req.file.filename,
    }).save();
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

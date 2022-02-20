const express = require('express');
const bodyparser = require("body-parser");
const session = require("express-session");
const path = require('path');
const app = express();
const {v4: uuidv4} = require ("uuid");
const router = require('./router')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine', 'ejs');
// load static assets
app.use('/static', express.static(path.join(__dirname,'public')))

app.use(session({
    secret: 'uuidv4',
    resave: false, 
    saveUninitialized:true
}));
app.use('/route', router)

// home route
app.get('/', (req,res) =>{
res.render('base', {title:"Login System"});

});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
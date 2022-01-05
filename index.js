var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
//var bodyparser = require('body-parser');
const bodyparser =require('body-parser');
const res = require('express/lib/response');
const req = require('express/lib/request');
var app = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('im working');
});

app.listen(port, ()=>{
    console.log(`Express server is running at port ${port}`);
});

//import user routes

const userRoutes = require('./src/routes/user.route');

//create user url 
app.use('/api/users', userRoutes);
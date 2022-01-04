var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var bodyparser = require('body-parser');
const res = require('express/lib/response');
var app = express();

app.use(cors());
app.use(bodyparser.json());

app.listen('8070',()=>{
    console.log('server is running..');
})

//import user routes

const userRoutes=require('./src/routes/user.route');

//create user route

app.use('/api/user',userRoutes);

//Rest API working

app.get('/',(req,res)=>{
    res.send('Api working');
});


// //create 

// app.post('/api/create/',(req,res)=>{
//    console.log(req.body);
//    //sql query 

//    //let sql = 'INSERT INTO User (username, email, password, create_time) VALUES ( '${req.body.id}','${req.body.username}','${req.body.email}','${req.body.password}','${req.body.create_time}' )';
// });


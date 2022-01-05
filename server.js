var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var bodyparser = require('body-parser');
const res = require('express/lib/response');
var app = express();

app.use(cors());
app.use(bodyparser.json());

app.listen('3000',()=>{
    console.log('server is running..');
})

//mysql database connection

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    databse:'nodecrud'
});

//check db connection 
db.connect((err)=>{
    if(err) throw err;
    else{
        console.log('database connected successfully');
    }
})


//Rest API Crud

app.get('/api',(req,res)=>{
    res.send('Api working');
});


//create 

app.post('/api/create/',(req,res)=>{
   console.log(req.body);
   //sql query 

   //let sql = 'INSERT INTO User (username, email, password, create_time) VALUES ( '${req.body.id}','${req.body.username}','${req.body.email}','${req.body.password}','${req.body.create_time}' )';
});


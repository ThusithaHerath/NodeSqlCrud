const mysql=require('mysql');

//create mysql connection

const dbConn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodecrud'
});

//check db connection 
dbConn.connect((err)=>{
    if(err) throw err;
    else{
        console.log('Database connected successfully');
    }
})


module.exports=dbConn;

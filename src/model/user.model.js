var dbConn = require('../../config/db.config');


var User = function(user){
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
}
User.getAllUsers = (result)=>{
    dbConn.query('SELECT * FROM user',(err, res)=>{
        if(err){
            console.log('Error while fetching data', err);
            result(null,err);
        }
        else{
            console.log('Users fetched successfully');
            result(null, res);
        }
    })
}
//get user by name from db
User.getLogUsers = (username, result)=>{
    dbConn.query('Select password from user where username=?', username,(err,res)=>{
        if(err){
            console.log('Error while fetching password by username',err);
            result(null, err);
        }else{
            result (null, res);
        }
    })
}

//register new user

User.registerNewUser = (userData, result) =>{
    dbConn.query('INSERT INTO User SET ? ', userData, (err, res)=>{
        if(err){
            console.log('Error while register new user');
            result(null, err);
        }else{
            console.log('Employee created successfully');
            result(null, res);
        }
    })
}

//update user 
User.updateUser = (_id, userReqData, result)=>{
    dbConn.query("UPDATE User SET username = ?, email = ?, password =? WHERE _id = ?", [userReqData.username, userReqData.email,userReqData.password, _id], (err,res)=> {
     if(err){
         console.log('Error while updating user');
         result(null, err);
     }else{
         console.log("Employee updated");
         result(null, res);
     }
    });
}

// delete user 
User.deleteUser = (_id, result)=>{
    dbConn.query('DELETE FROM User where _id = ?',[_id], (err, res)=>{
        if(err){
            console.log('Error while deleting the user');
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = User;
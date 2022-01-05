const User = require('../model/user.model');
const UserModel = require('../model/user.model');


//get all users details 
exports.getUserList = (req, res)=>{
   //console.log('here all users');
   UserModel.getAllUsers((err, users)=>{
       console.log('im here');
       if(err)
       res.send(err);
       console.log('Users',users);
       res.send(users)
   })
}

//get user by username
exports.getUserByName = (req,res)=>{
    //console.log('get user by name');
    UserModel.getLogUsers(req.params.username, (err, users)=>{
       if(err)
       res.send(err);
       console.log('Password of user',users);
       res.send(users);
    })
}

//Add new user 
exports.addNewUser = (req, res)=>{
    console.log('request data', req.body);
    const userReqData = new UserModel(req.body);
//check for null values 
if(req.body.constructor=== Object && Object.keys(req.body).length === 0){
    res.send(400).send({success: false, message: 'Please fill all input fields'});
}
else{
    console.log('valid data');

    UserModel.registerNewUser(userReqData, (err, user)=>{
     if(err)
         res.send(err);
         res.json({status: true, message:'User Added successfuly', data:user})
    
    })
}
}


//update user by _id
exports.updateUser = (req, res)=>{
    const userReqData = new UserModel(req.body);
    console.log('User data update', userReqData);
    
//check for null values 
if(req.body.constructor=== Object && Object.keys(req.body).length === 0){
    res.send(400).send({success: false, message: 'Please fill all input fields'});
}
else{
    console.log('valid data');

    UserModel.updateUser(req.params.id, userReqData, (err, user)=>{
     if(err)
         res.send(err);
         res.json({status: true, message:'User Updated successfuly', data:user})
    
    })
}
}

//delete user by _id 
exports.deleteUser = (req, res)=>{
    UserModel.deleteUser(req.params.id,(err, user)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'User Deleted Successfully'});
    })
}
const express=require('express');
const router=express.Router();

const userController=require('../controller/user.controller');


//get all users
router.get('/',userController.getUserList);

//get user by name
router.get('/:username',userController.getUserByName);

//add new user 

router.post('/',userController.addNewUser);

//update employee 
router.put('/:id',userController.updateUser);

//delete user
router.delete('/:id',userController.deleteUser);
module.exports=router;
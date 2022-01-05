const RestaurantModel= require('../model/restaurant.model');

//get all restaurant details

exports.getRestaurantDetails = (req, res)=>{
    //console.log('here all');
    RestaurantModel.getRestaurantDetails((err, restaurant) =>{
        console.log('Details are here');
        if(err)
        res.send(err);
        console.log('Restaurant',restaurant);
        res.send(restaurant)
    })
}
//get all restaurant details by _id
exports.getgetRestaurantDetailsById = (req, res)=>{
    //console.log('res by id');
    RestaurantModel.getDataByID(req.params.id, (err, restaurant)=>{
        if(err)
        res.send(err);
        console.log('Details of restaurant',restaurant);
        res.send(restaurant);
     })
}

//get all restaurant details by name
exports.getgetRestaurantDetailsByName = (req, res)=>{
    //console.log('res by name');
    RestaurantModel.getDataByName(req.params.name, (err, restaurant)=>{
        if(err)
        res.send(err);
        console.log('Details of restaurant',restaurant);
        res.send(restaurant);
     })
}

//get all restaurant details by cuisine
exports.getgetRestaurantDetailsByCuisine = (req, res)=>{
    //console.log('res by name');
    RestaurantModel.getDataByCuisine(req.params.cuisine, (err, restaurant)=>{
        if(err)
        res.send(err);
        console.log('Details of restaurant',restaurant);
        res.send(restaurant);
     })
}

//Add new user 
exports.addNewRestaurant = (req, res)=>{
    console.log('request data', req.body);
    const userReqData = new RestaurantModel(req.body);
//check for null values 
if(req.body.constructor=== Object && Object.keys(req.body).length === 0){
    res.send(400).send({success: false, message: 'Please fill all input fields'});
}
else{
    console.log('valid data');

    RestaurantModel.addNewRestaurant(userReqData, (err, restaurant)=>{
     if(err)
         res.send(err);
         res.json({status: true, message:'Restaurant Added successfuly', data:restaurant})
    
    })
}
}

//update restaurant by _id
exports.updateRestaurantData = (req, res)=>{
    const userReqData = new RestaurantModel(req.body);
    console.log('Restaurant data update', userReqData);
    
//check for null values 
if(req.body.constructor=== Object && Object.keys(req.body).length === 0){
    res.send(400).send({success: false, message: 'Please fill all input fields'});
}
else{
    console.log('valid data');

    RestaurantModel.updateRestaurant(req.params.id, userReqData, (err, restuarant)=>{
     if(err)
         res.send(err);
         res.json({status: true, message:'Restaurant Updated successfuly', data:restuarant})
    
    })
}
}

//delete restraurant by id
exports.deleteURestarantdata = (req, res)=>{
    RestaurantModel.deleteRestaurant(req.params.id,(err, restraurant)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Restaurant Deleted Successfully'});
    })
}
const res = require('express/lib/response');
var dbConn = require('../../config/db.config');


var Restuarant = function(restaurant){
    this.name = restaurant.name;
    this.cuisine = restaurant.cuisine;
    this.address = restaurant.address;
}

//get all restaurant details
Restuarant.getRestaurantDetails = (result)=>{
    dbConn.query('SELECT * FROM Restaurant', (err, res)=>{
        if(err){
            console.log('Error while fetching data', err);
            result(null,err);
        }
        else{
            console.log('Restaurant details fetched successfully');
            result(null, res);
        }
    })
}

//get all restaurant details by _id 
Restuarant.getDataByID = (_id, result)=>{
    dbConn.query('Select * from restaurant where _id=?', _id,(err,res)=>{
        if(err){
            console.log('Error while fetching data by id',err);
            result(null, err);
        }else{
            result (null, res);
        }
    })
}

//get all restaurant details by name
Restuarant.getDataByName = (name, result)=>{
    dbConn.query('Select * from restaurant where name=?', name,(err,res)=>{
        if(err){
            console.log('Error while fetching data by name',err);
            result(null, err);
        }else{
            result (null, res);
        }
    })
}

//get all restaurant details by name
Restuarant.getDataByCuisine = (cuisine, result)=>{
    dbConn.query('Select * from restaurant where cuisine=?', cuisine,(err,res)=>{
        if(err){
            console.log('Error while fetching data by cuisine',err);
            result(null, err);
        }else{
            result (null, res);
        }
    })
}

//register new restaurant

Restuarant.addNewRestaurant = (restaurantData, result) =>{
    dbConn.query('INSERT INTO restaurant SET ? ', restaurantData, (err, res)=>{
        if(err){
            console.log('Error while add new resturant');
            result(null, err);
        }else{
            console.log('Restaurant added created successfully');
            result(null, res);
        }
    })
}

//update restaurant 
Restuarant.updateRestaurant = (_id, userReqData, result)=>{
    dbConn.query("UPDATE Restaurant SET name = ?, cuisine = ?, address =? WHERE _id = ?", [userReqData.name, userReqData.cuisine,userReqData.address, _id], (err,res)=> {
     if(err){
         console.log('Error while updating restaurant');
         result(null, err);
     }else{
         console.log("Retaurant updated");
         result(null, res);
     }
    });
}

// delete restaurant 
Restuarant.deleteRestaurant = (_id, result)=>{
    dbConn.query('DELETE FROM restaurant where _id = ?',[_id], (err, res)=>{
        if(err){
            console.log('Error while deleting the restaurant');
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Restuarant;
const express = require('express');
const router = express.Router();

const RestaurantController = require('../controller/restaurant.controller');

//get all restaurant details
router.get('/displayRestaurant',RestaurantController.getRestaurantDetails);


//get  all restaurant details by _id
router.get('/:id',RestaurantController.getgetRestaurantDetailsById);

//get  all restaurant details by name
router.get('/:name',RestaurantController.getgetRestaurantDetailsByName);

//get  all restaurant details by cuisine
router.get('/:cuisine',RestaurantController.getgetRestaurantDetailsByCuisine);

//add new restaurant 
router.post('/addRestaurant',RestaurantController.addNewRestaurant);

//update restaurant 
router.put('/updateRestaurant/:id',RestaurantController.updateRestaurantData);

//delete restaurant
router.delete('/deleteRestaurant/:id',RestaurantController.deleteURestarantdata);

module.exports = router;
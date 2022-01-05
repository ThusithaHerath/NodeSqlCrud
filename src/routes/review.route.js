const express = require('express');
const router = express.Router();

const ReviewController=require('../controller/review.controller');

//add new review 
router.post('/addReview',ReviewController.addNewReview);

//update restaurant 
router.put('/updateReview/:id',ReviewController.updateReviewData);

//delete review
router.delete('/deleteReview/:id',ReviewController.deleteReview);

//Get Restaurant Reviews by Restaurant ID
router.get('/getReview/:id',ReviewController.getReviewByRestID);

//Get Restaurant Reviews by Restaurant ID
router.get('/getReviewByReviewer/:id',ReviewController.getReviewByReviwerID);

module.exports = router;
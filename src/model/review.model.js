const res = require('express/lib/response');
var dbConn = require('../../config/db.config');


var Review = function(review){
    this.rating = review.rating;
    this.review = review.review;
    this.reviewerID = review.reviewerID;
    this.restaurantID = review.restaurantID;
}



//add new review
Review.addNewReview = (reviewData, result) =>{
    dbConn.query('INSERT INTO review SET ? ', reviewData, (err, res)=>{
        if(err){
            console.log('Error while add new review');
            result(null, err);
        }else{
            console.log('Review added created successfully');
            result(null, res);
        }
    })
}


//update review 
Review.updateReview = (_id, userReqData, result)=>{
    dbConn.query("UPDATE review SET rating = ?, review = ? WHERE _id = ?", [userReqData.rating, userReqData.review, _id], (err,res)=> {
     if(err){
         console.log('Error while updating review');
         result(null, err);
     }else{
         console.log("Review updated");
         result(null, res);
     }
    });
}


// delete restaurant 
Review.deleteReview = (_id, result)=>{
    dbConn.query('DELETE FROM review where _id = ?',[_id], (err, res)=>{
        if(err){
            console.log('Error while deleting the review');
            result(null, err);
        }else{
            result(null, res);
        }
    })
}


//get all reviews by restaurant _id 
Review.getDataByID = (_id, result)=>{
    dbConn.query('Select restaurant._id,restaurant.name,review.rating,review.review from review inner join restaurant On review.restaurantID=restaurant._id where restaurant._id=?', _id,(err,res)=>{
        if(err){
            console.log('Error while fetching data by id',err);
            result(null, err);
        }else{
            result (null, res);
        }
    })
}

//get all reviews by Reviewer _id 
Review.getDataByReviewerID = (_id, result)=>{
    dbConn.query('SELECT user._id, user.username, restaurant._id, restaurant.name, review.rating, review.review FROM review INNER JOIN restaurant ON review.restaurantID=restaurant._id INNER JOIN review.reviewerID=user._id where user._id=?', _id,(err,res)=>{
        if(err){
            console.log('Error while fetching data by id',err);
            result(null, err);
        }else{
            result (null, res);
        }
    })
}


module.exports=Review;
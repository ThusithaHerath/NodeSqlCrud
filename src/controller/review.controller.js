const ReviewModel=require('../model/review.model')



//add new review
exports.addNewReview = (req, res)=>{
    console.log('request data', req.body);
    const userReqData = new ReviewModel(req.body);
//check for null values 
if(req.body.constructor=== Object && Object.keys(req.body).length === 0){
    res.send(400).send({success: false, message: 'Please fill all input fields'});
}
else{
    console.log('valid data');

    ReviewModel.addNewReview(userReqData, (err, review)=>{
     if(err)
         res.send(err);
         res.json({status: true, message:'Review Added successfuly', data:review})
    
    })
}
}

//update review by _id
exports.updateReviewData = (req, res)=>{
    const userReqData = new ReviewModel(req.body);
    console.log('Review data update', userReqData);
}

//delete review by id
exports.deleteReview = (req, res)=>{
    ReviewModel.deleteReview(req.params.id,(err, review)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Review Deleted Successfully'});
    })
}

//Get Restaurant Reviews by Restaurant ID
exports.getReviewByRestID = (req, res)=>{
    //console.log('res by id');
    ReviewModel.getDataByID(req.params.id, (err, review)=>{
        if(err)
        res.send(err);
        console.log('Details of review',review);
        res.send(review);
     })
}

//Get Restaurant Reviews by Reviewer ID
exports.getReviewByReviwerID = (req, res)=>{
    //console.log('res by id');
    ReviewModel.getDataByReviewerID(req.params.id, (err, review)=>{
        if(err)
        res.send(err);
        console.log('Details of review',review);
        res.send(review);
     })
}
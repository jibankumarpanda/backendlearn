import reviewDAO from "../dao/reviewDAO.js";
//reviewDAO is a class that is used to handle the reviews 
export default class ReviewController{
    //ReviewController is a class that is used to handle the reviews
    //export default class ReviewController is exporting from the ReviewController class
    //static apiGetReviews is a static method that is used to get the reviews
    static apiPostReviews = async (req, res, next) => {
    //static is a keyword that is used to define a static method and static methods are work as class methods
        //next is a function that is used to pass control to the next middleware function
       // const reviews = await reviewDAO.getReviews()
        //const reviews is a variable that is used to store the reviews
        const movieId = req.body.movieId
        //movieId is a variable that is used to store the movieId
        const reviews = req.body.reviews
        //reviews is a variable that is used to store the reviews
        const user = req.body.user
        //user is a variable that is used to store the user
        try {//try is used to handle the error
            const reviewResponse = await reviewDAO.addReviewDAO.addReviewForMovie
 //reviewResponse is a variable that is used to store the reviewResponse          
            (
                movieId, reviews, user
            )
            res.json({status: "success"})
            //res.json(reviews) is used to send the reviews as a json response
            //res.json({status: "success"}) is used to send the status as a json response
        } catch (e) {
            res.status(500).json({error: e.message})
            //res.status(500).json({error: e.message}) is used to send the error as a json response
        }
    }


static async apiGetReview(req, res, next) {
    try {
        let id = req.params.id || {} 
        //id is a variable that is used to store the id and 
        //req.params.id is used to get the id from the request
        let review = await reviewDAO.getReviewById(id)

        if (!review) {
           res.status(404).json({error: "No review found"}) 
           //or throw new Error("No review found")
           return
        }
        res.json(review)
    } catch (error) {
        console.log(`api, ${error}`)
        //or res.status(500).json({error: error.message})
        throw error
        
    }
}
static async apiUpdateReview(req, res, next) {
    try {
        const reviewId = req.params.id || {}
        const review = req.body.review
        const user = req.body.user
        const reviewResponse = await reviewDAO.updateReview(reviewId, review, user)
        
        if (reviewResponse.error) {//if there is an error, return it
            return res.status(500).json({error: reviewResponse.error})
            //return is used to exit the function
        }
        
        if (reviewResponse.modifiedCount === 0) {//if no reviews were modified, return an error
            return res.status(400).json({error: "Unable to update review"})
            //return is used to exit the function
        }
        
        res.json({status: "success"})//if the review was updated successfully, return success
    } catch (e) {//if there is an error, return it
        res.status(500).json({error: e.message})
        //res.status(500).json({error: e.message}) is used to send the error as a json response
    }
}
static async apiDeleteReview(req, res, next) {
    try {
        const reviewId = req.params.id || {}
        const reviewResponse = await reviewDAO.deleteReview(reviewId)
        
        if (reviewResponse.error) {
            return res.status(500).json({error: reviewResponse.error})
        }
        
        if (reviewResponse.deletedCount === 0) {
            return res.status(400).json({error: "Unable to delete review"})
        }
        
        res.json({status: "success"})
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}
static async GetReviews(req, res, next){
    try{
        let id = req.params.id || {}
        let reviews = await reviewDAO.getReviews(id)
        if (!reviews) {
            return res.status(404).json({error: "No reviews found"})
        }
        res.json(reviews)
    } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({error: e.message})
    }
}
}

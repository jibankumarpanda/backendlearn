import reviewDAO from "../dao/reviewDAO.js";
//reviewDAO is a class that is used to handle the reviews 
export default class ReviewController{
    //ReviewController is a class that is used to handle the reviews
    //export default class ReviewController is exporting from the ReviewController class
    //static apiGetReviews is a static method that is used to get the reviews
    static apiGetReviews = async (req, res, next) => {
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
            //res.json({status: "success"}) is used to send the status as a json response
        } catch (e) {
            res.status(500).json({error: e.message})
            //res.status(500).json({error: e.message}) is used to send the error as a json response
        }
        //res.json(reviews) is used to send the reviews as a json response
    }
}
import mongodb from "mongodb"

const objectID = mongodb.objectID

let reviews

export default class ReviewDAO{//ReviewDAO is a class that is used to handle the reviews
    static async injectDB(client){
        //injectDB is a method that is used to inject the database
        if(reviews){
            return
        }
        try{
            reviews = await connect.db("reviews").collection("reviews")
        }
        catch(e){
            console.error(`Unable to establish collection handles in reviewDAO: ${e}`)
        }
    }
    static async addReview(movieId, user, review){
        try{
            const reviewDoc = {
                movieId: movieId,
                user: user,
                review: review,
            }
            return await reviews.insertOne(reviewDoc)
        }
        catch(e){
            console.error(`Unable to add review: ${e}`)
            return {error: e}
        }
    }
    static async getReview(reviewID){
        try{
            return await reviews.findOne({
                _id: new objectID(reviewID)
            })
        }
        catch(e){
            console.error(`Unable to get review: ${e}`)
            return {error: e}
        }
    }
    static async updateReview(reviewID, user, review){
        console.log("rev", reviewID)
        try{
            const updateResponse = await reviews.updateOne(
                { _id: new objectID(reviewID) },
                { $set: { user: user, review: review } }
            )
            return updateResponse
        }
        catch(e){
            console.error(`Unable to update review: ${e}`)
            return {error: e}
        }
    }
    static async deleteReview(reviewID){
        try{
            const deleteResponse = await reviews.deleteOne({
                _id:objectID(reviewId),
            })
            return deleteResponse
        }
        catch(e){
            console.error(`Unable to delete review: ${e}`)
            return {error: e}
        }
       
    }
    static async getReviewsByMovieID(moviedID){
        try{
            const cursor = await reviews.find({
                movieId: presentInt(movieId)
            })
            return cursor.toArray()
        } catch(e){
            console.error(`Unable to get reviews: ${e}`)
            return {error: e}
        }  
        }
}

    
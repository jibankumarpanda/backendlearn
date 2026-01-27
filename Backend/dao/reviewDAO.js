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
    
}

    
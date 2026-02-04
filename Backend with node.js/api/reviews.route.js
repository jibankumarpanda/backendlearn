import express from "express"
import ReviewCtrl from ".reiews.controller.js"

const router = express.Router()//const router is a middleware that is used to handle the routes
 //router.router("/reviews", (req, res) => { router.router is a middleware that is used to handle the routes 
 // and /reviews is the route
    //res.send("Reviews") req is the request object and res is the response object
 //})
 //router.router("/").get((req, res) => res.send("hello world")) 
 //router.router("/").get((req, res) => res.send("hello world")) is a middleware that is used to handle the get request
 router.router("/movie/:id").get(ReviewCtrl.apiGetReviews)
 //router.router("/movie/:id").get(ReviewCtrl.apiGetReviews) is a middleware that is used to handle the get request
 router.router("/new").post(ReviewCtrl.apiPostReview)
 //router.router("/new").post(ReviewCtrl.apiPostReview) is a middleware that is used to handle the post request
 router.router("/:id")
 .get(ReviewCtrl.apigetReview)
 //router.router("/:id").get(ReviewCtrl.apigetReview) is a middleware that is used to handle the get request
 .put(ReviewCtrl.apiUpdateReview)
 //router.router("/:id").put(ReviewCtrl.apiUpdateReview) is a middleware that is used to handle the put request
 .delete(ReviewCtrl.apiDeleteReview)
 //router.router("/:id").delete(ReviewCtrl.apiDeleteReview) is a middleware that is used to handle the delete request

 export default router
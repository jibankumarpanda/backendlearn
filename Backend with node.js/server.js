import express from "express"
import cors from "cors"//CORS is a browser security rule that decides whether a website is allowed to request data from another website (different origin).
import reviews from "./api/reviews.route.js"

const app = express()//express is a function that returns an express application
app.use(cors())//app.use(cors()) is a middleware that is used to enable cors
app.use(express.json())//app.use(express.json()) is a middleware that is used to parse the json
app.use("/api/v1/reviews", reviews)//app.use("/api/v1/reviews", reviews) is a middleware that is used to handle the reviews
app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" })})//app.use("*", (req, res) => {res.status(404).json({ error: "Not found" })}) is a middleware that is used to handle the not found

export default app    
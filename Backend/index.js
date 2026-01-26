import app from "./server.js";
import mongodb from "mongodb";
import ReviewDAO from "./dao/reviewDAO.js";

const mongo_client = mongodb.mongo_client
const mongodb_username = prossece.env['mongodb_username']
const mongodb_password = prossece.env['mongodb_password']
const mongodb_uri = prossece.env['mongodb_uri']
const port = process.env.PORT || 8000

mongo_client.connect(uri, 
    {
        poolSize: 5,//poolSize is the number of connections to keep open
        wtimeoutMS: 2500,//wtimeoutMS is the number of milliseconds to wait before timing out
        useNewUrlParser: true,//useNewUrlParser is a boolean that is used to parse the connection string
        useUnifiedTopology: true//useUnifiedTopology is a boolean that is used to use the new topology engine
    })
    .catch(err=>{//.catch() is used to catch the error and err is the error object
        console.error(err.stack)//.stack is used to print the stack trace and console.error() is used to print the error
        process.exit(1)//if there is no error then exit the process
    })
    //async function is a function that returns a promise and its run as sycronously or 
    // it can be run asynchronously or its run the other things while waiting for the promise to resolve
.then(async client=>{//.then() is used to handle the promise and client is the client object and async client is the client object used to handle the promise
    await ReviewDAO.injectDB(client)//await is used to wait for the promise to resolve and ReviewDAO is the class and injectDB is the method
    app.listen(port, ()=>{
        console.log(`Listening on port ${port}`)})//app.listen() is used to listen to the port and console.log() is used to print the port
    //`Listening on port ${port}` is a template literal and ${port} is a variable
})
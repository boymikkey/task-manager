//Create server ...Done
// Create Controllers
//Create Routes ...Done
//Create Middleware ...Done
//Test all REST API and Routes using Postman ...Done

//Create MongoDB (Create Database and get Database api Link for connection) ...Done
// Install Mongoose (npm) and connect your application to database ...Done
//Create models file to generate your database Schema
const express = require("express")
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found') //Page doest not exist middleware
const errorHandlerMiddleware = require('./middleware/not-found') //ERROR Handler Middleware

require("dotenv").config()

//middleware 
app.use(express.static('./public')) // server static files
app.use(express.json()) //for sending JSON in our application


//routes
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)


MONGO_URI="mongodb+srv://lmatt269:FhM7U2pW6ukRQV23@cluster0.y3zd104.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=Cluster0"

// Runs the server on port available
const port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Your server is running! on ${port}`))
    } catch (error) {
        console.log(error)
    }
}


start()  // starts your server on specified or default port of 3000


// Made by @boymikkey

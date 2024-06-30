const mongoose = require('mongoose')

// Only the properties passed in our Schema will be sent to the database, the rest on input form or page will be ignored!

//Schema Validation (Simple Validation Basics)
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please Provide your name'],
        trim:true,
        maxlength:[30, 'name cannot be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model('Task', TaskSchema)
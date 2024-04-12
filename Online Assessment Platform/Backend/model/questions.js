const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({
    testKey:{
        type : String
    },
    testID:{
        type:String
    },
    
    sectionList:{
        type : Array
    },
    totalDuration:{
        type :Number
    },
    testStatus:{
        type:String
    },
    reason:{
        type : String
    },
    userList:{
        type : Array
    },
    noOfRequests:{
        type : Number
    },
    attendedList:{
        type : Array
    },
    cancelledList:{
        type : Array
    }
},{timestamps:true})

module.exports = mongoose.model("questionsSchema",questionSchema)
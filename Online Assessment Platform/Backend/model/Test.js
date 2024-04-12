const mongoose = require('mongoose')
const testSchema = new mongoose.Schema({
    testName : String,
    testCategory : String,
    testType : String,
    questions : Array,
    testAvailability : String,    
    durationPerTest : Number,
    difficultyLevel : String,
    languages : String,
    experienceLevel : String,
    status : String
},{timestamps:true})
module.exports=mongoose.model("testSchema",testSchema)
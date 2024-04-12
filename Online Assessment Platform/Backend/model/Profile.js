const mongoose = require('mongoose')
const profileSchema = new mongoose.Schema({
    userId : {
        type:String,
        unique: true
    },
    firstName : String,
    lastName : String,
    email : String,
    headline : String,
    position: String,
    industry : String,
    school: String,
    country : String,
    city : String,
    profilePhoto : String,
    Mobile : Number
},{timestamps:true})
module.exports = mongoose.model("profileSchema",profileSchema)
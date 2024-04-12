const mongoose = require('mongoose')
const techSchema = new mongoose.model({
    techId : String,
    techName : String,
    categoryID : Number,
    status : String
})
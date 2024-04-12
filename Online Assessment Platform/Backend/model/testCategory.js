const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    categoryID : Number,
    categoryName : String,
    status : String
})
module.exports = mongoose.model("categorySchema",categorySchema)

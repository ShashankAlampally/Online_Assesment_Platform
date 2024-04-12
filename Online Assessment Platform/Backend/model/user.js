const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,    
    roleID: Number,    
    email: String
});
module.exports= mongoose.model("UserSchema", userSchema);
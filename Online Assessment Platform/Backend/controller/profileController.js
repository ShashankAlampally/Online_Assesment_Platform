const profileModel = require('../model/Profile.js')
const profileService = require('../services/profileService.js')
exports.createProfile = async(req,res)=>{
   try {
    const reqBody = req.body
    if(!reqBody.firstName){
        return res.status(400).send({message : "firstname required"})
    }
    if(!reqBody.userId){
        return res.status(400).send({message : "userId required"})
    }
    if(!reqBody.lastName){
        return res.status(400).send({message : "lastname required"})
    }
    if(!reqBody.email ){
        return res.status(400).send({message : "email required"})
    }
    if(!reqBody.headline){
        return res.status(400).send({message : "headline required"})
    }
    if(!reqBody.position){
        return res.status(400).send({message : "position required"})
    }
    if(!reqBody.industry){
        return res.status(400).send({message : "industry required"})
    }
    if(!reqBody.school){
        return res.status(400).send({message : "school required"})
    }
    if(!reqBody.country){
        return res.status(400).send({message : "country required"})
    }
    if(!isEmail(reqBody.email)){
        return res.status(400).send({message:"email not valid"})
    }

    let create = await profileService.createProfile(reqBody);
    console.log(create)
    return res.status(200).send({message:"successfully added"})
   } catch (error) {
            return res.status(400).send({"error":error})
   } 


}
exports.viewProfile = async(req,res)=>{
    try {
        const reqBody = req.params
        console.log("viewProfile",reqBody);
        if(!reqBody.userID){
            return res.status(400).send({message:"email required"})
         }
        const viewProfile = await profileService.viewProfile(reqBody);
         return res.status(200).send(viewProfile)

        
    } catch (error) {
        return res.status(400).send({"error":error})
    }
}
exports.updateProfile = async(req,res)=>{
    try {
        const reqBody = req.body
        if(!reqBody.userId){
            return res.status(400).send({message:"userId required"})
         }
        const updateProfile = await profileService.updateProfile(reqBody);
        return res.status(200).send({message:updateProfile})
    } catch (error) {
        console.log(error)
        return res.status(400).send({"error":error})
    }
}
exports.deleteProfile = async(req,res)=>{
    try {
        const reqBody = req.body
        if(!reqBody.userId){
            return res.status(400).send({message:"userId required"})
         } 
        const deleteProfile = await profileService.deleteProfile(reqBody);
        return res.status(200).send({message:deleteProfile})

    } catch (error) {
        return res.status(400).send({"error":error})
    }
}

function isEmail(email) {
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && email.match(emailFormat)) { return true; }
    
    return false;
}

const { profile } = require("console")
const { resolve } = require("path")
const profileModel = require('../model/Profile.js')
const { rejects } = require("assert")


function profileService(){

}
profileService.createProfile=async(body)=>{
    return new Promise (async(resolve,reject)=>{
        try {
           const addProfile = await profileModel.create({
                firstName : body.firstName, lastName : body.lastName,
                email : body.email, headline:body.headline, position:body.position,
                industry : body.industry,school : body.school , country:body.country,
                city:body.city,userId : body.userId,profilePhoto : body.profilePhoto
                
           })
           resolve('success')
        } catch (error) {
            reject(error)
        }
    })
}
profileService.viewProfile=async(body)=>{
    return new Promise (async(resolve,reject)=>{
        try {
            const viewProfile = await profileModel.find({
                "userId" : body.userID
            }).lean()
            resolve(viewProfile)
        } catch (error) {
            reject(error)
        }
    })
}
profileService.updateProfile=async(body)=>{
    return new Promise (async(resolve,reject)=>{
        try {
            const updateProfile = await profileModel.updateOne({userId : body.userId},{$set:body})
            resolve('Updated Successfully')
        } catch (error) {
            reject(error)
        }
    })
}
profileService.deleteProfile=async(body)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const deleteProfile = await profileModel.deleteOne({userId : body.userId})
            resolve("Profile Deleted")
        } catch (error) {
            reject(error)
        }
    })
}
module.exports=profileService
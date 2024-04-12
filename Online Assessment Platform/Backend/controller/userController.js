const express = require('express')
const jwt = require('jsonwebtoken')
const userModel = require('../model/user.js')
const contant = require('../constants/const.js')
const profileModel = require('../model/Profile.js')
exports.signup = async(req, res) => {
    try {
        const { username, password, email, roleID } = req.body
        if (!(username && password && email && roleID)) {
           return res.status(400).send("all fields are compulosry")
        }
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
           return res.status(401).send("user already exists with this email")
        }
        const user = await userModel.create({username, password, email, roleID})
        const exist = await userModel.find({email})
        const profile = await profileModel.create({email,"userId":exist[0]._id})
        
       return res.status(201).send({message:"User Registered successfully",data : exist})
    }
    catch (err) {
       return res.status(400).send({"error":err.message})
    }

}
exports.login = async(req, res) => {
    try {
        const { email, password } = req.body
        if (!email) {
           return res.status(400).send({ message: "Email Id is required!" })
        }
        if (!password) {
            return res.status(400).send({ message: "Password is required!" })
         }
        const exist =  await userModel.findOne({ email })
            // console.log('df');
        if(!exist){
           return res.status(400).send({message:"User not found"})
        }
        if(exist.password != password){
           return res.status(400).send({message: "Wrong Password"})
        }
        const token = jwt.sign(email,"shhhhhh")
        return res.status(200).send({message: "logged successful",data:{"token":token,expiresIn:1000*60*5,"userID":exist._id}})       

    }
    catch (err) {
        console.log(err)
        return res.status(400).send({error:err.message})
    }
}
exports.view = async(req,res)=>{
   try {
      const userDetails = await userModel.find({},{_id:0}).lean()
      if(!userDetails){
         return res.status(400).send({message:"No users found"})
      }
      let result = userDetails.map((e)=>{
         let exist = contant.roleID.filter((f)=>{
            return f.roleid === e.roleID
         })
         if(exist.length > 0){
             e.role = exist[0].role
         }
         return e
     })
      
      return res.status(200).send({message:"data retrived successfully",data:result})
   } catch (error) {
      return res.status(400).send({error:error.message})
   }
}
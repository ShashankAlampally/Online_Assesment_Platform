const questionService = require('../services/questionService.js')
const userModel = require('../model/user.js')
const questionModel = require('../model/questions.js')
const testModel = require('../model/Test.js')
const mongoose=require('mongoose')
exports.createQuestion=async(req,res)=>{
    try {
        let reqBody = req.body
        
        if(!reqBody.testId){
            return res.status(400).send({message : "test id required"})
        }
        if(!reqBody.sectionList){
            return res.status(400).send({message : "sectionList required"})
        }
     
        let testExist = await questionModel.find({testID:reqBody.testId});
        
        if(testExist.length > 1){
            
            testExist[0].sectionList = testExist[0].sectionList.concat(reqBody.sectionList);
            
            testExist[0].totalDuration = testExist[0].totalDuration + reqBody.sectionList.reduce((x,y)=>{
                return x+parseInt(y.duration)
            },0)
            console.log(testExist[0].totalDuration)
            const updateQuestions = await questionModel.updateMany({testID:reqBody.testId},{
                $set:{
                    sectionList : testExist[0].sectionList,
                    totalDuration : testExist[0].totalDuration
                }
            })
            let Exist = await questionModel.find({testID:reqBody.testId});
            return res.status(400).send({message : "adding into existing test",data : Exist})
        }
        else{
        const creation = await questionModel.insertMany({
            testID:reqBody.testId,
            sectionList:reqBody.sectionList,
            testStatus:"Available",
            totalDuration: reqBody.sectionList.reduce((x,y)=>{
                return x+parseInt(y.duration)
            },0)
        })
       return res.status(200).send({message:'created successfully!', data : creation},) 
    }
    } catch (error) {
        console.log(error)
    }
}
exports.viewQuestion = async(req,res)=>{
    try{
    const testCategory = req.params
    if(!testCategory){
        return res.status(400).send({message:"testCategory required"})
    }
    const exist = await testModel.find({ testCategory : testCategory}).lean()
    if(!(exist)){
        return res.status(400).send({message : "Test not found"})
    }
    const questions = await questionModel.find({}).lean()
    
    let result = testModel.map((e)=>{
        let exist = questionModel.filter((f)=>{
            f._id = e.questionId
        })
        if(exist.length > 0){
            e.questionList = exist 
        }
        return e
    })
    return res.status(200).send({data:result})
    }
    catch(err){
        return res.status(400).send({"error":err.message})
    }

}
exports.updateQuestion = async(req,res)=>{
    try{
    const reqBody = req.body
    if(!(reqBody)){
        return res.status(400).send({message:"testCategory must be filled"})
    }    
    let exist = await questionModel.updateOne({_id:reqBody._id},{$set:reqBody})
    return res.status(200).send({message:'updated successfully'})
    }        
    catch(err){
        return res.status(400).send({"error":err.message})
    }    
    
}
exports.viewQuestionByID = async(req,res)=>{
    try{
    const questionID = req.params
    if(!questionID){
        return res.status(400).send({message:"questionID required"})
    }
    const exist = await questionModel.find({ testCategory : testCategory}).lean()
    if(!(exist)){
        return res.status(400).send({message : "Test not found"})
    }
    const questions = await questionModel.find({}).lean()
    
    let result = testModel.map((e)=>{
        let exist = questionModel.filter((f)=>{
            f._id = e.questionId
        })
        if(exist.length > 0){
            e.questionList = exist 
        }
        return e
    })
    return res.status(200).send({data:result})
    }
    catch(err){
        return res.status(400).send({"error":err.message})
    }

}
exports.viewQuestionBytestId =async(req,res)=>{
    try {
        const reqBody = req.body
        if(!reqBody.testId){
            return res.status(400).send({message:"test ID required"})
        }
        
        const exist = await questionModel.find({testID:reqBody.testId});
        if(!exist){
            return res.status(400).send({message:"test ID not found"})
        }
        console.log(exist)
        return res.status(200).send({data:exist[0].sectionList})
    } catch (error) {
        return res.status(400).send({"error":error.message})
    }
}
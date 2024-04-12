const testModel = require('../model/Test.js');
const testCategoryModel = require('../model/testCategory.js');
const { exists } = require('../model/user.js');
const testService = require('../services/userService.js')
const questionModel = require('../model/questions.js')
exports.createTest = async(req,res) => {
    try{
    const {
            testName,testCategory,testType,testAvailability,
            durationPerTest,difficultyLevel,languages,
            experienceLevel,status
        } = req.body 

    if(!(
        testName && testCategory && testType && testAvailability &&
        durationPerTest && difficultyLevel && languages &&
        experienceLevel && status
        )){
            return res.status(400).send({message : "All field must be filled compulsory"})
        }
    const existTestCategory = await testCategoryModel.find({categoryName : testCategory})
    if(!existTestCategory){
        return res.status(400).send({message : "Test Category not found"})
        }
        const addtest = await testModel.create({testName,testCategory,testType,testAvailability,
            durationPerTest,difficultyLevel,languages,
            experienceLevel,status})    
    return res.status(200).send({"message": "Test added successfully"})    
    }
    catch(err){
        return res.status(400).send({"error":err.message})
    }


}
exports.viewTest = async(req,res)=>{
    try{
    const {testCategory} = req.params
    console.log(testCategory)
    if(!(testCategory)){
        return res.status(400).send({message:"Can not fetch testCategory"})
    }
    const exist = await testModel.find({testCategory : testCategory}).lean()
    if(!(exist)){
        return res.status(400).send({message : "Test not found"})
    }
    console.log(exist[0]._id.toString());
    const questions = await questionModel.find({})
    
    const result = exist.map((item,key)=>{
        const question = questions.filter(
            (f)=> 
                f.testID === item._id.toString()
                
                    
        )
        console.log(question)
        if(question.length>0){
            item.questionsLength = question[0].sectionList.length;
            
        }
        
    })
    console.log(result);
    return res.status(200).send({message : "Result fetched",data:exist})
    }
    catch(err){
        return res.status(400).send({"error":err.message})
    }

}
exports.updateTest = async(req,res)=>{
    try{
    const reqBody = req.body
    if(!(reqBody)){
        return res.status(400).send({message:"testCategory must be filled"})
    }    
    let exist = await testModel.updateOne({_id:reqBody._id},{$set:reqBody})
    return res.status(200).send({message:'updated successfully'})
    }        
    catch(err){
        return res.status(400).send({"error":err.message})
    }    
    
}
exports.deleteTest = async(req,res)=>{
    try {
        const reqBody = req.body
        if(!reqBody._id){
            return res.status(400).send({message:"Test Category required"})
        }
        const exist = await testModel.deleteOne({_id : reqBody._id})
        return res.status(200).send({message:"Deleted Successfully"})
    } 
    catch (error) {
        return res.status(400).send({"error":error.message})
    }
}
exports.getTestCategory = async(req,res)=>{
    
}
const testModel = require('../model/Test.js')
const categoryModel = require('../model/testCategory.js')
exports.testCategory= async(req,res)=>{
    try {
        
        const exist = await categoryModel.find({},{categoryName:1,_id:0}).lean()
        res.status(200).send({exist})
    } catch (error) {
        res.status(400).send({"error":error})
    }
}
function testService(){

}
testService.createTest=async(reqBody)=>{
      return new Promise(async(resolve,reject)=>{
        try{
            const addtest = await testModel.create({testName,testCategory,testType,testAvailability,
                durationPerTest,difficultyLevel,languages,
                experienceLevel,status})    
            resolve('')
        }catch(err){
            reject(err);
        }
    })  
}

module.exports=testService
// const testService = async(body)=>{
//     return new Promise(async(resolve,reject)=>{
//         try{
// //create,read,update,delete
//         }catch(err){
            
//         }
//     })
// }
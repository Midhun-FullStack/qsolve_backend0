
const questionBank = require("../model/questionBankSchema")
const asynchandler = require("express-async-handler")

exports.createQuestionBank=asynchandler(async (req,res)=>{
    

    const {title,description,semesterID,subjectID}=req.body
    const postCreated = await questionBank.create({title, description,semesterID,subjectID,fileUrl:req.file.path})
    if(!postCreated)res.status(400).send("error while creating the documents")
    console.log(req.file,);

    res.status(200).json(postCreated)

})

exports.getAllQuestionBank=asynchandler(async (req,res)=>{
    const response = await questionBank.find()
    if(!response)req.status(500).send("error fetching pdfs")
        res.status(200).json(response)

    
})
exports.getQuestionBankBySubjects= asynchandler(async(req,res)=>{
    const {subjectID}= req.body
    const responce = await questionBank.findOne( {subjectID})
    res.json(responce)
})

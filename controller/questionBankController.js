
const questionBank = require("../model/questionBankSchema")
const asynchandler = require("express-async-handler")

exports.createQuestionBank=asynchandler(async (req,res)=>{
    

    const {title,description,semesterID,subjectID,fileUrl}=req.body
    const postCreated = await questionBank.create({title, description,semesterID,subjectID,fileUrl})
    if(!postCreated)res.status(400).send("error while creating the documents"
    )

    res.status(200).send("successfully created question bank collection")

})

exports.getAllQuestionBank=asynchandler(async (req,res)=>{
    const response = await questionBank.find()
    if(!response)req.status(500).send("error fetching pdfs")
        res.status(200).json(response)

    
})

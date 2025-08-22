
const questionBank = require("../model/questionBank")
const asynchandler = require("express-async-handler")

exports.createQuestionBank=asynchandler(async (req,res)=>{
    if(req.user.role!="admin")res.status(400).send("authenticaction failed/no access to this route")

    const {title,description,price,semester,subject,fileUrl}=req.body
    const postCreated = await questionBank.create(title, description,price,{uploadedBy:req.user.id},semester,subject,fileUrl)
    if(!postCreated)res.status(400).send("error while creating the documents"
    )

    res.status(400).send("successfully created question bank collection")

})


// title:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true
//     },
//     price:{
//         type:Number,
//         required:true,
//         min:0
//     },
//     DepartmentID:{
//         type: mongoose.Schema.Types.ObjectId, 
//     ref: 'Department',   
//     required: true 
//     },
//     SemesterID:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Semester",
//         required:true
//     },
//     subjectID:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Subject",
//         required:true
//     },



const questionBank = require("../model/questionBank")
const asynchandler = require("express-async-handler")

exports.createQuestionBank=asynchandler(async (req,res)=>{
    if(req.user.role!="admin")res.status(400).send("authenticaction failed/no access to this route")

    const {title,description,price,dummyUrl}=req.body
    const postCreated = await questionBank.create(title, description,price,dummyUrl,{uploadedBy:req.user.id})
    if(!postCreated)res.status(400).send("error while creating the documents"
    )

    res.status(400).send("success fully created question bank collection")

})


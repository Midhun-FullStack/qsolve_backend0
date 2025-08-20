const  mongoose = require("mongoose")
const questionBankSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   
    
    SemesterID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Semester",
        required:true
    },
    subjectID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },
    fileUrl: { type: String,
         required: true 
        },
    
    uploadedBy:{    type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
    
})
const questionBank = mongoose.model('QuestionBank', questionBankSchema);
module.exports=questionBank
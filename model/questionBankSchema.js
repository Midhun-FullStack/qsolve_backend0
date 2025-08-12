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
    price:{
        type:Number,
        required:true,
        min:0
    },
    DepartmentID:{
        type: mongoose.Schema.Types.ObjectId, 
    ref: 'Department',   
    required: true 
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

})
const questionBank = mongoose.model('Semester', questionBankSchema);
module.exports=questionBank
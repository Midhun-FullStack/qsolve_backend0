const mongoose = require("mongoose")
const subjectSchema = new mongoose.Schema({
    subject:{
        type:String,
        unique:true,
        required:true
    }
    
})
const Semester = mongoose.model('Subject', semesterSchema);
module.exports=Semester
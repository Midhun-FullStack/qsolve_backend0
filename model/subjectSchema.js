const mongoose = require("mongoose")
const subjectSchema = new mongoose.Schema({
    subject:{
        type:String,
        unique:true,
        required:true
    }
    
})
const Semester = mongoose.model('User', semesterSchema);
module.exports=Semester
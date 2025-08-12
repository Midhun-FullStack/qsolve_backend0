const mongoose = require("mongoose")
const departmentSchema = new mongoose.Schema({
    Department:{
        type:String,
        unique:true,
        required:true
    }
    
})
const Department = mongoose.model('Department', departmentSchema);
module.exports=Department
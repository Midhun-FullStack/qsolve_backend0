const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true

    },
    password:{
        type:String,
        required: true 
        
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    role: { 
    type: String, 
    enum: ['student', 'staff', "other","admin"], 
    required: true 
  }
})
const User = mongoose.model('User', userSchema);
module.exports=User
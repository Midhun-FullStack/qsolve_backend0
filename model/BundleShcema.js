const mongoose = require("mongoose")
const BundleSchema = new mongoose.Schema({
    title:{
        type:String
    },
    DepartmentID:{

        type:mongoose.Schema.Types.ObjectId,
        ref:"Department",
        required:true


    },
     price:{
            type:Number,
            required:true,
            min:0
        },
     products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"QuestionBank"
    }]
    
})
const Department = mongoose.model('Bundle', BundleSchema);
module.exports=Department
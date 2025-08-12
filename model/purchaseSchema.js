const mongoose = require("mongoose")
const purchaseSchema = new mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    questionBankID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"questionBank"
    }
    ,
    
})
const purchase = mongoose.model('Department', purchaseSchema);
module.exports=purchase
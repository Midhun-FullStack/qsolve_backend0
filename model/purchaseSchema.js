const mongoose = require("mongoose")

const purchaseSchema = new mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    BundleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Bundle"
    }
    ,
    
})
const purchase = mongoose.model('purchase', purchaseSchema);
module.exports=purchase
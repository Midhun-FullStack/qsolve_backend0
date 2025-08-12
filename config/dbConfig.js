const mongoose = require("mongoose")

exports.dbCONNECT = async () =>{
    try{
        await mongoose.connect(process.env.mongoURI)
        console.log("database connected succesfully ")
    }
    catch(err){
        console.error("database connection failed ",err)
        process.exit(1)
    }
}
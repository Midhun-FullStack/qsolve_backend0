
const bundleSchema = require("../model/bundleSchema")
const asynchandler = require("express-async-handler")

exports.createBundle = asynchandler(async (req,res)=>{
    const {department,price,products}=req.body
    // needs to set validatio
    const bundleCreated = await bundleSchema.create(department,price,products)
        

    bundleCreated.status(200).send("bundleCreated")



})
exports.getBundle = asynchandler(async (req,res)=>{
    const responce = await bundleSchema.find()
    res.status(200).json(responce)
})

exports.getBundleByDepartment = asynchandler(async(req,res)=>{
    const {department}= req.body
    const responce = await bundleSchema.find(department)
    
}) 
exports.getSubjectByDepartment = asynchandler(async(req,res)=>{
     const {department}= req.body
    const listOfProductByDepartment = await bundleSchema.findOne({department}).select("products").populate({
        path:"products",
        populate:"subject"
        
    })
    subjects = [...new set(listOfProductByDepartment.pr)]
    

}) 

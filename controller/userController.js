const User = require("../model/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const asynchandler = require("express-async-handler")



exports.registerUser = asynchandler(async (req,res)=>{
    const {username,email,password,firstname,lastname,role}=req.body
    if(!username || !email||!password||!firstname||!lastname ||!role){
        req.statusCode(400).message("fill all the details")
    }
    req.message('thanks for your patiance we are working on it')

})
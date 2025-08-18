// The bad days? They’re tuition. You’re paying for wisdom.

// The good days? They’re proof that progress is real.

// The future? It’s still yours to write, page by page.




const User = require("../model/userSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const asynchandler = require("express-async-handler")



exports.registerUser = asynchandler(async (req,res)=>{
    const {username,email,password,firstname,lastname,role}=req.body
    if(!username || !email||!password||!firstname||!lastname ||!role){
        res.statusCode(400).json("fill all the details")
    }
    isExist= await User.findOne({email})
    if(isExist){
        res.status(400).json("user already exists")
    } 
    hashed =await bcrypt.hash(password,10)
    const userCreated = await User.create({
        username,
        email,
        password:hashed,
        firstname,
        lastname,
        role
    })
    if(userCreated){
        res.status(201).json({
            _id:userCreated._id,
            username:userCreated.username,
            email:userCreated.email,
            firstname:userCreated.firstname,
            lastname:userCreated.lastname,
            role:userCreated.role
        })
    }
    else{
        res.status(400).json("user not created")
    }


})

exports.loginUser = asynchandler(async (req,res)=>{
        const {email,password}=req.body
        if(!email || !password){
            res.status(400).json("fill all the deatils")
        }
        const userEmailMatched = await User.findOne({email})
        if(!userEmailMatched){
            res.status(400).json("user not found")
        }

        const isPasswordMatched = await bcrypt.compare(password,userEmailMatched.password)
        if(!isPasswordMatched){res.status(400).json("password not matched")}
        else{
            const token = jwt.sign({_id:userEmailMatched._id},process.env.jwtKey)
            res.json({token})
            console.log("user logged in");
            
        }
})
exports.getUserProfile= asynchandler(async(req,res)=>{
   const userID= req.user
   
   const fetchedUser = await User.findById(userID._id).select("-password -__v")
   res.status(201).json(fetchedUser) 
   
})
exports.changePasword = asynchandler(
    async (req,res)=>{
        const {currentPassowrd,newPassword,conformNewPassword}=req.body
        if(!currentPassowrd||!newPassword||!conformNewPassword){
            res.status(400).send("all feild are required to fill")
        }

        if(newPassword!=conformNewPassword){
            res.status(400).send("the passwords must be equal")
        }
        if(currentPassowrd==newPassword){
            res.status(400).send("same password-")
        }

        const userID = req.User
         const hashedPassword = await bcrypt.hash(newPassword, 10)
        const updatedUser = await User.findByIdAndUpdate(userID,{ password: hashedPassword },{ new: true })
        if(!updatedUser){
            res.status(400).send("no user found")
        }
        res.status(400).send("sucesfully changed password")
    }
)
const express = require("express") 
const  router = express.Router()
const {registerUser,loginUser,getUserProfile}= require("../../controller/userController")

const semesterRoutes = require("./semesterRoutes")
const subjectRoutes = require("./subjectRoutes")
const {authenticateUser} = require("../../middleware/auth")
const questionBankRoutes = require("./questionBankRoutes")
const departmentRoutes = require("./departmentRoutes")
const bundleRoutes = require("./bundleRoutes")
 
//for welocme message
router.get("/",(req,res)=>{
    res.send("user API is running...")
})
router.post("/register", registerUser)
router.post("/login", loginUser);
router.get("/profile",authenticateUser,getUserProfile);
router.use("/semester",semesterRoutes)
router.use("/subject",subjectRoutes)
router.use("/department",departmentRoutes)
router.use("/pdf",questionBankRoutes)//!
router.use("/bundle",bundleRoutes)//!






module.exports = router
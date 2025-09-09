const express = require("express") 
const  router = express.Router()
const {registerUser,loginUser,getUserProfile}= require("../../controller/userController")

const semesterRoutes = require("./semesterRoutes")
const subjectRoutes = require("./subjectRoutes")
const {authenticateUser} = require("../../middleware/auth")
const questionBankRoutes = require("./questionBankRoutes")
const departmentRoutes = require("./departmentRoutes")
const bundleRoutes = require("./bundleRoutes")
const { createPaymentIntent } = require("../../controller/paymentController")
 
//for welocme message
router.get("/",(req,res)=>{
    res.send("user API is running...")
})
router.post("/register", registerUser)
router.post("/login", loginUser);
router.get("/profile",authenticateUser,getUserProfile);
router.use("/semester",authenticateUser,semesterRoutes)
router.use("/subject",authenticateUser,subjectRoutes)
router.use("/department",authenticateUser,departmentRoutes)
router.use("/pdf",authenticateUser,questionBankRoutes)//!
router.use("/bundle",authenticateUser,bundleRoutes)//!
router.post("/payment",authenticateUser,createPaymentIntent)






module.exports = router
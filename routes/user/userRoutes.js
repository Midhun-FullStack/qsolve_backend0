const express = require("express") 
const  router = express.Router()
const {registerUser,loginUser,getUserProfile}= require("../../controller/userController")

const semesterRoutes = require("../mainRoutes/semesterRoutes")
const subjectRoutes = require("../mainRoutes/subjectRoutes")
const {authenticateUser} = require("../../middleware/auth")
const questionBankRoutes = require("../mainRoutes/questionBankRoutes")
const departmentRoutes = require("../mainRoutes/departmentRoutes")
const bundleRoutes = require("../mainRoutes/bundleRoutes")
const paymentRoutes = require("../mainRoutes/paymentRoutes")
 

router.post("/register", registerUser)
router.post("/login", loginUser);
router.get("/profile",authenticateUser,getUserProfile);
router.use("/semester",authenticateUser,semesterRoutes)
router.use("/subject",authenticateUser,subjectRoutes)
router.use("/department",authenticateUser,departmentRoutes)
router.use("/pdf",authenticateUser,questionBankRoutes)
router.use("/bundle",authenticateUser,bundleRoutes)
router.use("/payment",authenticateUser,paymentRoutes)





module.exports = router
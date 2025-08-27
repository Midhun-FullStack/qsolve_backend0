const express = require("express") 
router = express.Router()
const {registerUser,loginUser,getUserProfile}= require("../../model/userSchema")
const {atuhenticateUser} = require("../../middleware/auth")
const semesterRoutes = require("./semesterRoutes")
const subjectRoutes = require("./subjectRoutes")
const questionBankRoutes = require("./questionBankRoutes")
const departmentRoutes = require("./departmentRoutes")
const bundleRoutes = require("./bundleRoutes")


router.post("/register", registerUser)
router.post("/login", loginUser);
router.get("/profile", atuhenticateUser  ,getUserProfile);
router.use("/semester",semesterRoutes)
router.use("/subject",subjectRoutes)
router.use("/department",departmentRoutes)
router.use("/pdf",questionBankRoutes)
router.use("/bundle",bundleRoutes)






module.exports = router
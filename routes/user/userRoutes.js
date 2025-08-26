const express = require("express") 
router = express.Router()
const {registerUser,loginUser,getUserProfile}= require("../../model/userSchema")
const {atuhenticateUser} = require("../../middleware/auth")
const semesterRoutes = require("./semesterRoutes")
const subjectRoutes = require("./subjectRoutes")


router.post("/register", registerUser)
router.post("/login", loginUser);
router.get("/profile", atuhenticateUser  ,getUserProfile);
router.get("/semester",semesterRoutes)
router.get("/subject",subjectRoutes)




module.exports = router
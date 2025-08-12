const express = require("express") 
router = express.Router()
const {registerUser,loginUser,getUserProfile}= require("../controller/userController")
const {atuhenticateUser} = require("../middleware/auth")


router.post("/register", registerUser)
router.post("/login", loginUser);
router.get("/profile", atuhenticateUser  ,getUserProfile);

module.exports = router
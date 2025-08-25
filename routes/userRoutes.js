const express = require("express") 
router = express.Router()
const {registerUser,loginUser,getUserProfile}= require("../controller/userController")
const {atuhenticateUser} = require("../middleware/auth")


router.post("/user/register", registerUser)
router.post("/user/login", loginUser);
router.get("/user/profile", atuhenticateUser  ,getUserProfile);



module.exports = router
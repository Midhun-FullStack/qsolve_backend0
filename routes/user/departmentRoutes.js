const express = require("express") 
router = express.Router()
const department =require("../../controller/deparmentController")


router.get("/",department.getAllDepartment)
module.exports = router
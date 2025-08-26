const express = require("express") 
router = express.Router()
const {createDepartment,getAllDepartment} =require("../../controller/deparmentController")


router.get("/",getAllDepartment)
module.exports = router
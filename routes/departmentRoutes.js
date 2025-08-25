const express = require("express") 
router = express.Router()
const {createDepartment,getAllDepartment} =require("./departmentRoutes")

router.post("/",createDepartment)
router.get("/",getAllDepartment)
module.exports = router
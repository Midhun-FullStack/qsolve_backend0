const express = require("express") 
router = express.Router()
const semester =require("../../controller/semesterController")


router.get("/",semester.getAllSemester)
module.exports = router
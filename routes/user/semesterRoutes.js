const express = require("express") 
router = express.Router()
const {getAllSemester} =require("../../controller/semesterController")


router.get("/",getAllSemester)
module.exports = router
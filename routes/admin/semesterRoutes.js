const express = require("express") 
router = express.Router()
const {createSemester} =require("../../controller/semisterController")

router.post("/",createSemester)

module.exports = router
const express = require("express") 
router = express.Router()
const {createSemester} =require("../../controller/semisterController")

router.post("/create",createSemester)

module.exports = router
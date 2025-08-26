const express = require("express") 
router = express.Router()
const {getAllSubject} =require("../../controller/subjectController")

router.post("/",getAllSubject)

module.exports = router
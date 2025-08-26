const express = require("express") 
router = express.Router()
const {createSubject} =require("../controller/subjectController")

router.post("/",createSubject)

module.exports = router
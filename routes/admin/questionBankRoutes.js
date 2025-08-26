const express = require("express") 
router = express.Router()
const {createQuestionBank,} =require("../../controller/questionBankController")

router.post("/",createQuestionBank)

module.exports = router
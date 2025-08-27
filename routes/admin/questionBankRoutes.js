const express = require("express") 
router = express.Router()
const {createQuestionBank} =require("../../controller/questionBankController")

router.post("/create",createQuestionBank)


module.exports = router
const express = require("express") 
router = express.Router()
const {getAllQuestionBank} =require("../../controller/questionBankController")


router.post("/",getAllQuestionBank)



module.exports = router
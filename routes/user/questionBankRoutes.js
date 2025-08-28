const express = require("express") 
router = express.Router()
const questionBank =require("../../controller/questionBankController")
const bundle =require("../../controller/bundleController")


router.post("/",questionBank.getAllQuestionBank)
router.post("/byDepartment",bundle.getPdfByDeparment)



module.exports = router
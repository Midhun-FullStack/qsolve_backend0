const express = require("express") 
router = express.Router()
const {getAllQuestionBank} =require("../../controller/questionBankController")
const {getPdfByDeparment} =require("../../controller/bundleController")


router.post("/",getAllQuestionBank)
router.post("/byDepartment",getPdfByDeparment)



module.exports = router
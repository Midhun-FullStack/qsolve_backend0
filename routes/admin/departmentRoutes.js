const express = require("express") 
router = express.Router()
const {createDepartment,
    getAllQuestionBank
} =require("../../controller/deparmentController")

router.post("/",createDepartment)
router.post("/",getAllQuestionBank)


module.exports = router
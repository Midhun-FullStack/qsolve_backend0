const express = require("express") 
router = express.Router()
const {getAllSubject} =require("../../controller/subjectController")
const {getSubjectByDepartment}=require("../../controller/bundleController")

router.post("/",getAllSubject)
router.get("/byDepartment",getSubjectByDepartment)


module.exports = router
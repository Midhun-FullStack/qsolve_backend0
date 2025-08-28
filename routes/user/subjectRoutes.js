const express = require("express") 
router = express.Router()
const subject =require("../../controller/subjectController")
const bundle=require("../../controller/bundleController")

router.post("/",subject.getAllSubject)
router.get("/byDepartment",bundle.getSubjectByDepartment )


module.exports = router
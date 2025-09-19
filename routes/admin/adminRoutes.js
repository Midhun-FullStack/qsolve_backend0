const express = require("express") 
const departmentRoutes = require("../mainRoutes/departmentRoutes")
const semesterRoutes  =require("../mainRoutes/semesterRoutes")
const subjectRoutes = require("../mainRoutes/subjectRoutes")
const bundleRoutes = require("../mainRoutes/bundleRoutes")
const questionBankRoutes = require("../mainRoutes/questionBankRoutes")
const router = express.Router()

//for welocme message
router.get("/",(req,res)=>{
    res.send("admin API is running...")
})
router.use("/department",departmentRoutes)
router.use("/semester",semesterRoutes)
router.use("/subject",subjectRoutes)
router.use("/bundle",bundleRoutes)
router.use("/pdf",questionBankRoutes)




module.exports = router

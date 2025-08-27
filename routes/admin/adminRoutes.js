const express = require("express") 
const departmentRoutes = require("./departmentRoutes")
const semesterRoutes  =require("./semesterRoutes")
const subjectRoutes = require("./subjectRoutes")
const bundleRoutes = require("./bundleRoutes")
const questionBankRoutes = require("./questionBankRoutes")
router = express.Router()

router.use("/department",departmentRoutes)
router.use("/semester",semesterRoutes)
router.use("/subject",subjectRoutes)
router.use("/bundle",bundleRoutes)
router.use("pdf",questionBankRoutes)




module.exports = router

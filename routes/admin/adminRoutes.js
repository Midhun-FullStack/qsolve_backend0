const express = require("express") 
const departmentRouter = require("./departmentRoutes")
const semesterRouter  =require("./semesterRoutes")
const subjectRoutes = require("./subjectRoutes")
router = express.Router()

router.use("/department",departmentRouter)
router.use("/semester",semesterRouter)
router.use("/subject",subjectRouter)



module.exports = router

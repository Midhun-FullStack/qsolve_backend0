const express = require("express") 
const departmentRouter = require("./departmentRoutes")
const userRouter = require("./userRoutes")
const adminRouter = require("./adminRoutes")

router = express.Router()
router.use("/department/",departmentRouter)


module.exports = router

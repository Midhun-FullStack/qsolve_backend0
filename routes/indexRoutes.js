const express = require("express") 

const userRouter = require("./user/userRoutes")

const adminRouter = require("./admin/adminRoutes")

router = express.Router()

router.use("/admin",adminRouter)
router.use("/user",userRouter)


module.exports = router

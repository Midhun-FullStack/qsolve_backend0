const express = require("express") 

const userRouter = require("./user/userRoutes")

const adminRouter = require("./admin/adminRoutes")

router = express.Router()
//for welocme message
router.get("/",(req,res)=>{
    res.send("API is running...")
})

router.use("/admin",adminRouter)
router.use("/user",userRouter)


module.exports = router

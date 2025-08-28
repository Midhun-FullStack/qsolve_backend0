const express = require("express")
router = express.Router()
const { createDepartment} = require("../../controller/deparmentController")

router.get("/", (req, res) => {
    res.send("department API is running...")
})
router.post("/create", createDepartment)



module.exports = router
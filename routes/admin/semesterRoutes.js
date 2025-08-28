const express = require("express") 
router = express.Router()
const {createSemester} =require("../../controller/semesterController")

router.get("/", (req, res) => {
    res.send("semester API is running...")})
    
router.post("/create",createSemester)

module.exports = router
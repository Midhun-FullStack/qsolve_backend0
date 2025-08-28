const express = require("express") 
router = express.Router()
const {createSubject} =require("../../controller/subjectController")


router.get("/", (req, res) => {
    res.send("subject API is running...")
})
router.post("/create",createSubject)

module.exports = router
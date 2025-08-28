const express = require("express") 
router = express.Router()
const {createQuestionBank} =require("../../controller/questionBankController")

router.get("/", (req, res) => {
    res.send("question bank API is running...")
})
router.post("/create",createQuestionBank)


module.exports = router
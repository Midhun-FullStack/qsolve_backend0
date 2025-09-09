const express = require("express") 
router = express.Router()
const {createQuestionBank} =require("../../controller/questionBankController")
const parser = require("../../middleware/multer");

router.get("/", (req, res) => {
    res.send("question bank API is running...")
})
router.post("/create",parser.single("file"),createQuestionBank)


module.exports = router
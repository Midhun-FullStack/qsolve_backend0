const express = require("express") 
router = express.Router()
const {createBundle
} =require("../../controller/bundleController")

router.get("/", (req, res) => {
    res.send("bundle API is running...")
})
router.post("/create",createBundle)




module.exports = router
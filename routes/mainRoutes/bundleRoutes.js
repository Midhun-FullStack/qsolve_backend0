const express = require("express") 
router = express.Router()
const bundle =require("../../controller/bundleController")

router.get("/", (req, res) => {
    res.send("bundle API is running...")
})
router.post("/create",bundle.createBundle)
router.get('/',bundle.getAllBundle)
router.post("/byDepartment",bundle.getBundleByDepartment)

module.exports = router
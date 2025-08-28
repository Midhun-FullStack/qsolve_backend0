const express = require("express") 
router = express.Router()
const bundle =require("../../controller/bundleController")


router.get('/',bundle.getAllBundle)
router.get("/byDepartment",bundle.getBundleByDepartment)








module.exports = router
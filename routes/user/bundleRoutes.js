const express = require("express") 
router = express.Router()
const {getAllBundle,getBundleByDepartment,getSubjectByDepartment
} =require("../../controller/bundleController")


router.get('/',getAllBundle)
router.get("/byDepartment",getBundleByDepartment)








module.exports = router
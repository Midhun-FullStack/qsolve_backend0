const express = require("express") 
router = express.Router()
const {createBundle
} =require("../../controller/bundleController")


router.post("/create",createBundle)




module.exports = router
const express = require("express") 
router = express.Router()
const {createDepartment
} =require("../../controller/deparmentController")

router.post("/",createDepartment)



module.exports = router
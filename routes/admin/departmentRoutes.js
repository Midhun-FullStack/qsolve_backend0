const express = require("express") 
router = express.Router()
const {createDepartment
} =require("../../controller/deparmentController")

router.post("/create",createDepartment)



module.exports = router
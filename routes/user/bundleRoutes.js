const express = require("express") 
router = express.Router()
const bundle =require("../../controller/bundleController")


router.get('/',bundle.getAllBundle)
router.post("/byDepartment",bundle.getBundleByDepartment)








module.exports = router
// "departmentID":"68b16361e5ec773a722a4c2c",
//     "price":200,
//     "products":[
        
//             "68b6fa2df4de62fce6bdef79",
//             "68b6facd897af63da47246d6"
        
//     ]
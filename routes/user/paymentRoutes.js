const { confirmPayment } = require("../../controller/paymentController");
const express = require("express") 
router = express.Router()

router.post("/confirm-payment", authenticateUser, confirmPayment);
module.exports = router
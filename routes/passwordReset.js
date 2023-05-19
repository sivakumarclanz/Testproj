const express = require("express");
const router = express.Router();
const checkReq = require("../middlewares/validate");
const { sendOTP, verifyOTP } = require("../controllers/passwordReset");
const { sendOTPPOST, verifyOTPPOST } = require("../schemas/passwordReset");

router.post("/passwordReset",checkReq(sendOTPPOST, "body"),  sendOTP);
router.post("/verifyOTP", checkReq(verifyOTPPOST, "body"), verifyOTP);
// checkReq(sendOTPPOST, "body"),
module.exports = router;

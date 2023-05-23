const express = require("express");
const router = express.Router();
const { accfields } = require("../schemas/account");
const { account } = require("../controllers/account");


// router.post("/addproperty",checkReq(addfields, "body"),  addproperty);

router.post('/account', account);
// router.use(express.static("public"));



module.exports = router;

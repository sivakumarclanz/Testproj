const express = require("express");
const router = express.Router();
const { accfields } = require("../schemas/account");
const { agreement } = require("../controllers/aggrement");
const agreementSchema = require("../models/aggrement");



router.post('/agreement', agreement);



module.exports = router;

const express = require("express");
const router = express.Router();
const { rentalagreement } = require("../controllers/Rentalagreement");



router.post('/rentalagreement', rentalagreement);



module.exports = router;

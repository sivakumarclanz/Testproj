const express = require("express");
const router = express.Router();
const checkReq = require("../middlewares/validate");
const { addfields } = require("../schemas/addproperty");
const { addtenant } = require("../controllers/addtenant");
const multiparty =require("multiparty");


// router.post("/addproperty",checkReq(addfields, "body"),  addproperty);

router.post('/addtenant', addtenant);
// router.use(express.static("public"));



module.exports = router;

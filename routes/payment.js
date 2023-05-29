const express = require("express");
const router = express.Router();
const checkReq = require("../middlewares/validate");
const { payment } = require("../schemas/payment");
const paymentprocess = require("../controllers/payment");


router.post('/paymentprocess', paymentprocess);
// router.use(express.static("public"));

// router.get('/', (req,res)=>{
//     console.log("Home..")
//     res.send("Home page")
// });


module.exports = router;

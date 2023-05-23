const express = require("express");
const router = express.Router();
const checkReq = require("../middlewares/validate");
const { addfields } = require("../schemas/addproperty");
const { addproperty } = require("../controllers/addproperty");
const multiparty =require("multiparty")
const IMAGE_UPLOAD_DIR = "./public/image"


router.post('/addproperty', addproperty);
router.use(express.static("public"));

router.get('/', (req,res)=>{
    console.log("Home..")
    res.send("Home page")
});


module.exports = router;

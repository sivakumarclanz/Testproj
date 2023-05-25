const express = require("express");
const router = express.Router();
const checkReq = require("../middlewares/validate");
const { addfields } = require("../schemas/fileupload");
const { fileupload } = require("../controllers/fileupload");
const multiparty =require("multiparty")
const IMAGE_UPLOAD_DIR = "./public/image"


router.post('/fileupload', fileupload);
// router.use(express.static("public"));



module.exports = router;


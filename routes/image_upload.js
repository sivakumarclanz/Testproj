const express = require("express");
const router = express.Router();
const checkReq = require("../middlewares/validate");
// const { imagefields } = require("../schemas/image_upload");
const { up,up1 } = require("../controllers/image_upload");

// router.post("/upload",  up,up1);
router.post("/upload", up);

// ,checkReq(imagefields, "body")
module.exports = router;

const express = require("express");
const checkReq = require("../middlewares/validate");
const router = express.Router();
const { signUp, signIn } = require("../controllers/user");
const { registerPOST } = require("../schemas/user");
const verifyToken = require("../middlewares/verify.token");


router.post("/signUp", checkReq(registerPOST, "body"), signUp);

//Get all Method
router.post("/signIn", signIn);


router.get('/protected', verifyToken, (req, res) => {
    console.log(req.user.userId);

    res.json({ success: true, message: 'Access granted to protected route' });
    
  });

module.exports = router;

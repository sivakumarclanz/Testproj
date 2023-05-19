const sendEmail = require("../utils/sendEmail");
const logger = require("../helpers/logger");
const bcryptjs = require("bcryptjs");
const { Token, User } = require("../models");
// const otpGenerator = require("otp-generator");

const otpGenerator = require("otp-generator");

const sendOTP = async (req, res) => {
  logger.info("OTP Send To Your Email Account");
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email doesn't exist");

    // Generate OTP
    const otp = otpGenerator.generate(6, {
      digits: true,
      specialChars: false,
    });
    
    const token = await Token.findOne({ user_id: user._id });
    if (token) {token.otp = otp;
      token.expiry = new Date(new Date().getTime() + 10 * 60 * 1000); //  10 minutes
      await token.save();
    } else {
      await new Token({
        user_id: user._id,
        otp: otp,
        expiry: new Date(new Date().getTime() + 10 * 60 * 1000), //  10 minutes
      }).save();
    }

    await sendEmail(
      user.email,
      "Password Reset OTP | Employee Portal",
      `Your OTP is ${otp}`
    );

    res.send("OTP sent to your email account");
  } catch (error) {
    res.status(500).send("An error occurred");
    console.log(error);
  }
};

const verifyOTP = async (req, res) => {
  logger.info("OTP Verification");
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).send("User with given email doesn't exist");

    const token = await Token.findOne({ user_id: user._id, otp: req.body.otp });
    if (!token) return res.status(400).send("Invalid OTP");

    if (token.expiry < new Date()) {
      await token.deleteOne();
      return res.status(400).send("OTP has expired");
    }
    user.password = await bcryptjs.hash(req.body.password, 10);
    await user.save();

    await token.deleteOne();

    res.send("OTP verified and password changed successfully");
  } catch (error) {
    res.status(500).send("An error occurred");
    console.log(error);
  }
};

module.exports = {
  sendOTP,
  verifyOTP,
};

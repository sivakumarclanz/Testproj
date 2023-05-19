const { success, error } = require("../helpers/response");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const Joi = require("joi");
const logger = require("../helpers/logger");
const bcryptjs = require("bcryptjs");
const { Token, User } = require("../models");

const createNewPassword = async (req, res) => {
  logger.info("Password Link Sent");
  try {
    const schema = Joi.object({ email: Joi.string().email().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).send("user with given email doesn't exist");

    let token = await Token.findOne({ user_id: user._id });
    if (!token) {
      token = await new Token({
        user_id: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
    await sendEmail(user.email, "Password reset", link);

    res.send("Password reset link sent to your email account");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
};

const createNewPasswordById = async (req, res) => {
  logger.info("Password created");
  try {
    const schema = Joi.object({ password: Joi.string().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    const user = await User.findById(req.params.user_id);
    if (!user) return res.status(400).send("invalid link or expired");
    console.log("test", user);
    console.log("test1", req.params.token);
    console.log("test2", user._id);
    const token = await Token.findOne({
      user_id: user._id,
      token: req.params.token,
    });
    console.log("test1", token);
    if (!token) return res.status(400).send("Invalid link or expired");

    user.password = await bcryptjs.hash(req.body.password, 10);
    await user.save();
    await token.deleteOne();

    res.send("password reset sucessfully.");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
};

module.exports = {createNewPassword,createNewPasswordById,};

const logger = require("../helpers/logger");
const { success, error } = require("../helpers/response");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { getAccessToken } = require("../helpers/token");

// Signup

const signUp = async (req, res) => {
    try {
      const { userName, email, password, confirmPassword } = req.body;
  
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = new User({
        userName,
        email,
        password: hashedPassword,
        confirmPassword: hashedPassword,
      });

      const result = await user.save();
      logger.info("User created");
      res.status(200).json(success("CREATED", result, req.status));
    } catch (err) {
      logger.error(err.message);
      res.status(500).json(error(err.message, res.statusCode));
    }
  };



//   SignIn


const signIn = async (req, res) => {
    logger.info("signin called");
    try {
      let result = await User.findOne({ email: req.body.email });
      console.log(result);
      console.log("result1", req.body.password);
      console.log("result2", result.password);
      if (result && bcrypt.compareSync(req.body.password, result.password)) {
        let token = getAccessToken(result);
        console.log("result3", token);
        let output = {};
  
        output._id = result._id;
        output.email = result.email;
        output.token = token;
        console.log("result4", output);
        res.status(200).json(success("OK", output, res.statusCode));
      } else {
        res.status(401).json(error("unautherized", res.statusCode));
      }
    } catch (err) {
      logger.error(err.message);
      res.status(500).json(error(err.message, res.statusCode));
    }

    res.cookie('token', token, { httpOnly: true });

  };
  
  module.exports = {
    signUp,
    signIn,
  };
  
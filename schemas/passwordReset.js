// schemas.js
const Joi = require("joi");
const schemas = {
  verifyOTPPOST: Joi.object({
    email: Joi.string().email().required(),
    otp: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
module.exports = schemas;



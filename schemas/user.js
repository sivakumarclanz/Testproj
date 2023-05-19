const Joi = require("joi");
const schemas = {
  registerPOST: Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
  }),


};
module.exports = schemas;

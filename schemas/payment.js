
// schemas.js
const Joi = require("joi");
const schemas = {

    amount: Joi.string().required(),
    currency: Joi.string().required(),
    receipt: Joi.string().required(),
    notes: Joi.string().required(),
    

  };
module.exports = schemas;

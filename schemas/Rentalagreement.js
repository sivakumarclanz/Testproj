
// schemas.js
const Joi = require("joi");
const schemas = {
    // Rentalagreement,

    Name: Joi.string().required(),
    StateDateofexcution: Joi.string().required(),
    Phonenumber: Joi.string().required(),
    Rentalperiod: Joi.string().required(),
    Email: Joi.string().required(),
    Monthlyrent: Joi.string().required(),
        
  };
module.exports = schemas;

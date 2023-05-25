const Joi = require("joi");
const schemas = {
  //  imagefields: Joi.object({
    Propertytype: Joi.string().required(),
    Rentalagreementfile: Joi.string().required(),
    
  }

module.exports = schemas;

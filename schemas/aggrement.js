
// schemas.js
const Joi = require("joi");
const schemas = {

    city: Joi.string().required(),
    State: Joi.string().required(),
    Ondate: Joi.string().required(),
    name: Joi.string().required(),
    Father_name: Joi.string().required(),
    Address_line1: Joi.string().required(),
    Address_line2: Joi.string().required(),
    city: Joi.string().required(),
    State: Joi.string().required(),
    Pincode: Joi.string().required(),
    Bedroom: Joi.string().required(),
    Bathroom: Joi.string().required(),
    parking: Joi.string().required(),
    Sqfeet: Joi.string().required(),
    final_rent: Joi.string().required(),
    final_advance: Joi.string().required(),
    agreementduration: Joi.string().required(),
    final_maintenance: Joi.string().required(),
    availableform: Joi.string().required(),
    Address_line1: Joi.string().required(),
    Address_line2: Joi.string().required(),
    city: Joi.string().required(),
    State: Joi.string().required(),
    Pincode: Joi.string().required(),
    EBNumber: Joi.string().required(),

    // Image: Joi.string().required(),
    
  };
module.exports = schemas;

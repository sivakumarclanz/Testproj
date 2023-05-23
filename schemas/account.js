
// schemas.js
const Joi = require("joi");
const schemas = {

    Rentalaccount: Joi.string().required(),
    Advanceaccount: Joi.string().required(),
    Maintenanceaccount: Joi.string().required(),
    EBaccount: Joi.string().required(),
    
        
  };
module.exports = schemas;

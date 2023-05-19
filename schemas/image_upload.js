const Joi = require("joi");
const schemas = {
   imagefields: Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    
  }),
};
module.exports = schemas;

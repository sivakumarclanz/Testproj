
// schemas.js
const Joi = require("joi");
const schemas = {

    Name: Joi.string().required(),
    Email_ID: Joi.string().required(),
    Mobile_number: Joi.string().required(),
    Father_name: Joi.string().required(),
    Address_line1: Joi.string().required(),
    Address_line2: Joi.string().required(),
    city: Joi.string().required(),
    State: Joi.string().required(),
    Pincode: Joi.string().required(),
};
module.exports = schemas;

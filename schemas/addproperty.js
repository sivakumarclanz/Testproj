
// schemas.js
const Joi = require("joi");
const schemas = {

    Add_flat: Joi.string().required(),
    Distance_radius: Joi.string().required(),
    Property_type: Joi.string().required(),
    Bedroom: Joi.string().required(),
    Bathroom: Joi.string().required(),
    Furnish_type: Joi.string().required(),
    Tenant_type: Joi.string().required(),
    Parking: Joi.string().required(),
    Amenities: Joi.string().required(),
    Price_Range: Joi.string().required(),
    Property_Description: Joi.string().required(),
    Property_age: Joi.string().required(),
    Agreement_Duration: Joi.string().required(),
    Available_form: Joi.string().required(),
    Monthly_rent: Joi.string().required(),
    Advance_Amount: Joi.string().required(),
    Maintenance_charge: Joi.string().required(),
    Area_size: Joi.string().required(),
    Contact_no: Joi.string().required(),
    Due_date: Joi.string().required(),
    Frequency: Joi.string().required(),
    Image: Joi.string().required(),
    
  };
module.exports = schemas;

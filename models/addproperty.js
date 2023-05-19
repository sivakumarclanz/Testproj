const mongoose = require("mongoose");
const { Schema } = mongoose;
const addSchema = new mongoose.Schema({


  // user_id: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User",
  //   index: true,
  // }, 
  Add_flat: {
    type: String,
    required: true,
  },
  Distance_radius: {
    type: String,
    required: true,
  },
  Property_type: {
    type: String,
    required: true,
  },
  Bedroom: {
    type: String,
    required: true,
  },

  Bathroom: {
    type: String,
    required: true,
  },
  Furnish_type: {
    type: String,
    required: true,
  },
  Tenant_type: {
    type: String,
    required: true,
  },
  Parking: {
    type: String,
    required: true,
  },
  Amenities: {
    type: String,
    required: true,
  },

  Price_Range: {
    type: String,
    required: true,
  },
  Property_Description: {
    type: String,
    required: true,
  },

  Property_age: {
    type: String,
    required: true,
  },
  Agreement_Duration: {
    type: String,
    required: true,
  },
    Available_form: {
    type: String,
    required: true,
  },
  Monthly_rent: {
    type: String,
    required: true,
  },
  Advance_Amount: {
    type: String,
    required: true,
  },
  Maintenance_charge: {
    type: String,
    required: true,
  },
  Area_size: {
    type: String,
    required: true,
  },
  Contact_no: {
    type: String,
    required: true,
  },

  Due_date: {
    type: String,
    required: true,
  },

  Frequency:{
    type: String,
    required: true,
  },

  image:{
    type:String,
  }

});

module.exports = addSchema;

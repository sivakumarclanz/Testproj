const mongoose = require("mongoose");
const { Schema } = mongoose;
const tenantSchema = new mongoose.Schema({


//   user_id: {
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref: "User",
//     index: true,
//   }, 
  Name: {
    type: String,
    required: true,
  },

  Email_ID: {
    type: String,
    required: true,
  },

  Mobile_number: {
    type: String,
    required: true,
  },

  Father_name: {
    type: String,
    required: true,
  },
  
  Address_line1: {
    type: String,
    required: true,
  },

  Address_line2: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

 State: {
    type: String,
    required: true,
  },

Pincode: {
    type: String,
    required: true,
  },


});

module.exports = tenantSchema;

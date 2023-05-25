const mongoose = require("mongoose");
const { Schema } = mongoose;
const agreementSchema = new mongoose.Schema({


//   user_id: {
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref: "User",
//     index: true,
//   },     
  city: {
    type: String,
    required: true,
  },

  State: {
    type: String,
    required: true,
  },

  Ondate: {
    type: String,
    required: true,
  },

  name: {
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

  Bedroom: {
    type: String,
    required: true,
  },

    Bathroom: {
    type: String,
    required: true,
  },


  parking: {
    type: String,
    required: true,
  },

    Sqfeet: {
    type: String,
    required: true,
  },


  final_rent: {
    type: String,
    required: true,
  },

  final_advance: {
    type: String,
    required: true,
  },


  agreementduration: {
    type: String,
    required: true,
  },

  final_maintenance: {
    type: String,
    required: true,
  },

  availableform: {
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

  EBNumber: {
    type: String,
    required: true,
  },


});

module.exports = agreementSchema;

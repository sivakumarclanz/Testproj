const mongoose = require("mongoose");
const { Schema } = mongoose;
const rentalagreementSchema = new mongoose.Schema({


//   user_id: {
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref: "User",
//     index: true,
//   },     

//     Rentalagreement: {
//     type: String,
//     required: false,
//   },

  Name: {
    type: String,
    required: true,
  },

  Dateofexcution: {
    type: String,
    required: true,
  },

  Phonenumber: {
    type: String,
    required: true,
  },

  Rentalperiod: {
    type: String,
    required: true,
  },
  

  Email: {
    type: String,
    required: true,
  },

  Monthlyrent: {
    type: String,
    required: true,
  },

});

module.exports = rentalagreementSchema;

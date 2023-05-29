const mongoose = require("mongoose");
const { Schema } = mongoose;
const paymentSchema = new mongoose.Schema({


//   user_id: {
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref: "User",
//     index: true,
//   }, 
  amount: {
    type: String,
    required: true,
  },

  currency: {
    type: String,
    required: true,
  },

  receipt: {
    type: String,
    required: true,
  },

    notes: {
    type: String,
    required: true,
  },
  

});

module.exports = paymentSchema;

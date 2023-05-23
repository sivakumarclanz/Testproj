const mongoose = require("mongoose");
const { Schema } = mongoose;
const accountSchema = new mongoose.Schema({


//   user_id: {
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref: "User",
//     index: true,
//   }, 
  Rentalaccount: {
    type: String,
    required: true,
  },

  Advanceaccount: {
    type: String,
    required: true,
  },

  Maintenanceaccount: {
    type: String,
    required: true,
  },

  EBaccount: {
    type: String,
    required: true,
  },
  
  // EBsd: {
  //   type: String,
  //   required: true,
  // },
  

});

module.exports = accountSchema;

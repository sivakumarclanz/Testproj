const mongoose = require("mongoose");
const { Schema } = mongoose;
const fileSchema = new mongoose.Schema({


  // user_id: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User",
  //   index: true,
  // }, 
  Propertytype: {
    type: String,
    required: true,
  },

  Rentalagreementfile: {
    type: String,
    required: true,
  },

});

module.exports = fileSchema;

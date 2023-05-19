const mongoose = require("mongoose");
const { Schema } = mongoose;
const imageSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    image:{
        data:Buffer,
        contentType: String
    }
})
module.exports = imageSchema;

const mongoose = require("mongoose");

const userSchema = require("./user");
const tokenSchema = require("./token");
const addSchema = require("./addproperty");
const imageSchema = require("./image_upload");

const User = mongoose.model("User", userSchema);
const Token = mongoose.model("Token", tokenSchema);
const addfield = mongoose.model("addfield", addSchema);
const imagefield = mongoose.model("imagefield", imageSchema);


module.exports = {
  User,
  Token,
  addfield,
  imagefield,
};

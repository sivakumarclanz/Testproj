const mongoose = require("mongoose");

const userSchema = require("./user");
const tokenSchema = require("./token");
const addSchema = require("./addproperty");
const imageSchema = require("./image_upload");
const tenantSchema = require("./addtenant");
const accountSchema = require("./account");
const agreementSchema = require("./aggrement");
const rentalagreementSchema = require("./Rentalagreement");
const fileSchema = require("./fileupload");
const paymentSchema = require("./payment");



const User = mongoose.model("User", userSchema);
const Token = mongoose.model("Token", tokenSchema);
const addfield = mongoose.model("addfield", addSchema);
const imagefield = mongoose.model("imagefield", imageSchema);
const tenantfield = mongoose.model("tenantfield", tenantSchema);
const accountfield = mongoose.model("accountfield", accountSchema);
const agreementfield = mongoose.model("agreementfield", agreementSchema);
const rentalagreementfield = mongoose.model("rentalagreementfield", rentalagreementSchema );
const filefield = mongoose.model("filefield", fileSchema );
const paymentfield = mongoose.model("paymentfield", paymentSchema );

module.exports = {
  User,
  Token,
  addfield,
  imagefield,
  tenantfield,
  accountfield,
  agreementfield,
  rentalagreementfield,
  filefield,
  paymentfield,
};

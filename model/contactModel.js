const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: String,
  number: String
});

const contactModel = mongoose.model("contacts", contactSchema);

module.exports = contactModel;

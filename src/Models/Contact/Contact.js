const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  email: { type: String, required: true },
  phoneNo: { type: String, required: true },
  countryCode: { type: String },
  message: { type: String, default: "Request for Contact" },
  formType: { type: String, required: true, enum: ["contact", "Sales"] },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

module.exports = Contact;

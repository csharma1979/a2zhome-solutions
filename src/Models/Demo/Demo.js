const mongoose = require("mongoose");

const demoFormSchema = new mongoose.Schema({
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  email: { type: String, required: true },
  companyName: { type: String },
  phoneNo: { type: String, required: true },
  countryCode: { type: String },
  message: { type: String, default: "Request for Demo" },
  formType: { type: String, required: true, enum: ["demo", "Sales"] },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const DemoForm =
  mongoose.models.DemoForm || mongoose.model("DemoForm", demoFormSchema);

module.exports = DemoForm;

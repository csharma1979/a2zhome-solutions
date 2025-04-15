const mongoose = require("mongoose");

const identitySchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true, // Ensure that the email is unique
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Identity || mongoose.model("Identity", identitySchema);
//module.exports = mongoose.model("Identity", identitySchema);

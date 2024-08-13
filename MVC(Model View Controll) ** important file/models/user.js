const mongoose = require("mongoose");
// creating Schema for creating the model
const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String, // Correcting type to String
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"], // Optional regex for basic email validation
  },
  gender: { type: String },
  job_title: { type: String },
});

// creating model
const users = mongoose.model("user", userSchema);

module.exports = users;

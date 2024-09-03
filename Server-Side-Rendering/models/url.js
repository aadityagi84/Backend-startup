const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true, // Ensures each shortId is unique
    },
    redirectUrl: {
      type: String,
      required: true, // Ensures a redirect URL is always provided
    },
    visitHistory: [
      {
        timestamp: { type: Date, default: Date.now }, // Stores each visit as a Date object
      },
    ],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create the model from the schema
const url = mongoose.model("url", urlSchema);

module.exports = {
  url, // Export the model with a capital 'U' for consistency
};

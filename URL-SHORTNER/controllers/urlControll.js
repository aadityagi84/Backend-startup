// const { nanoid } = require("nanoid");
const shortid = require("shortid"); // Corrected the variable name to avoid conflict
// inserting data base from models
const { url } = require("../models/url");

// controllers/urlControll.js

// Function to handle generating a new short URL
async function handleGenrateNewShortURl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  const shortID = shortid.generate(); // Generate a short ID
  await url.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

// Function to handle retrieving the original URL and redirecting
async function handleGetShortUrl(req, res) {
  const shortID = req.params.shortID;

  try {
    const entry = await url.findOneAndUpdate(
      { shortId: shortID },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
      { new: true } // Return the updated document
    );

    if (!entry) {
      return res.status(404).json({ error: "URL not found" });
    }

    res.redirect(entry.redirectUrl);
  } catch (error) {
    console.error("Error during database operation:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleGetAnalytics(req, res) {
  const shortID = req.params.shortID;
  const result = await url.findOne({ shortID });
  res.json({
    totalclicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenrateNewShortURl,
  handleGetShortUrl,
  handleGetAnalytics, // Export the new function
};

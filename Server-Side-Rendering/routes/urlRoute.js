const express = require("express");
const router = express.Router();

const {
  handleGenrateNewShortURl,
  handleGetShortUrl,
  handleGetAnalytics,
} = require("../controllers/urlControll");

// POST route for creating a new short URL
router.post("/", handleGenrateNewShortURl);

// GET route for retrieving the original URL using the shortID
router.get("/:shortID", handleGetShortUrl);
router.get("/analytics/:shortID", handleGetAnalytics);

module.exports = router; // Export the router directly

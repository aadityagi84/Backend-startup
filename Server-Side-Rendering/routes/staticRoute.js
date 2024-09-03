const express = require("express");
const router = express.Router();

// Define a route for the home page
router.get("/", (req, res) => {
  return res.render("home");
});

// Export the router
module.exports = router;

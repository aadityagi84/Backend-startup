const express = require("express");
const app = express();
const PORT = 8001;
// const { url } = require("./models/url");
const { connectToMongoDB } = require("./mongoConnect");
const urlRoute = require("./routes/urlRoute");

// Middleware to parse JSON :: to do incoming bodies parse

app.use(express.json());
// MongoDB connection
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

app.use("/url", urlRoute);

// now create how many user will be comes on my websites and how many hits will be setuped
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

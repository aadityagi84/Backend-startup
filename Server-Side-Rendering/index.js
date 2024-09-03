const express = require("express");
const app = express();
const path = require("path");
const PORT = 8001;
const { url } = require("./models/url");
const { connectToMongoDB } = require("./mongoConnect");
const urlRoute = require("./routes/urlRoute");
const staticRoutes = require("./routes/staticRoutes");
// Middleware to parse JSON :: to do incoming bodies parse

app.use(express.json());
// form data ko parse krne ke liye ik middle ware or chye
app.use(express.urlencoded({ extended: false }));
// now use ejs in nodejs
app.set("view engine", "ejs");
// now give the path of the over ejs file to our code to give the path of our code we will use path module which will be inbuild in nodejs
app.set("views", path.resolve("./views"));

// MongoDB connection
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

app.use("/url", urlRoute);
app.use("/", staticRoutes);
app.get("/test", async (req, res) => {
  // old method
  // try {
  // Await the promise returned by url.find({})
  const allUrl = await url.find({});

  // Use res.send to send the HTML response
  //   res.send(`
  //     <html>
  //       <head>
  //         <title>Server Side Rendering</title>
  //       </head>
  //       <body>
  //         <ul>
  //           ${allUrl
  //             .map(
  //               (url) =>
  //                 `<li>${url.shortId} - ${url.visitHistory.length} - ${url.redirectUrl}</li>`
  //             )
  //             .join("")}
  //         </ul>
  //       </body>
  //     </html>
  //   `);
  // } catch (error) {
  //   // Handle any errors that might occur
  //   res.status(500).send("Internal Server Error");
  // }

  // using ejs
  res.render("home", {
    urls: allUrl,
  });
});

// now create how many user will be comes on my websites and how many hits will be setuped
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

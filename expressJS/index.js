// const http = require("http");
const PORT = 8080;
const express = require("express");

const app = express();
// this app will be a handler function in which we can use all of the methoda of HTTP not will be needed  to create http server

app.get("/", (req, res) => {
  res.end("welcome to home page ");
});
app.get("/about", (req, res) => {
  res.end(
    "welcome to about page " +
      "hey you are" +
      req.query.name +
      "and your's id " +
      req.query.id
  );
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// const myserver = http.createServer(app);
// myserver.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}`);
// });

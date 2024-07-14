// this file and code will be use to create server using nodejs and store the value how many times will be  user visit your server and store their date and time also and set some basic routing

const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const timestamp = Date.now();
  const date = new Date(timestamp);
  const istDate = date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  fs.appendFile("log.txt", istDate, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("hello your server will be on home page ");
        break;
      case "/about":
        res.end("your serever goes s a long ");
        break;
      default:
        res.end("404 ");
    }
  });
  console.log("new request arrived");
});

const port = 3000;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

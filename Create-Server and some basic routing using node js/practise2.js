const http = require("http");
const server = http.createServer((req, res) => {
  console.log("server is running");
  res.end("server will be setup baby");
});
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`server is running on port  http://localhost:${PORT}`);
});

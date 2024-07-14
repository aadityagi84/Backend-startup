// // /to create a requesting server using node js and ruj sum steps or server

// const http = require("http");
// // jo create http ka module vo ik call back function leta h jisme vo kuch argument pass karata h  for example ,means taki ye daily upcoming request ko proses ko complete krne ke liye
// const server = http.createServer((req, res) => {
//   console.log("new req server");
//   res.end("Hello from Server");
// });
// //isme jo req paramenter h vo ye sure kre ga ki user ne kis ip address se data call kiya h ,or etc
// // or jo res h vo jo usner ne request send ki h uska response kre ga
// server.listen(8000, () => {
//   console.log(`server is running on port http://localhost:8000`);
// });
// //to run the file on server you can set the port of first of all and the port is the door, like jese ik house or us house me bhoot sare door h to mujhse kis door pr ye server run krna h like, 3000 , 8000 and more
const http = require("http");

// Create an HTTP server

// now discuss about headers what is header header is a such imformation about user like user ip address ,connection information and many more
// now we can see the header information of user by using req.headers
const server = http.createServer((req, res) => {
  const requ = req.headers;
  console.log("new req server:", requ);
  res.end("Hello from Server");
});
// Start the server on port 8000
server.listen(8000, () => {
  console.log(`server is running on port http://localhost:8000`);
});

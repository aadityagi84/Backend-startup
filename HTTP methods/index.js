// their are many types of http methods are-----
// GET
// POST
// PUT
// PATCH
// DELETE

// get :: when you want to get some data from the server
// /Let start start some basic details like  fisrt of all you will install the npm <PKG> modules all of these and then, import url and many of queries

const http = require("http");
const fs = require("fs");
const url = require("url");
const PORT = 8000;

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const myurl = url.parse(req.url, true);
  const log = `${Date.now()}:${req.method}:${req.url} new request arrived\n`;
  //   console.log(myurl);
  // .after seeking the method of browers using the (req.method )  syntax we will known that the browser willbe take the "GET" http method  request as default , if the user fill the form and any other else it will be take "POST "

  fs.appendFile("httpinfo.txt", log, (err) => {
    if (err) {
      console.log(err);
    } else {
      switch (myurl.pathname) {
        case "/":
          if (req.method === "GET") return res.end("WElcome to home page ");
          break;
        case "/about":
          res.end("welcome to about page ");
          break;
        case "/signup":
          if (req.method === "POST")
            //  Data base queries

            res.end("succes form fill up ");
          else if (req.method === "GET")
            return res.end("welcome user fill yor detil");
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

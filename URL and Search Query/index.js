// URl :::: Uniform Resource  Locator
const http = require("http");
const fs = require("fs");
// here be a method  to user url inside the  search bar and using query and all of thinks
const url = require("url");
const Port = 8000;
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}:${req.url} New request recived`;
  // now we check the query parameter ,what is ,where he will be defiend,
  // now we can see that pasre method gives us more types of functionality let we can pass them true in side the parse method

  const myUrl = url.parse(req.url, true);
  // after passing the true parameter inside the parse ethod restart the server and  we will check the
  // their will  gives query, and this query will be passed by the user like for example:::===about?myname=aadi&userid=1
  console.log(myUrl);
  fs.appendFile("urlinfo.txt", `${log}\n`, (err, data) => {
    // to using in advance way the url method will be are we can write some keys  we can pass the myurl .pathname in the paramenter of basic routing are is that

    switch (myUrl.pathname) {
      case "/":
        res.end("homepage ");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`this is about page and welcome ${username}`);
        break;
      case "/search":
        // here be a method and way to user search query in node js

        const search = myUrl.query.search_query;
        res.end(`there will a your result for search ${search}`);

        break;
      default:
        res.end("404 page not found");
    }
  });
});
server.listen(Port, () => {
  console.log(`server is running on port http://localhost:${Port}`);
});

// now install the url page using npm i url   --- the node modules will be install

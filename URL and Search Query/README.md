for using the url metthods firts of all you will create a index file and then, <br>
. type a commant npm init -y in terminal and write <br><br><br><br>
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index"
  },
<br><br><br>
  <br>
  this lines in tha <pkg>.json file and then write some code <br>
  install the npm of url using the commant <b>npm i url </b> in terminal and <br>
  here be a full file code <br><br><br>
  <p>
    // URl :::: Uniform Resource  Locator
const http = require("http");<br>
const fs = require("fs");<br>
// here be a method  to user url inside the  search bar and using query and all of thinks
const url = require("url");<br>
const Port = 8000;<br>
const server = http.createServer((req, res) => {<br>
  if (req.url === "/favicon.ico") return res.end();<br>
  const log = `${Date.now()}:${req.url} New request recived`;<br>
  // now we check the query parameter ,what is ,where he will be defiend,<br>
  // now we can see that pasre method gives us more types of functionality let we can pass them true in side the parse method

  const myUrl = url.parse(req.url, true);<br>
  // after passing the true parameter inside the parse ethod restart the server and  we will check the
  // their will  gives query, and this query will be passed by the user like for example:::===about?myname=aadi&userid=1
  console.log(myUrl);<br>
  fs.appendFile("urlinfo.txt", `${log}\n`, (err, data) => {<br>
    // to using in advance way the url method will be are we can write some keys  we can pass the myurl .pathname in the paramenter of basic routing are is that

    switch (myUrl.pathname) {<br>
      case "/":
        res.end("homepage ");<br>
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
<br>
// now install the url page using npm i url   --- the node modules will be install

  </p>

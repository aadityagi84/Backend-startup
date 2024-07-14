<h3>here be creating a server using node js and clear some basic concept of routing using nodejs</h3>
<h6>!!! here be also a feture to store the user req  of visiting the server </h6> and their be a some code 
// this file and code will be use to create server using nodejs and store the value how many times will be  user visit your server and store their date and time also and set some basic routing
<br><br>

const http = require("http"); <br>
const fs = require("fs");<br>
const server = http.createServer((req, res) => {<br>
  const timestamp = Date.now();<br>
  const date = new Date(timestamp);<br>
  const istDate = date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });<br>

  fs.appendFile("log.txt", istDate, (err, data) => {<br>
    switch (req.url) {<br>
      case "/":<br>
        res.end("hello your server will be on home page ");<br>
        break;<br>
      case "/about":<br>
        res.end("your serever goes s a long ");<br>
        break;<br>
      default:<br>
        res.end("404 ");<br>
    }<br>
  });<br>
  console.log("new request arrived");<br>
});<br>

const port = 3000;<br>
server.listen(port, () => {<br>
  console.log(`http://localhost:${port}`);<br>
});<br>

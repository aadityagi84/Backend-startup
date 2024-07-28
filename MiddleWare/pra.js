// const express = require("express");
// const app = express();
// const PORT = 3000;
// const fs = require("fs");
// const user = require("./MOCK_DATA.json");

// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json()); // Add this middleware to parse JSON bodies

// app.get("/api/user", (req, res) => {
//   res.send(user);
// });

// app
//   .route("/api/user/:id")
//   .get((req, res) => {
//     console.log(user);
//     res.json(user[req.params.id]);
//   })
//   .patch((req, res) => {
//     return res.json({ status: "success" });
//     res.json({ id: user.id });
//   });

// app.post("/api/user", (req, res) => {
//   const newUser = req.body;
//   newUser.id = user.length + 1;
//   user.push({ newUser });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(user), (err) => {
//     console.log(err);
//     if (err) {
//       return res.status(500).json({ error: "Failed to write data" });
//     }
//     return res.json({ status: "success", id: user.length });
//   });
// });

// // for frontent user

// // const html = `<ul>
// //   ${user
// //     .map((use, index) => `<li key="${index}"> ${use.first_name} </li>`)
// //     .join("")}
// // </ul>`;

// // BASICALLY middleware will be use to perform the input and outpu method in data fetching  like or in ther words [[middleware is used to handle and process incoming requests in your Express application.
// //  Middleware functions are executed in the order they are added to the app and can modify the request and response objects, terminate the request-response cycle, and pass control to the next middleware function.]]

// // for example like ="Parsing JSON Data for POST Requests:","Parsing JSON Data for PUT and PATCH Requests:"
// // and here be a some basic code to handle the data of middleware will be are ::::// Middleware to parse URL-encoded data

// // ==============================================================================================
// // app.use(express.urlencoded({ extended: false }));

// // // Middleware to parse JSON bodies
// // app.use(express.json());

// // These middleware functions are necessary for your application to properly handle and parse incoming data from client requests, especially when dealing with APIs that accept and return JSON data.
// // ======================================================================================

// app.get("/user", (req, res) => {
//   res.send(html);
// });

// app.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}`);
// });

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Middleware to parse JSON bodies
let users = require("./MOCK_DATA.json");
// Route to get all users
app.get("/api/user", (req, res) => {
  res.json(users);
});

// Route to get a user by ID
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  })
  .patch((req, res) => {
    var updateObject = req.body;
    var id = req.params.id;
    res.json({ _id: ObjectId(id) }, { $set: updateObject });
    console.log("hello");
  });

// Route to add a new user
app.post("/api/user", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  fs.writeFile(
    path.join(__dirname, "MOCK_DATA.json"),
    JSON.stringify(users, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to write data" });
      }
      res.json({ status: "success", id: newUser.id });
    }
  );
  console.log("New user ID:", newUser.id);
});

// Route to render users as HTML
app.get("/user", (req, res) => {
  const html = `<ul>
    ${users
      .map((user, index) => `<li key="${index}">${user.first_name}</li>`)
      .join("")}
  </ul>`;
  res.send(html);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

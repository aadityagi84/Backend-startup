const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 8080;
const users = require("./MOCK_DATA.json");
const usersPath = "./MOCK_DATA.json";
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/api/users", (req, res) => {
  res.json(users);
});
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ msg: "invalid id" });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  })
  .post((req, res) => {
    const id = Number(req.params.id);
    const { first_name, last_name, gender } = req.body; // Assuming these are the fields you want to update

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      // Update the user details
      users[userIndex] = {
        ...users[userIndex],
        first_name: first_name || users[userIndex].first_name,
        last_name: last_name || users[userIndex].last_name,
        gender: gender || users[userIndex].gender,
      };
      fs.writeFile(usersPath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
          return res.status(500).json({ error: "Failed to write data" });
        }
        res.json(users[userIndex]);
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  // their will be authantication for all of the fields are  required to full fill the details in the above section
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.gender ||
    !body.email
  ) {
    res.status(400).json({ msg: "all field are required" });
  }
  const newId = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = { ...body, id: newId };
  users.push(newUser);
  fs.writeFile(usersPath, JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to write data" });
    }
    return res.status(201).json({ status: "success", id: newUser.id });
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
// NOw one twist will be come to , its twist is will be ::=== when user will update the code then the major cause will be the server will be start and stop continiously and start again and again to solve this problem we will install the npm pkg

// npm i nodemon
//

// Nodemon is a development tool that automatically restarts a Node.js application when file changes in the directory are detected. It helps streamline the development process by eliminating the need to manually stop and restart the server every time code changes are made. Here are some key features:

// Automatic Restarts: Monitors your project files and restarts the server whenever it detects changes.
// Easy Integration: Simple to install and use, typically with a command like nodemon app.js instead of node app.js.
// Customization: Allows configuration to specify which files or directories to watch, which extensions to watch, and other options through a nodemon.json file or command-line arguments.
// Compatibility: Works with any Node.js application and can be integrated with other tools and frameworks.

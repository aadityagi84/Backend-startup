const express = require("express");
const app = express();
const fs = require("fs");
const Port = 8080;
const users = require("./MOCK_DATA.json");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Add this middleware to parse JSON bodies

app.use((req, res, next) => {
  console.log("hello from the middleware 1");
  //  to save the data comes from the user and save int a log.txt file
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}:${req.ip}:${req.method}:${req.path}`,
    (err, data) => {
      next();
    }
  );

  // res.json({ msg: `hello from the middleware 1` });
  // if we can't use next function then my middle ware not passout or go outside the value through it so we can used next function
});

// Routes
app.get("/user", (req, res) => {
  const html = `<ul>
    ${users
      .map((user, index) => {
        if (user) {
          return `<li key="${index}">${user.email}</li>`;
        } else {
          return `<li key="${index}">No email</li>`;
        }
      })
      .join("")}
  </ul>`;

  res.send(html);
});

app.use((req, res, next) => {
  console.log("welcome from middleware 2");
  next();
});

app.get("/api/users", (req, res) => {
  console.log(users);
  return res.json(users);
});

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
    const id = Number(req.params.id);
    const updateObject = req.body;

    // Find the user by id
    const userIndex = users.findIndex((user) => user.id === id);

    fs.writeFileSync(
      "./MOCK_DATA.json",
      JSON.stringify(users, null, 2),
      "utf-8"
    );

    if (userIndex !== -1) {
      // Update the user object
      users[userIndex] = { ...users[userIndex], ...updateObject };

      // Write the updated users array back to the file
      fs.writeFileSync(
        "./MOCK_DATA.json",
        JSON.stringify(users, null, 2),
        "utf-8"
      );

      // Return the updated user
      return res.json({ status: "success", user: users[userIndex] });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      const deletedUser = users.splice(userIndex, 1)[0];
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err) {
          return res.status(500).json({ error: "Failed to write data" });
        }
        return res.json({ status: "success", id: deletedUser.id });
      });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  })

  .put((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      users[userIndex] = { ...req.body, id: id }; // Replace user data with new data
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err) {
          return res.status(500).json({ error: "Failed to write data" });
        }
        return res.json({ status: "success", id: id });
      });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  });
app.post("/api/users", (req, res) => {
  const body = req.body;
  console.log(body);

  users.push({ ...body, id: users.length + 1 });

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to write data" });
    }
    return res.json({ status: "success", id: users.length });
  });
});

app.get("/user", (req, res) => {
  res.send(html);
});

app.listen(Port, () => console.log(`http://localhost:${Port}`));

// Now test your API on Postman

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
  const newId = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = { ...body, id: newId };
  users.push(newUser);
  fs.writeFile(usersPath, JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to write data" });
    }
    return res.json({ status: "success", id: newUser.id });
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 4000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const users = require("./MOCK_DATA.json");
const usersFilePath = "./MOCK_DATA.json";
app.get("/api/users", (req, res) => {
  res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const updateUser = req.body;

    // Find the index of the user to update
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      // Update the user object
      users[userIndex] = { ...users[userIndex], ...updateUser };

      // Write the updated users array back to the file
      fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        // Send the updated user as the response
        res.json(users[userIndex]);
      });
    } else {
      // User not found
      res.status(404).json({ error: "User not found" });
    }
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    fs.writeFile(usersFilePath, JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to write data" });
      }
      return res.json({ status: "success", id: deletedUser.id });
    });
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
app.listen(PORT, () => {
  console.log(`your server is : http://localhost:${PORT}`);
});

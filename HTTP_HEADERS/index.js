const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 8080;
const users = require("./MOCK_DATA.json");
const usersPath = "./MOCK_DATA.json";

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/users", (req, res) => {
  // to add custom Header in your
  // res.setHeader("myName", "its me ");
  // console.log(req.headers);/
  // to add custom header for good practice  you will add on {X-your-Header-Name } like
  res.setHeader("X-Custom-Header", "its me ");
  res.setHeader("X-myName", "aadi ");
  // add always X- to custom headers

  res.json({ users });
});

app.route("/api/users/:id").get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});
app.route("/api/users/:id").post((req, res) => {
  const urlId = Number(req.params.id);
  const { id, newValue } = req.body;

  console.log(`urlId: ${urlId}, id: ${id}, newValue: ${newValue}`);

  if (urlId !== id) {
    return res.status(400).json({ error: "ID in URL and body do not match" });
  }

  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    users[userIndex].value = newValue;
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2), "utf-8");
    res.status(200).json({ status: "success", user: users[userIndex] });
  } else {
    res.status(404).json({ error: "User not found" });
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
  console.log(`Server is running at http://localhost:${PORT}`);
});

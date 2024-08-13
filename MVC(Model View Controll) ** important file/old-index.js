const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

// Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/userPractice2")
  .then(() => console.log("Connection successfully set up with MongoDB"))
  .catch((err) => console.error(err));

// Create Schema: Used to create validation for all the fields and take user input fields
const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: {
    type: String, // Correcting type to String
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"], // Optional regex for basic email validation
  },
  gender: { type: String },
  job_title: { type: String },
});

// Create Model: Creating a model to use the schema and store the value
const users = mongoose.model("user", userSchema);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routing
app.get("/users", async (req, res) => {
  const allDbs = await users.find({});

  const html = `<ul>
  ${allDbs
    .map(
      (user) =>
        `<li>${user.first_name} - ${user.last_name} - ${user.email}</li>`
    )
    .join("")}
  </ul>`;
  res.send(html);
});

// Fixing the incorrect order of req and res, and adding HTTP verb (get)
app.get("/api/users", async (req, res) => {
  try {
    const allDBS = await users.find({});
    res.json(allDBS);
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route with :id parameter
app.get("/api/users/:id", async (req, res) => {
  try {
    const data = await users.findById(req.params.id);
    if (data) {
      res.json(data);
    } else {
      res.status(400).json({ msg: "Validation failed" });
    }
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.email ||
    !body.last_name ||
    !body.first_name ||
    !body.gender
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  try {
    // try cat chache ke anadr jo name or varible define kre gye vo schema se match hone chaye

    const result = await users.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title, // Ensure this matches the schema
    });
    console.log("result", result);
    return res.status(201).json({ msg: "success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error creating user" });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const fs = require("fs");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

// connection with mongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/userPractice")
  .then(() => console.log("connected MongoDB"))
  .catch((err) => console.log("mongo Error ", err));

// schema
const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: {
      type: String,
      required: true,
      // unique true means same multiple id will not be saved in data base
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: { type: String },
  },
  { timestamps: true } // Fixed the key name from timeStamps to timestamps
);

// model
// when you create the model then make sure mind some  NOTES:are first of all you will give the name of the model and then give the varible name given for schema
const user = mongoose.model("user", userSchema);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/users", async (req, res) => {
  const allDbs = await user.find({});
  const html = `<ul>
${allDbs.map((user) => `<li>${user.firstName}</li>`).join("")}
</ul>`;
  res.send(html);
});

app.get("/api/users", async (req, res) => {
  const allDbsUser = await user.find({});
  res.json(allDbsUser);
});

app.route("/api/users/:id").get(async (req, res) => {
  try {
    const users = await user.findById(req.params.id);
    if (users) {
      res.json(users);
    } else {
      res.status(404).json({
        message: `User with ID: ${req.params.id} not found`,
      });
    }
  } catch (error) {
    // Handle potential errors during findById operation (optional)
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app
  .patch("/api/users/:id", async (req, res) => {
    try {
      const updates = req.body; // Get the update fields from the request body
      const userdbs = await user.findByIdAndUpdate(
        req.params.id,
        updates, // Apply the updates
        { new: true, runValidators: true } // Return the updated document and validate inputs
      );

      if (!userdbs) {
        return res
          .status(404)
          .json({ status: "error", message: "User not found" });
      }

      return res.json({ status: "success", user: userdbs });
    } catch (error) {
      return res.status(500).json({ status: "error", message: error.message });
    }
  })
  .delete(async (req, res) => {
    try {
      const userdbs = await user.findByIdAndDelete(req.params.id); // Fixed typo: req.prams -> req.params
      if (!userdbs) {
        return res
          .status(404)
          .json({ status: "error", message: "User not found" });
      }
      return res.json({ status: "success", message: "Data was deleted" });
    } catch (error) {
      return res.status(500).json({ status: "error", message: error.message });
    }
  });

app.post("/api/users/", async (req, res) => {
  const body = req.body;
  //   add some auth for field required
  if (
    !body ||
    !body.email ||
    !body.first_name ||
    !body.last_name ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const result = await user.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });
    console.log("result", result);
    return res.status(201).json({ msg: "success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error creating user" });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }

  console.log(`http://localhost:${PORT}`);
});

// to use mongodb first of all install the dependies called mongoose :=> npm i mongoose

/*
 * Explanation of the Code:
 *
 * 1. Importing Modules:
 *    - `fs`: Node.js module to interact with the file system.
 *    - `express`: A web application framework for Node.js used to build APIs.
 *    - `mongoose`: An Object Data Modeling (ODM) library for MongoDB and Node.js.
 *    - `PORT`: The port number where the Express server will listen (8080).
 *
 * 2. Connecting to MongoDB:
 *    - `mongoose.connect`: Connects to a MongoDB database located at `mongodb://127.0.0.1:27017/userPractice`.
 *    - `.then` and `.catch`: Used to log success or error messages to the console.
 *
 * 3. Defining the User Schema:
 *    - `userSchema`: Defines the structure of user documents in MongoDB.
 *    - Fields include `firstName`, `lastName`, `email`, `jobTitle`, and `gender`.
 *    - `timestamps: true`: Automatically adds `createdAt` and `updatedAt` fields.
 *
 * 4. Creating the User Model:
 *    - `user`: A Mongoose model based on `userSchema` which allows interaction with the `users` collection in MongoDB.
 *
 * 5. Middleware:
 *    - `express.urlencoded` and `express.json`: Parse incoming request bodies, enabling form data and JSON data handling.
 *
 * 6. API Endpoints:
 *    - `/users`: Retrieves all users and returns them as an HTML list.
 *    - `/api/users`: Retrieves all users and returns them as JSON.
 *    - `/api/users/:id`: Retrieves a user by ID and returns it as JSON. If not found, returns a 404 error.
 *    - PATCH `/api/users/:id`: Updates a user by ID with data from the request body. If not found, returns a 404 error.
 *    - DELETE `/api/users/:id`: Deletes a user by ID. If not found, returns a 404 error.
 *    - POST `/api/users/`: Creates a new user with data from the request body. Returns a success message or an error if required fields are missing.
 *
 * 7. Starting the Server:
 *    - `app.listen`: Starts the Express server on the specified `PORT`.
 *    - Logs the URL of the server to the console (`http://localhost:8080`).
 */

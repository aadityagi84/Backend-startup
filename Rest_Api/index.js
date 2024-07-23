// const express = require("express");
// const app = express();
// const fs = require("fs");
// const Port = 8080;
// const users = require("./MOCK_DATA.json");

// // now add on the MIDDLEWARE
// app.use(express.urlencoded({ extended: false }));
// // Routes
// const html = `<ul>
// ${users
//   .map((user) => {
//     return `<li>${user.first_name}</li>`;
//   })
//   .join("")}
// </ul>`;

// app.get("/api/users", (req, res) => {
//   console.log(users);
//   return res.json(users);
// });

// // // to get dynamic id their will be a feature are

// // app.get("/api/users/:id", (req, res) => {
// //   const id = Number(req.params.id);
// //   const user = users.find((user) => user.id === id);
// //   return res.json(user);
// // });
// // app.post("/api/users", (req, res) => {
// //   console.log("status is pending ");
// //   // TODO :create user
// //   return res.json({ status: "pending " });
// // });

// // app.patch("/api/users/:id ", (req, res) => {
// //   // TODO :Edit the user with id
// //   return res.json({ status: "Pending " });
// // });

// // app.delete("/api/users/:id", (res, req) => {
// //   // TODO :delete the user with id
// //   return res.json({ status: "Pending " });
// // });

// // now to write the some optimize code  with same as functionality of route will be the code is =>

// app
//   .route("/api/users/:id")
//   .get((req, res) => {
//     const id = Number(req.params.id);
//   })
//   .patch((req, res) => {
//     // edit user with id
//     return res.json({ status: "pending" });
//   })
//   .delete((req, res) => {
//     // delete  user with id
//     return res.json({ status: "pending" });
//   });

// app.post("/api/users", (req, res) => {
//   //  req.body== it will be the feature of express it will be help on to save or get the data from  frontend

//   const body = req.body;
//   console.log(body);
//   // after this if we will be restart the server and send the reques from the post will the data will be shown undefiend because over express wold not be know what is data and what type of data , so to remove htis bug we will use the middleware in node js and most important thing to you know that is  you will add the middle wale at the top of file

//   // now to some data in the api we will set the code is and the one way is this to send tha data in the api a
//   // users.push;
//   // ({
//   //   first_name: first_name.body,
//   //   email: email.body,
//   //   gender: gender.body,
//   //   job_title: job_title.body,
//   // });

//   // Second way is this
//   users.push({ ...body, id: users.length + 1 });

//   // users.push({ ...body, id: users.length + 1 });  ===> this method is used to genrate the id in the apis
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     return res.json({ status: "sccuess", id: users.length + 1 });
//   });
// });

// app.get("/user", (req, res) => {
//   res.send(html); // Changed from res.end to res.send for proper HTML rendering
// });

// app.listen(Port, () => console.log(`http://localhost:${Port}`));

// // NOW TEST YOUR API ON POSTMAN
const express = require("express");
const app = express();
const fs = require("fs");
const Port = 8080;
const users = require("./MOCK_DATA.json");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Add this middleware to parse JSON bodies

// Routes
const html = `<ul>
${users
  .map((user) => {
    return `<li>${user.first_name}</li>`;
  })
  .join("")}
</ul>`;

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
    // edit user with id
    return res.json({ status: "success" });
    return res.json({ status: users.id });
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

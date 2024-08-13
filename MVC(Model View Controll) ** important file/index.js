const express = require("express");
const app = express();
const { connectMongoDB } = require("./connection");
const { logResRes } = require("./middlewares");
const PORT = 8080;

const userRouter = require("./routes/user");

// Connection
connectMongoDB("mongodb://127.0.0.1:27017/userPractice2").then(() =>
  console.log("mongodb will be setup successfully")
);
// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// filename will be goes from this side
app.use(logResRes("Status.txt"));

// Routing
app.use("/users", userRouter);
// this means agar /user pr koi request ati h toh userRouter pr request send kr dena or or jb ye request USerrouter pr send kre ga to vo /user or /user/:id ka hi kaam kre ga

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

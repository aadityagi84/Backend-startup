const fs = require("fs");

// Blocking threds
// const data = fs.readFileSync("ashync.txt", "utf-8");
// console.log(data);

// Non-blocking threds
// `fs.readFile("ashync.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });`

// blocking operations ----> i need a thread/ worker /assign a worker and make hi work >thread pool >return the result

// but but there will be twist their be a 4 worker in the thread pool and if you want to increase the size of thread pool .... yes you will increase the size of thread pool according to your using current machinery means
// by DEfault Thread pool size will be ==4;
// and how much will go max the no. of thread pool ====== for example just imagine if your CPU is 8 core so your maximum threads will be=== 8
const os = require("os");
console.log(os.cpus().length);

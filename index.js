// node js would be use for a server side rendering  , the core javascript would be worked in node js and the gui model of javsscript would not be worked inside the node js

console.log(`this is node js and npm modules startup concept `);
// now if uou want to with the help of npm modules you write npm init in terminal and after then  goes to thier file will be create PKG.JSON which will be the config file of index.js and go inside the config file and write your default code inside the script section that is:-- "start":"node <FILE NAME>"

// NOW clear some basic modules and npm concepts
// to import module and your created file which will be called modules in nodejs
// main.js
const mod = require("./Math");

console.log(
  `this is another module:`,
  mod.mul(3, 5),
  mod.math(5, 5),
  mod.sub(5, 5)
);

const os= require('os');
// arch() method is use to find out the system architecture usingb the node js so it is very good thing 
// const osmod=os.arch();
// console.log(osmod)


// to check how much space will be free in your memo using this method but- it will be give a answer into ga bites form but if you want  to be the value will be shown in gb here be a second syntax
const freememo=os.freemem();console.log(freememo);
const freememow=os.freemem();console.log(`${freememow/1024/1024/1024}`);
const totalmem=os.totalmem();console.log(`${totalmem/1024/1024/1024}`);



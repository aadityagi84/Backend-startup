const fs = require('fs');
// to create a folder using node we will using this mkdir command and Sync is synchoronous function 
// fs.mkdirSync('challange');



// to creating the file and enter the data inside the file we will use tyhis type of data or code inside the node js 
// fs.writeFileSync('bio.txt','am a developer ');
// to transfer  the file creation of created or updated by node  we will use this type of code we will lets 




// fs.writeFileSync('challange/bio.txt','am a developer write now ');
// to update file and their data  will be want to update their data so let try some code and include append in this the code 
// fs.appendFileSync('challange/bio.txt','\n am learningb as a developer  ');
// to read data which will be store inside the file here be a code of the file reading data and the data will be comes into a buffer format there are few methods to read data from without showing  in a buffer form 
// const filedata=fs.readFileSync('challange/bio.txt');




// console.log(filedata); data will be shown in buffer mode in this method now ,
// there are few way to convertbthe buffer data into a string data on wil be this 

// const data = fs.readFileSync('challange/bio.txt');
// console.log(data.toString());
// second will be this 
// const data = fs.readFileSync('challange/bio.txt','utf-8');
// console.log(data);
// to rename the file here be a simple code to rename the file
// fs.renameSync('challange/bio.txt','challange/tst1.txt')
// to delete the file here be a simple code to delete the file
// fs.unlinkSync('bio.txt');




// function getSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       console.log(`Adding ${i} to the sum...`);
//       sum += i;
//       console.log(`Current sum: ${sum}`);
//     }
//     return sum;
//   }
//   console.log(`Final sum: ${getSum(10)}`);


// now learning about asynchronous method of crid opertion in node js
//after creating a file using ashynorous function to create a file it will gives u a error but if you will pass the callback function means call me back , in this fumction/method it will be work as normal as deafult look like as synchronous method in nodejs 

// fs.writeFile("ashync","today is awesome day ",(err)=>{
//     console.log("file is created ");
// });

// we pass them a functio  as an argument -- a callBack--
// the callback function will be called when the file is created
// the callback has an argument that tells you wheather the opertaion completed successfully 

fs.appendFile("ashync","\ntoday is awesome day,and it will be next line  ",(err)=>{
    console.log("task completed ");
})

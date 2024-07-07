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
fs.unlinkSync('bio.txt');
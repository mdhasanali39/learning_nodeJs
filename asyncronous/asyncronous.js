const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "asyncData.txt");

// write file asyncronously
// fs.writeFile(filepath, "Hello world", "utf-8", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File written successfully");
// });

// read file asyncronously
// fs.readFile(filepath,"utf-8",(err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// append file asyncronously
// fs.appendFile(filepath, "\nHello world updated", 
// "utf-8", (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File appended successfully");
// });

// delete file asyncronously
// fs.unlink(filepath, (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File deleted successfully");
// })

// rename file asyncronously
const newfilepath = path.join(__dirname, "updateAsyncData.txt");

// fs.rename(filepath, newfilepath, (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File renamed successfully");
// })

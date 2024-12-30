const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, "data.txt");
console.log(__dirname);

// write file syncronously
// const writefile = fs.writeFileSync(filepath, "Hello world", "utf-8");
// console.log(writefile);

// // read file syncronously
// const readfile = fs.readFileSync(filepath, 'utf-8');
// // console.log(readfile);

// // append file syncronously
// const appendfile = fs.appendFileSync(filepath, "\nHello world updated", 'utf-8');
// // console.log(appendfile);

// // delete file syncronously
// const deletefile = fs.unlinkSync(filepath);
// // console.log(deletefile);

// rename file syncronously
const newfilepath = path.join(__dirname, "updateData.txt");
// const renamefile = fs.renameSync(filepath, newfilepath, 'utf-8');
// console.log(renamefile);
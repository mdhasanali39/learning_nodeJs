// const fs = require("fs");
const fs = require("fs/promises");
const path = require("path");

const filepath = path.join(__dirname, "promiseData.txt");
const dir = path.join(__dirname);

// read directory
// fs.promises
//   .readdir(dir)
//   .then((data) => console.log(data))
//   .catch((err) => console.error("error",err));

// write file
// fs.promises
//   .writeFile(filepath, "Hello World", "utf8")
//   .then(() => console.log("file written successfully"))
//   .catch((err) => console.error("error", err));

// read file
// fs.promises
//   .readFile(filepath,"utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error("error", err));

// append file
// fs.promises.appendFile(filepath, "\nHello World updated", "utf-8").then(() => {
//   console.log("file appended successfully");
// }).catch((err) => console.error("error", err));

// delete file
// fs.promises.unlink(filepath).then
// (() => {
//   console.log("file deleted successfully");
// }).catch((err) => console.error("error", err));

// rename file
// fs.promises.rename(filepath, path.join(__dirname, "promiseDataNew.txt"))
//   .then(() => {
//     console.log("file renamed successfully");
//   })
//   .catch((err) => console.error("error", err));

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐🌟🌟🌟🌟🌟🌟🌟🌟🌟⭐⭐⭐⭐⭐⭐⭐⭐

// read directory
// fs.readdir(dir)
//   .then((data) => console.log(data))
//   .catch((err) => console.error("error",err));

// write file
// fs.writeFile(filepath, "Hello World", "utf8")
//   .then(() => console.log("file written successfully"))
//   .catch((err) => console.error("error", err));

// read file
// fs.readFile(filepath,"utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error("error", err));

// append file
// fs.appendFile(filepath, "\nHello World updated", "utf-8").then(() => {
//   console.log("file appended successfully");
// }).catch((err) => console.error("error", err));

// delete file
// fs.unlink(filepath).then
// (() => {
//   console.log("file deleted successfully");
// }).catch((err) => console.error("error", err));

// rename file
// fs.rename(filepath, path.join(__dirname, "promiseDataNew.txt"))
//   .then(() => {
//     console.log("file renamed successfully");
//   })
//   .catch((err) => console.error("error", err));
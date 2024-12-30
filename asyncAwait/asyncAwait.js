const fs = require('fs/promises');
const path = require('path');

const filepath = path.join(__dirname, "data.txt");


// write file 

const writeFile = async()=>{
    try {
        await fs.writeFile(filepath, "Hello world", "utf-8");
        console.log("file written successfully");
    } catch (error) {
        console.error("error", error);
    }
}

// writeFile();

// read file 
const readFile = async()=>{
    try {
        const res = await fs.readFile(filepath,"utf-8");
        console.log("file red successfully", res);
    } catch (error) {
        console.error("error", error);
    }
}

// readFile();

// append file
const appendFile = async()=>{
    try {
       await fs.appendFile(filepath, "\nHello world updated", "utf-8");
        console.log("file appended successfully");
    } catch (error) {
        console.error("error", error);
    }
}

// appendFile();

// delete file
const deleteFile = async()=>{
    try {
        await fs.unlink(filepath);
        console.log("file deleted successfully");
    } catch (error) {
        console.error("error", error);
    }
}
// deleteFile();

// rename file 
const renameFile = async()=>{
    try {
        await fs.rename(filepath, path.join(__dirname, "dataNewAndUpdatednew.txt"), "utf-8"); // if old path is not found then it will create an new file with this name
        console.log("file renamed successfully");
    } catch (error) {
        console.error("error", error);
    }
}
// renameFile();

// copy file
const copyFile = async()=>{
    try {
        await fs.copyFile(filepath, path.join(__dirname, "dataNewAndUpdatednew.txt"));
        console.log("file copied successfully");
    } catch (error) {
        console.error("error", error);
    }       

}

copyFile();
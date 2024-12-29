const path = require('path');

// console.log(__dirname);
// console.log(__filename);


// school/students/studentsNames.txt
const filepath = path.join('school', "students", "studentsNames.txt");
console.log(filepath);

const parsePath = path.parse(filepath);
const resovedPath = path.resolve(filepath);
const extention = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);

console.log(parsePath);
console.log(resovedPath);
console.log(extention);
console.log(basename);
console.log(dirname);
console.log(path.sep);
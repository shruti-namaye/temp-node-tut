// path module - used to give file path easier

// const { log } = require("console");
// const { log } = require("console");
const { log } = require("console");
const path = require("path");

console.log(path.sep);

// path method - returns the file path
const filePath = path.join("./content/", "subfolder", "test.txt");
console.log(filePath);

// base method- returns the last part of the path file
const base = path.basename(filePath);
console.log(base);

// resolve- returns an actual path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

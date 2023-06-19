var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.readFile('welcome.txt', 'utf8',  function(err, fd) {
 console.log(fd);
     
});
console.log("File opened successfully!");  
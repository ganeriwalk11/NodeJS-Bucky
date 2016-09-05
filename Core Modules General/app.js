var path = require('path');
var websiteHome = "Desktop/Krishna/NodeJS/index.html";
var websiteAbout = "Desktop/Krishna/NodeJS/about.html";

console.log(path.normailze(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));
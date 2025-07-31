// const httpData = require('http'); // core modules
// const calcData = require('./calc'); // local modules
// const expressData = require('express'); // third party modules

// console.log(calcData.add(2,3));

// const url = require('url');
// const querystring = require('querystring');
// const http = require('http');
// const url = require('url');
// const querystring = require('querystring');


// http.createServer((req, res) => {
//   // Parse the URL
//   const parsedUrl = url.parse(req.url);
  
//   // Extract query string as an object
//   const query = querystring.parse(parsedUrl.query);

//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     message: "Query parameters received",
//     query: query
//   }));
// }).listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// index.js
const calc = require('./calc');       // local module
//const colors = require('./color');    // our custom color module
const customColor = require('colors');

//console.log("2 + 3 =", calc(2, 3));
console.log("Random Color:", customColor.getRandomColor());
console.log("All Colors:", customColor.allColors);

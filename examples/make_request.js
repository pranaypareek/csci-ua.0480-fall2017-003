var request = require('request');
console.log("Start");
request('http://www.google.com', function (error, response, body) {
    console.log(body.slice(0, 30)) 
})
console.log("Done!");


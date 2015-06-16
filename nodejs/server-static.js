var http = require('http');
var fs = require('fs');

var args = process.argv.slice(2);

var port = args[0];
if (port == undefined) {
    console.log("Please add port as a argument");
    return;
}

http.createServer(function (req, res) {
  /*res.writeHead(200, {
    'Content-Type' : 'text/plain', 
    'Cache-Control' : 'no-cache, no-store, must-revalidate',
    'Pragma' : 'no-cache',
    'Expires' : '0'});*/
//    console.log('Serving node.js on port ' + port);
    res.end(fs.readFileSync('index.html'));
}).listen(port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:' + port + '/');

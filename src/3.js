//user defined module
var http  = require('http');
var mymod = require('./3.1.js');

http.createServer(function (req,res){
  res.writeHead(200,{'content-Type':'text/plain'});
  res.write('The current date and time: \n');
  res.end(mymod.mydatetime());

}).listen(8080);
console.log('server started on port :8080....');

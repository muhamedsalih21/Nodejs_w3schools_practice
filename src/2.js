//http basic module
var http=require('http');

http.createServer(function (req,res){
  res.writeHead(200,{'content-Type':'text/plain'});// set header
  res.end('Hello world');// response send
}).listen(8080);// listen in the port
console.log('server started on port :8080....');// msg for server that the server started

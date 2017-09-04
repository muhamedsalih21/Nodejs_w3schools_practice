// url  module
var http=require('http');
var url=require('url');
http.createServer(function (req,res){
  res.writeHead(200,{'content-Type':'text/plain'});
  res.write("The url end point :(dir/file-name) \n"+req.url);
  res.end();
}).listen(8080);
console.log('server started on port :8080....');

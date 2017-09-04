//events
var fs= require ('fs');
var http=require('http');

http.createServer(function (req,res){
  var readStream = fs.createReadStream('./6.1.html');
      readStream.on('open', function () {//event listener
      console.log('The file is open');
      res.writeHead(200,{'content-Type':'text/html'});
      res.write("the on event listener dedects openning of file on server-side");
      res.end();
      });
}).listen(8080);
console.log('server started on port :8080....');

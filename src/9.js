//url get request querying depth
//req get url:http://127.0.0.1:8080/default.htm?value1=hello&value2=hai
var http=require('http');
var url=require('url');

http.createServer(function (req,res){
  res.writeHead(200,{'content-Type':'text/plain'});
  var q=url.parse(req.url,true);// url parsing
  console.log(req.url);// write the requesting url
  var qdata=q.query;
  var values= "value1="+qdata.value1+"\nvalue2="+qdata.value2;// query for  the values
  values+= "\nhost="+q.host+"\npathname="+q.pathname+"\nquery json="+q.search;
/*
    q.host  ---returns 'localhost:8080'
    q.pathname ---returns '/default.htm'
    q.search ---returns '?year=2017&month=february'
    q.query ---returns an object: { year: 2017, month: 'february' }
    q.value --- returns 'values-data'
*/
  res.write("Request value catch : \n"+values);//write the queried values to client
  res.end();
}).listen(8080);
console.log('server started on port :8080....');

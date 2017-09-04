var mysql = require('mysql');
var stringify = require('node-stringify');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"steel-platform"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql="select * from user where 1";
  con.query(sql, function (err, result,field) {
    if (err) throw err;
    console.log("Result: " + (stringify(result).split(",")).join("\n"));
    console.log("\nfields: "+(stringify(field).split(",")).join("\n"));
  });
});

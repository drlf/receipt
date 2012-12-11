var express = require("express");

var HOST = null; // localhost
var PORT = 8001;

var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(Number(process.env.PORT || PORT), HOST);

console.log('Express started on port 3000');
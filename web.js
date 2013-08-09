var express = require('express');
var fs=require('fs');

var buf=fs.readFileSync("index.html");
var txt=buf.toString();
var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  response.send(txt);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require('express');

var app = express.createServer(express.logger());

var getFileContent = function(filename) {
    var fs = require('fs');
    var buffer = new Buffer(fs.readFileSync(filename));
    return buffer.toString();
}

pp.get('/', function(request, response) {
  var readFile = "index.html");
  response.send(getFileContent(readFile));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var http = require('http');
var fs = require('fs');
var through = require('through2');

var to_upper = function (buffer) {
  this.queue(buffer.toString().toUpperCase())
}

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req
        .pipe(through(to_upper))
        .pipe(res);
    }
});
server.listen(process.argv[2]);


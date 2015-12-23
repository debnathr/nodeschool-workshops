var through = require('through2');
var http = require('http');
var fs = require('fs');
var stream = through(write, end);

 var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
  	req.pipe(fs.createWriteStream());
  }
  res.end('');
}
  
  function write (buf, encoding , next) {
     this.push(buf);
     next();
    }
    function end (done) { done(); }



process.stdin.pipe(through(write, end)).pipe(process.stdout);

  
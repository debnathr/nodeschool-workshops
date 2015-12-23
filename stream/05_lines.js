var through = require('through2');
var stream = through(lines, end);
var split = require('split');



  process.stdin
      .pipe(split())
      .pipe(through2(function (line, encoding, next) {
          console.dir(line.toString());
          next();
      }))
function lines(lineNumber, next){
	
}

function end(done){
done();
}

process.stdin.pipe(through(lineNumber)).pipe(process.stdout);
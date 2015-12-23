 var concat = require('concat-stream');

  var data = process.stdin.pipe(concat(function(buffer){
  	process.stdout.write(buffer.toString().split('').reverse().join(''));
  	process.stdout.write('\n')
  }));

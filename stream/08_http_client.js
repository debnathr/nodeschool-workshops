var request = require('request');


var data = request.post('http://localhost:8099');
process.stdin.pipe(data).pipe(process.stdout);
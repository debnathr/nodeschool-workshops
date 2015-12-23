var fs = require('fs');


var data = fs.createReadStream(process.argv[2]).pipe(process.stdout);
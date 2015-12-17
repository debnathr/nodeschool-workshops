var fs = require('fs')
var buffer = fs.readFileSync(process.argv[2])
var str = buffer.toString()
var string = str.split("\n").length;  
console.log(string - 1)
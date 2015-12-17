var fs = require('fs')
var content = fs.readFile(process.argv[2], function(error, buffer){
if (!error) {
var str = buffer.toString()
var string = str.split("\n").length;  
console.log(string - 1)

};
return(error)
})



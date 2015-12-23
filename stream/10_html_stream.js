var trumpet = require('trumpet')
var through = require('through2')

function upper(buffer) {
var str = buffer.toString().toUpperCase();
// console.log(buffer.toString().toUpperCase())
}

var tr = trumpet()
process.stdin.pipe(tr).pipe(process.stdout)
var stream = tr.select('.loud').createStream()
stream.pipe(through(str)).pipe(stream)


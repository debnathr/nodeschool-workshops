var http = require('http')
var bl = require('bl')
http.get(process.argv[2], function callback(response){
response.pipe(bl(function(err, data){
	if (!err) {
	data = data.toString()
	console.log(data.length)
	console.log(data)
	};
// console.log(err)
}))
})

	
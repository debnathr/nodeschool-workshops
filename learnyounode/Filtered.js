var fs = require('fs')
var re = require( 'regex-extname' )
var path = require('path')
var regex = new RegExp('\\.' + process.argv[3])
fs.readdir(process.argv[2], function callback(err, list){
	if (!err) {
		// for (var i=0; i< list.length; i++)
		list.forEach(function(file){

			if (regex.test(file)) {
				console.log(file)
			};


			// if(file.extname(file[i]) === '.' + process.argv[2]) {
			// // if (list[i].match('.md')) {
			// 	console.log(file[i]);


		})
		return(err)
		}
	})








	// 	for (var i in buffer){
	// 	if(path.extname(buffer[i]) === ".md") {
	// 		var list = buffer[i]

	// 	}	

	// 	}
	// 	console.log(list)
	// };
	




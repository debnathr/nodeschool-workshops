var express = require('express');
var app = express();

app.use(express.static(process.argv[3]));

var server = app.listen(process.argv[2], function(){
	var host = server.address().address;
	var port = server.address().port;
});


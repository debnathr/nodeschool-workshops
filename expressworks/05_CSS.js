var express = require('express');
var path = require('path');
var bodyparser = require('body-parser')
var app = express();

app.use(express.static(process.argv[3]));
app.use(require('stylus').middleware(process.argv[3] ));


var server = app.listen(process.argv[2], function(req, res){
	var host = server.address().address;
	var port = server.address().port;
});


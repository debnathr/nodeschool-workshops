var express = require('express');
var path = require('path');
var bodyparser = require('body-parser')
var app = express();
var fs = require('fs');

app.get('/books', function(req, res){
	fs.readFile(process.argv[3], function(err, data){
		if(err){
			return err;
		}
		object = JSON.parse(data);
		res.send(object);

	});
});

var server = app.listen(process.argv[2], function(req, res){
	
});

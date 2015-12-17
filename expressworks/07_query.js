var express = require('express');
var path = require('path');
var bodyparser = require('body-parser')
var app = express();

// var object = {};
app.get('/search', function(req, res){
	var object = req.query;
	res.send(object);
});

var server = app.listen(process.argv[2], function(req, res){

});
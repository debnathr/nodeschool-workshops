var express = require('express');
var path = require('path');
var bodyparser = require('body-parser')
var app = express();
var crypto = require('crypto');

 app.put('/message/:id', function(req, res){
 	var id = req.params.id;
 	var str = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex');
 	res.send(str)
 });

 var server = app.listen(process.argv[2], function(req, res){
	
});

var express = require('express');
var app = express();
var path = require('path');

// app.use(express.static(process.argv[3]));
app.set('view engine', 'jade')
app.set('views', (process.argv[3]));


app.get('/home', function(req, res){
		res.render('index', {date: new Date().toDateString()});
});


var server = app.listen(process.argv[2], function(req, res){
	var host = server.address().address;
	var port = server.address().port;
});


    // app.use(express.static(path.join(__dirname, 'public')))

    // app.use(express.static(process.argv[3]));




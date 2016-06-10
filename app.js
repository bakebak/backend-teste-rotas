var express = require('express');
var app = express();

var contact = require('./contact.js');

app.set('site', 'Home');

app.get('/', function (req, res){
  	res.type('text/plain');
  	res.send('Welcome to my site! [GET]');
});

app.get('/home', function (req, res){
  	res.type('text/plain');
  	res.send(app.get('site') + ' sweet ' + app.get('site') + '! [GET]');
});

app.post('/home', function (req, res){
  	res.type('text/plain');
  	res.send(app.get('site') + ' sweet ' + app.get('site') + '! [POST]');
});

app.put('/home', function (req, res){
  	res.type('text/plain');
  	res.send(app.get('site') + ' sweet ' + app.get('site') + '! [PUT]');
});

app.get('/contatos', function (req, res){
	if(req.query.hasOwnProperty('id')){
	  	res.type('text/json');
	  	res.send(contact.contatos[req.query.id-1]);
	}
	else {
		res.type('text/json');
		res.send(contact.contatos);
	}
});

app.listen(3000, function (){
  	console.log('Example app listening on port 3000!');
});

var product = require('./produtos');
app.use('/produtos', product);
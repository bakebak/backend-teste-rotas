var express = require('express');
var fruits = express();

var contact = require('./../contact.js');

fruits.use(function timeLog(req, res, next){
	console.log('Time: ', Date.now());
	next();
});

/*fruits.get('/', function(req, res){
	res.type('text/json');
	res.send({frutas:["banana", "uva", "morango", "melancia"]});
});*/

fruits.get('/', function(req, res){
	res.type('text/json');
	res.send(contact.produtos[0]);
});

fruits.get('/banana', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[0].frutas[0]);
});

fruits.get('/uva', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[0].frutas[1]);
});

fruits.get('/morango', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[0].frutas[2]);
});

fruits.get('/melancia', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[0].frutas[3]);
});

module.exports = fruits;
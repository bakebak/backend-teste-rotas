var express = require('express');
var cereals = express();

var contact = require('./../contact.js');

cereals.use(function timeLog(req, res, next){
	console.log('Time: ', Date.now());
	next();
});

cereals.get('/', function(req, res){
	res.type('text/json');
	res.send(contact.produtos[3]);
});

cereals.get('/arroz', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[3].cereais[0]);
});

cereals.get('/aveia', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[3].cereais[1]);
});

cereals.get('/trigo', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[3].cereais[2]);
});

cereals.get('/centeio', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[3].cereais[3]);
});

module.exports = cereals;
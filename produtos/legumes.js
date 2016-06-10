var express = require('express');
var vegetables = express();

var contact = require('./../contact.js');

vegetables.use(function timeLog(req, res, next){
	console.log('Time: ', Date.now());
	next();
});

vegetables.get('/', function(req, res){
	res.type('text/json');
	res.send(contact.produtos[1]);
});

vegetables.get('/ervilha', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[1].legumes[0]);
});

vegetables.get('/vagem', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[1].legumes[1]);
});

vegetables.get('/fava', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[1].legumes[2]);
});

vegetables.get('/lentilhas', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[1].legumes[3]);
});

module.exports = vegetables;
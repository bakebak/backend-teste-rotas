var express = require('express');
var greens = express();

var contact = require('./../contact.js');

greens.use(function timeLog(req, res, next){
  console.log('Time: ', Date.now());
  next();
});

greens.get('/', function(req, res){
	res.type('text/json');
	res.send(contact.produtos[2]);
});

greens.get('/alecrim', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[2].verduras[0])
});

greens.get('/alface', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[2].verduras[1])
});

greens.get('/oregano', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[2].verduras[2])
});

greens.get('/salsa', function(req, res){
	res.type('text/json')
	res.send(contact.produtos[2].verduras[3])
});

module.exports = greens;
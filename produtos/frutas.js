var express = require('express');
var fruits = express();

fruits.use(function timeLog(req, res, next){
	console.log('Time: ', Date.now());
	next();
});

fruits.get('/', function(req, res){
	res.type('text/json');
	res.send({frutas:["banana", "uva", "morango", "melancia"]});
});

fruits.get('/banana', function(req, res){
	res.type('text/json')
	res.send({"nome": "banana", "valor":"2.00", "status": "ativo"});
});

fruits.get('/uva', function(req, res){
	res.type('text/json')
	res.send({"nome": "uva", "valor":"1.80", "status": "inativo"});
});

fruits.get('/morango', function(req, res){
	res.type('text/json')
	res.send({"nome": "morango", "valor":"5.00", "status": "ativo"});
});

fruits.get('/melancia', function(req, res){
	res.type('text/json')
	res.send({"nome": "melancia", "valor":"5.99", "status": "ativo"});
});

module.exports = fruits;
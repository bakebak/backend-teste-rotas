var express = require('express');
var cereals = express();

cereals.use(function timeLog(req, res, next){
	console.log('Time: ', Date.now());
	next();
});

cereals.get('/', function(req, res){
	res.type('text/json');
	res.send({cereais:["arroz", "aveia", "trigo", "centeio"]});
});

cereals.get('/arroz', function(req, res){
	res.type('text/json')
	res.send({"nome": "arroz", "valor":"8.50", "status": "ativo"});
});

cereals.get('/aveia', function(req, res){
	res.type('text/json')
	res.send({"nome": "aveia", "valor":"2.00", "status": "ativo"});
});

cereals.get('/trigo', function(req, res){
	res.type('text/json')
	res.send({"nome": "trigo", "valor":"2.99", "status": "ativo"});
});

cereals.get('/centeio', function(req, res){
	res.type('text/json')
	res.send({"nome": "centeio", "valor":"2.50", "status": "inativo"});
});

module.exports = cereals;
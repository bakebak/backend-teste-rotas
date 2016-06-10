var express = require('express');
var vegetables = express();

vegetables.use(function timeLog(req, res, next){
	console.log('Time: ', Date.now());
	next();
});

vegetables.get('/', function(req, res){
	res.type('text/json');
	res.send({legumes:["ervilha", "vagem", "fava", "lentilhas"]});
});

vegetables.get('/ervilha', function(req, res){
	res.type('text/json')
	res.send({"nome": "ervilha", "valor":"3.50", "status": "ativo"});
});

vegetables.get('/vagem', function(req, res){
	res.type('text/json')
	res.send({"nome": "vagem", "valor":"1.99", "status": "inativo"});
});

vegetables.get('/fava', function(req, res){
	res.type('text/json')
	res.send({"nome": "fava", "valor":"3.99", "status": "inativo"});
});

vegetables.get('/lentilhas', function(req, res){
	res.type('text/json')
	res.send({"nome": "lentilhas", "valor":"2.50", "status": "ativo"});
});

module.exports = vegetables;
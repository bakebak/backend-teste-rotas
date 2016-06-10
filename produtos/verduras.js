var express = require('express');
var greens = express();

greens.use(function timeLog(req, res, next){
  console.log('Time: ', Date.now());
  next();
});

/*greens.get('/', function(req, res){
	res.type('text/json');
	res.send({verduras:["alecrim", "alface", "oregano", "salsa"]});
});*/

greens.get('/', function(req, res){
	if(req.query.hasOwnProperty('id')){
	  	res.type('text/json');
	  	res.send(contact.produtos[req.query]);
	}
	else {
		res.type('text/json');
		res.send(contact.produtos);
	}
});

greens.get('/alecrim', function(req, res){
	res.type('text/json')
	res.send({"nome": "alecrim", "valor":"1.50", "status": "ativo"});
});

greens.get('/alface', function(req, res){
	res.type('text/json')
	res.send({"nome": "alface", "valor":"1.99", "status": "ativo"});
});

greens.get('/oregano', function(req, res){
	res.type('text/json')
	res.send({"nome": "oregano", "valor":"0.99", "status": "ativo"});
});

greens.get('/salsa', function(req, res){
	res.type('text/json')
	res.send({"nome": "salsa", "valor":"1.50", "status": "ativo"});
});

module.exports = greens;
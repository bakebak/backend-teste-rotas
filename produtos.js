var express = require('express');
var product = express();

var contact = require('./contact.js');

product.use(function timeLog(req, res, next){
	console.log('Time: ', Date.now());
	next();
});

/*product.get('/', function(req, res){
	res.type('text/json');
	res.send({produtos:["cereais", "frutas", "legumes", "verduras"]});
});*/

product.get('/', function(req, res){
	if(req.query.hasOwnProperty('id')){
	  	res.type('text/json');
	  	res.send(contact.produtos[req.query]);
	}
	else {
		res.type('text/json');
		res.send(contact.produtos);
	}
});

module.exports = product;

var fruta = require('./produtos/frutas');
product.use('/frutas', fruta);

var legume = require('./produtos/legumes');
product.use('/legumes', legume);

var verdura = require('./produtos/verduras');
product.use('/verduras', verdura);

var cereal = require('./produtos/cereais');
product.use('/cereais', cereal);
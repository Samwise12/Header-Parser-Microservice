'use strict';
var express = require('express');
var app = express();

app.get('/', function(req,res){
	var format = {
		ipaddress: null,
		language: null,
		software: null
	};
	format.ipaddress = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
	format.language = req.headers["accept-language"].split(',')[0];
	format.software = 	req.headers["user-agent"].match(/\((.*?)\)/)[1];
	res.json(format);
});



var port = Number(process.env.PORT || 5000);
app.listen(port, function(){
	console.log('app running');
});
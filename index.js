var express = require('express');
var app = express();

app.post('/', function(req, res, next) {
  res.sendStatus(401);
});

app.get('/', function(req, res, next) {
  res.sendStatus(500);
});

app.put('/', function(req, res, next) {
  res.sendStatus(501);
});

app.options('/', function(req, res, next) {
  res.sendStatus(400);
});

app.patch('/', function(req, res, next) {
  res.sendStatus(504);
});


app.listen(3000, function () {
  console.log('Servidor funcionando na porta 3000!');
});
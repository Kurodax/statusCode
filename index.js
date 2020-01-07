var express = require('express');
var app = express();

app.post('/', function (req, res) {
  res.send('Funcionou metodo POST 02');
});

app.get('/', function (req, res){
  res.send('Testando medodo GET 01');
});

app.delete('/', function (req, res){
  res.send('Medoto Deletado 00');
});

app.options('/', function (req, res){
  res.send('Medoto OP');
});

app.patch('/', function (req, res){
  res.send('Medoto PATCH testando');
});

app.head('/', function (req, res){
  res.send('Medoto HEAD buscando o topo');
});

app.put('/', function (req, res){
  res.send('Medoto PUT');
});


app.listen(5000, function () {
  console.log('Servidor funcionando na porta 5000!');
});
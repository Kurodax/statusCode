const express = require('express');
const app = express();

//                           ##### STATUS CODE #### //

/*app.post('/', (req, res,) => {
  res.status(401).json ({Status: Não autorizado});
});

app.post('/', (req, res,) => {
  res.sendStatus(401);
});

app.patch('/ola/:nome/:cargo', (req, res,) => {
  res.status(500).json(Sstatus: Erro interno do servidor (Internal Server Error));
});

app.get('/ola/:nome/:cargo', (req, res,) => {
  res.json({"Ola ": req.params.nome});
}); */

//                           ##### FIM STATUS CODE #### //



               // #####  CONVERTER O BODY [req.body] DA REQUISIÇÃO PARA JSON  ##### //
app.use(express.json())


                              // #####  ARRAY  ##### //
const usuario = [
  {name: 'Henrique', email: 'henrique@hotmail.com'},
  {name: 'Lucas', email: 'l.kuroda@hotmail.com'},
  {name: 'Antarctica', email: 'antarctica@bol.com'}
];

                              // ##### MOSTRA O ARRAY #### //
app.get('/dados', (req, res) => {
  res.json({usuario});
});

                              // ##### INSERI DADOS NO ARRAY #### //
app.post('/inserir', (req, res,) => {
  usuario.push (req.body);
  console.log(usuario);
  res.json(req.body);
});




app.listen(3000, () => {
  console.log('Servidor funcionando na porta 3000!');
});
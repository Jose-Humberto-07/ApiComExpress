const porta = 3003

const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");

const bodyParser = require("body-parser");


//app.get("/produtos", (require, response, next) => {
  //  response.send({
    //    nome: "Notebook",
      //  preco: 1299.99 
    //}) // converter para JSON
//})
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/produtos", (require, response, next) => {
    response.send(bancoDeDados.getProdutos()) // converter para JSON
});

app.get("/produtos/:id/", (require, response, next) => {
    response.send(bancoDeDados.getProduto(require.params.id))
});

app.post("/produtos", (require, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: require.body.nome,
        preco: require.body.preco
    })
});

app.get("/produtos/:id/", (require, response, next) => {
    const produto = bancoDeDados.exlcluirProduto(require.params.id)
    response.send(produto)
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
});
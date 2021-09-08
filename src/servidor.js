const express = require("express");
require("express-async-errors");
const roteador = require("../router/rotas");
const {validacaoEndpoints, tratamentoErros} = require("./intermediario");


const app = express();
app.use(express.json());
app.use(roteador);

//Middlewares
app.all("*", validacaoEndpoints);
app.use(tratamentoErros);

module.exports = app;
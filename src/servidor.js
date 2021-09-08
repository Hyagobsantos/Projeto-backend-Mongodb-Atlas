const express = require("express");
const cors = require("cors");
require("express-async-errors");
const roteador = require("../router/rotas");
const {validacaoEndpoints, tratamentoErros} = require("./intermediario");


const app = express();
app.use(express.json());
app.use(roteador);

//Middlewares
app.all('*', validacaoEndpoints);
app.use(tratamentoErros);

//Cors
app.use(cors());
app.options("*", cors())

module.exports = app;
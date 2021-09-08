const { MongoClient, ObjectId} = require('mongodb');
const dotenv = require('dotenv').config();

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.${process.env.DB_CHAR}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const cliente = new MongoClient(connectionString, {useUnifiedTopology: true, useNewUrlParser: true });

cliente.connect();

const fechar = () =>{cliente.close(()=> {
    console.log("Conexão Fechada")
})} 

module.exports = {cliente, fechar,ObjectId}









const { mongodb} = require("mongodb");
require ("dotenv").config();


const ObjectId = mongodb.ObjectId;

const dbHost = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbChar = process.env.DB_CHAR;


//string de conexão 
const connectionString = `mongodb+srv://${dbHost}:${dbPassword}@cluster0.${dbChar}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const options = {
    useUnifiedTopology: true,
};

console.info("Conectando ao MongoDb Atlas....");
//conectando ao mongodb


console.info("Conexão Realizada Com sucesso");

const db = mongodb.mongodb.db("db_blue");
const personagem = () => {
    return db.collection("personagens");
};

//cone
const conection = async () => {
    await mongodb.MongoClient.connect(connectionString, options);
};



module.exports = conection, personagem;




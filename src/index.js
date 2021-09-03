const express = require("express");
// const mongodb = require("mongodb");
const client  = require("../database/index")

require ("dotenv").config();
const ObjectId = client.ObjectId;

(async () => {


    const app = express();
	app.use(express.json());
	const port = process.env.PORT || 3000;
	
	//string de conexão 
	

	const personagemdb = client.personagem;
	

	const getPersonagensValidas = () => personagemdb.find({}).toArray();
	

// 	const getPersonagemById = async (id) =>
// 	personagemdb.findOne({ _id: ObjectId(id) });
		

	
// 	const valid = (id) => {
// 		if(!client.ObjectId.isValid(id)){
// 		 	return "Id inválido";
// 		}
// 	}
	

// //cors 
// 	app.all("/*", (req, res, next) => {
// 		res.header("Access-Control-Allow-Origin", "*");

// 		res.header("Access-Control-Allow-Methods", "POST");

// 		res.header(
// 			"Access-Control-Allow-Headers",
// 			"Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
// 		);

// 		next();
// 	});

// 	app.get("/", (req, res) => {
// 		res.send({ info: "Olá, Blue" });
// 	});

// 	//GET GetAllPersonagens

// 	app.get("/personagens", async (req, res) => {
// 		res.send(await getPersonagensValidas());
// 	});

// 	//GET getPersonagemById

// 	app.get("/personagens/:id", async (req, res) => {
// 		const id = req.params.id;

// 		const validei = valid(id);

// 		if(validei){
// 			res.status(400).json({erro:validei})
// 			return
// 		}
		

// 		const personagem = await getPersonagemById(id);
// 		console.info(personagens)
// 		if(personagens){ //nesse caso o id é valido porem não encontrado 
// 			res.status(404).json({erro:"Personagem Não Encontrado"})
// 			return
// 		}
// 		res.status(200).json(personagem)
// 	});

// 	//POST Adicona personagem
// 	app.post("/personagens", async (req, res) => {
// 		const objeto = req.body;

// 		if (!objeto || !objeto.nome || !objeto.imagemUrl) {
// 			res.send(
// 				"Requisição inválida, certifique-se que tenha os campos nome e imagemUrl"
// 			);
// 			return;
// 		}

// 		const result = await personagens.insertOne(objeto);

// 		console.log(result);
// 		//Se ocorrer algum erro com o mongoDb esse if vai detectar
// 		if (result.acknowledged == false) {
// 			res.send("Ocorreu um erro");
// 			return;
// 		}

// 		res.send(objeto);
// 	});

// 	//[PUT] Atualizar personagem
// 	app.put("/personagens/:id", async (req, res) => {
// 		const id = req.params.id;
// 		const objeto = req.body;

// 		if (!objeto || !objeto.nome || !objeto.imagemUrl) {
// 			res.send(
// 				"Requisição inválida, certifique-se que tenha os campos nome e imagemUrl"
// 			);
// 			return;
// 		}

// 		const quantidadePersonagens = await personagens.countDocuments({
// 			_id: ObjectId(id),
// 		});

// 		if (quantidadePersonagens !== 1) {
// 			res.send("Personagem não encontrado");
// 			return;
// 		}

// 		const result = await personagens.updateOne(
// 			{
// 				_id: ObjectId(id),
// 			},
// 			{
// 				$set: objeto,
// 			}
// 			);
// 			//console.log(result);
// 			//Se acontecer algum erro no MongoDb, cai na seguinte valiadação
// 			if(result.modifiedCount !== 1){
// 				res.send("Ocorreu um erro ao atualizar o personagem")
// 			}
// 			res.send(await getPersonagemById(id));
// 	});

// 	//[DELETE] Deleta um personagem
// 	app.delete("/personagens/:id", async (req, res) => {
// 		const id = req.params.id;

// 		const quantidade = await personagens.countDocuments({
// 			_id: ObjectId(id),
// 		});

// 		if(quantidade != 1){
// 			res.status(400).json({mensagem:"personagem não encontrado"});
// 			return 
// 		}

// 		const result = await personagens.deleteOne({
// 			_id: ObjectId(id),
// 		})
		
// 		if(result.deletedCount !== 1){
// 			res.status(500).json({mensagem:"ocorreu um erro ao remover o personagem"})
// 			return
// 		}

// 		res.status(200).json({mensagem:"Excluido com Sucesso"})
// 	});

	app.listen(port, () => {
		console.info(`App rodando em http://localhost:${port}`);
	});
})();
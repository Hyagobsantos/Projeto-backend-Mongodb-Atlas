const {cliente,fechar, ObjectId} = require("../database/conection");

const db = cliente.db("db_blue");
const personagem = db.collection('personagens')

const home = async (req,res) => {
    res.json({info: "Olá, Blue"})
}

async function listarPersonagens (req,res)  {
    const listarTodos = await personagem.find({}).toArray();
    listarTodos ? res.status(200).json(listarTodos) :res.status(400).json({erro:"Lista não Encontrada"})
}

const buscarPersonagens = (id) => personagem.findOne({  _id: ObjectId(id)  });


const listarPersonagensByID = async (req,res) => {
    const id = req.params.id;
    const personagemEncontrado = await buscarPersonagens(id)
    if(!personagemEncontrado){
        res.status(404).json({erro: "O Personagem Não Encontrado"})
        return
    }
    res.json(personagemEncontrado);
}

//Criar Personagem
const criarPersonagem = async (req,res) => {
    const personagemCorpo = req.body;

		if (!personagemCorpo || !personagemCorpo.nome || !personagemCorpo.imagemUrl) {
			res.status(400).json({
				error:
					"Personagem inválido, certifique-se que tenha os campos nome e imagemUrl",
			});
			return;
		}

		const result = await personagem.insertOne(personagemCorpo);
		if (result.acknowledged == false) {
			res.status(500).json({ error: "Ocorreu um erro" });
			return;
		}

		res.status(201).json(personagemCorpo);
};

//Atualizar Personagem
const atualizarPersonagem = async (req,res) => {
    const id = req.params.id;
    const objeto = req.body;

    
    if (Object.keys(objeto).length === 0) {
        res.status(400).json({error:"Requisição inválida, certifique-se que tenha os campos nome e imagemUrl"});
        return;
    }

    const quantidadePersonagens = await personagem.countDocuments({
        _id: ObjectId(id),
    });

    if (quantidadePersonagens !== 1) {
        res.status(404).json({ error: "Personagem não encontrado" });
        return;
    }

    const result = await personagem.updateOne(
        {
            _id: ObjectId(id),
        },
        {
            $set: objeto,
        }
    );
    
    if (result.acknowledged == "undefined") {
        res.status(500).json({ error: "Ocorreu um erro ao atualizar o personagem" });
        return;
    }
    res.json(await buscarPersonagens(id));
}

const deletarPersonagem = async (req,res) => {
    const id = req.params.id;

    const quantidadePersonagens = await personagem.countDocuments({
        _id: ObjectId(id),
    });
    
    if (quantidadePersonagens !== 1) {
        res.status(404).send({ error: "Personagem não encontrao" });
        return;
    }
    
    const result = await personagem.deleteOne({
        _id: ObjectId(id),
    });
    
    if (result.deletedCount !== 1) {
        res
            .status(500)
            .send({ error: "Ocorreu um erro ao remover o personagem" });
        return;
    }

    res.status(200).json({mensagem:"Personagem Excluido Com Sucesso"});
}


module.exports = {listarPersonagens, home, listarPersonagensByID, criarPersonagem,atualizarPersonagem,deletarPersonagem}
const router = require('express').Router();
const {home,listarPersonagens,listarPersonagensByID,criarPersonagem,atualizarPersonagem,deletarPersonagem} = require("../controller/personagens");
const cors = require("cors")

//Cors
app.use(cors());
app.options("*", cors())


router.get("/home", home)
router.get('/personagens/',listarPersonagens);
router.get('/personagens/:id', listarPersonagensByID);
router.post('/personagens', criarPersonagem);
router.put('/personagens/:id', atualizarPersonagem);
router.delete('/personagens/:id',deletarPersonagem)

module.exports = router
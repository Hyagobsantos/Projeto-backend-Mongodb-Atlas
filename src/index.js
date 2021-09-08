const app = require("./servidor");

const port = process.env.PORT || 3004;

app.listen(port, () => {
    console.log(`Servidor Rodando Na Porta ${port} em http://localhost:${port}`);
})
require("express-async-errors");

const validacaoEndpoints = (req,res) => {
    res.status(404).json({message: "Endpoint não foi Encontrado"})
}

const tratamentoErros = (error, req,res, next) => {
    res.status(error.status || 500).json({
        error: {
            status: error.status || 500,
            message: error.message || "Erro Interno Do Servidor"
        },
    })
};



module.exports = {validacaoEndpoints, tratamentoErros}
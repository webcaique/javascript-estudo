const express = require("express");

const app = express();

const listaEstrutores = [
    {
        id: 1,
        nome: "Junior",
        idade: 20,
        areaAtuacao: "Dev",
    },
    {
        id: 2,
        nome: "Jonny",
        idade: 19,
        areaAtuacao: "Medico",
    },
    {
        id: 3,
        nome: "Marcelo",
        idade: 24,
        areaAtuacao: "Louco",
    },

]

app.get("/instrutores", (req,res) => {
    res.json(listaEstrutores);
})

app.get("/instrutores/:id", (req, res) => {
    const instrutor = listaEstrutores[2];
    
})

app.listen(8000);
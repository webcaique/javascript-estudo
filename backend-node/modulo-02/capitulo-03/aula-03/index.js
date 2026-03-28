const express = require("express");

const app = express();
app.use(express.json())

const listaEstrutores = 
[
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

    const instrutor = listaEstrutores[req.params.id];
    res.json(instrutor)
    
})

// POST
app.post("/instrutores", (req, res) => {
    listaEstrutores.push({
        id: 4,
        nome: req.body.nome,
        idade: req.body.idade,
        areaAtuacao: req.body.areaAtuacao,
    });
    res.send("OK");
});

// PATCH
app.patch("/instrutores/:id", (req, res) => {
    const instrutor = listaEstrutores.find(
        (instrutor) => instrutor.id == Number(req.params.id)
    );

    if(req.body.nome != undefined) instrutor.nome = req.body.nome;
    if(req.body.idade != undefined) instrutor.idade = req.body.idade;
    if(req.body.areaAtuacao != undefined) instrutor.areaAtuacao = req.body.areaAtuacao;

    res.json(instrutor);

})

app.put("/instrutores/", (req, res) => {
    if(req.body != undefined) {
        const instrutor = listaEstrutores.find(
            instrutor => instrutor.id == Number(req.body.id)
        )

        if(instrutor) {
            instrutor.nome = req.body.nome;
            instrutor.idade = req.body.idade;
            instrutor.areaAtuacao = req.body.areaAtuacao;
            res.json(instrutor);
        }
        const newInstrutor = req.body;
        listaEstrutores.push(newInstrutor);
        res.json(newInstrutor);

    }
});

app.delete("/instrutores/:id", (req,res) => {
    const instrutor = listaEstrutores.find(
        instrutor => instrutor.id == Number(req.params.id)
    );
    
    const indice = listaEstrutores.indexOf(instrutor);

    listaEstrutores.splice(indice,1);

    res.json(instrutor);
})

app.listen(8000);
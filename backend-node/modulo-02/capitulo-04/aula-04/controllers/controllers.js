const listaInstrutores = require("../bd.json");

const getAll = (req, res) => {
    res.json(listaInstrutores);
}

const getId = (req, res) => {
    const instrutor = listaInstrutores.find(
        instrutor => instrutor.id === Number(req.params.id)
    )

    if(instrutor !== undefined) res.json(instrutor);
    
}

const postNew = (req, res) => {
    const size = listaInstrutores.length;
    const lastId = listaInstrutores[size - 1].id;

    const newInstrutor = {
        id: size,
        nome: req.body.nome,
        idade: req.body.idade,
        profissao: req.body.profissao,
    }
    
    listaInstrutores.push(newInstrutor);

    res.json(newInstrutor);

}

const patchId = (req, res) => {
    const idx = Number(req.params.id);
    const instrutor = listaInstrutores.find(
        instrutor => instrutor.id === idx
    )

    if(instrutor != undefined) {
        if(req.body.nome !== undefined) instrutor.nome = req.body.nome;
        if(req.body.idade !== undefined) instrutor.idade = req.body.idade;
        if(req.body.profissao !== undefined) instrutor.profissao = req.body.profissao; 
        
        res.json(instrutor);
    }
    res.send("Não enviado");
}

const putId = (req, res) => {
    const idx = Number(req.body.id);

    const instrutor = listaInstrutores.find(
        instrutor => instrutor.id === idx
    )

    if(instrutor !== undefined) {
        instrutor.nome = req.body.nome;
        instrutor.idade = req.body.idade;
        instrutor.profissao = req.body.profissao;
        res.json(instrutor);
    } else {
        listaInstrutores.push(req.body);
        res.json(req.body);
    }
}

const deleteId = (req, res) => {
    const idx = Number(req.params.id);

    const instrutor = listaInstrutores.find(
        instrutor => instrutor.id === idx
    )

    const search = listaInstrutores.indexOf(instrutor);

    listaInstrutores.splice(search, 1);

    res.json(instrutor);
}

module.exports = {
    getAll,
    getId,
    postNew,
    patchId,
    putId,
    deleteId
}
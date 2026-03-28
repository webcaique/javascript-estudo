const express = require("express");

const {
    getAll,
    getId,
    postNew,
    patchId,
    putId,
    deleteId
} = require("./controllers/controllers.js");

const roteador = express();

roteador.get("/instrutores/", getAll);
roteador.get("/instrutores/:id", getId);
roteador.post("/instrutores/", postNew);
roteador.patch("/instrutores/:id", patchId);
roteador.put("/instrutores/", putId);
roteador.delete("/instrutores/:id", deleteId);

module.exports = { roteador }
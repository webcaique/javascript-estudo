const express = require("express")

const app = express();

app.get("/livros/:numero", (req, res) => {
    console.log(req.params.numero);
    res.status(404);
})
const express = require("express");

const app = express();

let contador = 0

app.get("/contador", (req, res) => {
    contador++;
    if(contador > 20) {
        res.send("Já chega filha da puta!");
    }
    res.send(`Contador: ${contador}`);
})

app.get("/zerar", (req, res) => {
    contador = 0;
})

app.get("/add", (req, res) => {
    const valor = Number(req.query.valor);
    contador += valor
    res.send(`Adicionado ${valor}`)
})

app.listen(8000);

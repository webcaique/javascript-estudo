const express = require("express");

const app = express();

app.get("/soma", (req, res) => {
    /*
        Outro forma de passar parâmetros na "url". A url, a .query fica https://site/recuros?query1=2&query2=3
        Aí, para pegar esses parâmetros, precisa de res.query.query1, por exemplo
        .send sempre deve retornar uma string
    */
    console.log(req.query);

})

app.listen(8000);
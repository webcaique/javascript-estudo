// npm i express
// npm i nodemon
// npx nodemon index.js


const express = require("express");

const app = express();// vai retornar uma aplicação

app.get("/", (req, res) => {
    console.log("GET / ");
    res.send("Báh!");
});

app.listen(8000);
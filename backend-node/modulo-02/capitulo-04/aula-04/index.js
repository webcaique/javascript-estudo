const express = require("express");
const { roteador } = require("./router");

const app = express();


app.use(express.json());


// middleware
app.use((req, res, next) => {
    console.log(req.body);
    next();
})


app.use(roteador);
app.listen(8000);

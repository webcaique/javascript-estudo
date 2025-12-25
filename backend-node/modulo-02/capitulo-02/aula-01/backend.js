// Desestruturando um objeto

const pessoa = {
    nome: "João",
    idade: 34,
    cidade: "Salvador",
    profissao: "Dev"
};

const {nome: nome_pessoa, idade, ...outras} = pessoa;

console.log(nome_pessoa);
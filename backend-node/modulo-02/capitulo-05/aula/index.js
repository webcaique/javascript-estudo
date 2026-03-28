const axios = require("axios");

// const getLogra = (cep) => {
//     const responsePromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
//     const logradouroPromise = responsePromise.then(
//         response => response.data.logradouro
//     );
//     return logradouroPromise;
// }

const getLogra = async (cep) => {
    // Sempre retorna uma promessa que resolve no return
    // await => esperar promessas
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data.logradouro;
}

async function getCeps(ceps){
    for(const cep of ceps){
        console.log(await getLogra(cep))
    }
    //Promise.all(list) => receve uma lista de promessas retorna uma promessa com todas as promessas da lista se resolvem
    // quando esperar ela se resolver, ela retorna a resolucão das anteriores
}

getLogra("06622180").then( logradouro => console.log(logradouro));
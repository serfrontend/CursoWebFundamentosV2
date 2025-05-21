import _somar from "./soma.js"

function media(...args) {
    const total = _somar(...args); // usa a função somar que já faz validações
    return total / args.length;
}

function teste() {
    console.log("teste")
}

const IP = "000.000.000.000"

function testarNome() {
    console.log("testarNome do arquivo media")
}

export { media, teste, IP, testarNome }

// function somar() {
//     console.log("somar foi sobreescrito")
// }
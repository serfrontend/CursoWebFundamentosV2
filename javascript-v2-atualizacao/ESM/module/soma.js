export default function somar(...args) {
    if (args.length === 0) {
        throw new Error("A função requer pelo menos um parâmetro.")
    }

    if (args.some(n => typeof n !== "number" || Number.isNaN(n))) {
        throw new Error("Parâmetro inválido:  Todos os parâmetros devem ser números.")
    }

    return args.reduce((total, atual) => total + atual, 0);
}

export function testarNome() {
    console.log("testarNome do arquivo soma.js")
}

function fnInterna() {
    console.log("funcao interna")
}

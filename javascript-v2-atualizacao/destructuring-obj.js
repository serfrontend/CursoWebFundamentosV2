const arr = [1, 2, 4]

//com destructuring
const [n1, n2] = arr

// sem destructuring
// const n1 = arr[0]
// const n2 = arr[1]


const pessoa = { nome: "Daniel", sobrenome: "Morales", empresa: "Serliv" }

const pessoa2 = { nome: "João", sobrenome: "Duarte", idade: 50 }

//sem destructuring
// let empresa = pessoa.empresa
// let nome = pessoa.nome

//com destructuring
let { nome: name, empresa: company, idade = null } = pessoa

console.log(name)
console.log(company)
console.log(idade)

const { nome: nome2, ...resto } = pessoa2
console.log(nome2)
console.log(resto)

function dizOla({ nome, sobrenome = "" }) {
    const nomeCompleto = sobrenome ? `${nome} ${sobrenome}` : nome
    return `Olá ${nomeCompleto}, tudo bem?`
}

const pessoa3 = { nome: "Joana", idade: 20 }

console.log(dizOla({ nome: "Maria", sobrenome: "Duarte", idade: 40 }))
console.log(dizOla(pessoa3))

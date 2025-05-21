let classe = ""
const classesPermitidas = ["mamifero", "reptil", "peixe", "anfibio"]

const cachorro = {
    name: "rex",

    get classe() {
        return classe
    },

    set classe(_classe) {
        if (classesPermitidas.includes(_classe)) {
            classe = _classe
        }
    }
}

console.log(cachorro)

    ; (function () {
        let classe = ""

        const classesPermitidas = ["mamifero", "reptil", "peixe", "anfibio"]

        const gato = {
            name: "miau",

            get classe() {
                return classe
            },

            set classe(_classe) {
                if (classesPermitidas.includes(_classe)) {
                    classe = _classe
                }
            }
        }

        this.gato = gato
    })()

console.log(gato.classe)
gato.classe = "mamifero"
gato.classe = "beluga"
console.log(gato.classe)

function criarAnimal(nome, classe) {
    let _classe = classe
    const _classesPermitidas = ["mamifero", "reptil", "peixe", "anfibio"]

    return {
        nome,

        get classe() {
            return _classe
        },

        set classe(novaClasse) {
            if (_classesPermitidas.includes(novaClasse)) {
                _classe = novaClasse
            }
        }
    }
}

const tartaruga = criarAnimal("lentilha", "reptil")
console.log(tartaruga.nome)
console.log(tartaruga.classe)
tartaruga.nome = "lentona"
console.log(tartaruga.nome)
tartaruga.classe = "teste"
console.log(tartaruga.classe)

class Animal {

    #classe // propriedade privada

    constructor(nome, classe) {
        this.nome = nome
        this.#classe = classe
    }

    get classe() {
        return this.#classe
    }

    set classe(novaClasse) {
        const _classesPermitidas = ["mamifero", "reptil", "peixe", "anfibio"]
        if (_classesPermitidas.includes(novaClasse)) {
            this.#classe = novaClasse
        }
    }

    #metodoPrivado() {
        console.log("metodo privado")
    }

    metodoPublico() {
        console.log("metodo publico")
        this.#metodoPrivado()
    }
}

const nemo = new Animal("nemo", "peixe")
console.log(nemo)
nemo.classe = "mamifero"
console.log(nemo.classe)
nemo.classe = "porta"
console.log(nemo.classe)
nemo.classe = "peixe"
console.log(nemo.classe)
// console.log(nemo.#classe) // ERRO
console.log(nemo.classe)
// nemo.#metodoPrivado() // ERRO
nemo.metodoPublico()
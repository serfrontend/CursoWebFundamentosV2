/*
Crie uma estrutura de dados chamada Produto, que representa um item à venda. 
Esse produto deve possuir:

- Uma propriedade pública chamada "nome".
- Uma propriedade privada chamada itensEstoque, que:
    - Só pode ser modificada internamente.
    - Deve aceitar apenas números inteiros maiores que zero.
    - Nunca pode assumir valores negativos.
- Um método público comprar(quatidade) que reduz a quatidade do estoque.
- Uma propriedade chamada contador, que inicia em zero e soma 1 toda vez que o método comprar() 
for executado com sucesso.
- Um método público adicionarEstoque(quantidade) que aumenta o estoque com a quantidade passada 
(desde que válida).

Sempre que o estoque for consultado (produto.itensEstoque), 
o valor atual do contador deve ser mostrado no console.

Evite variáveis no escopo global
*/

class Produto {
    #itensEstoque
    #contador

    constructor(nome, itensEstoque) {
        this.nome = nome
        this.#contador = 0
        this.#itensEstoque = (typeof itensEstoque === "number" && itensEstoque > 0) ? itensEstoque : 0
    }

    get itensEstoque() {
        console.log(`Compras realizadas com sucesso de ${this.nome}: ${this.#contador}`)
        return this.#itensEstoque
    }

    comprar(quantidade) {
        if (typeof quantidade !== "number" || quantidade <= 0) {
            console.log("Quantidade inválida")
            return
        }
        if (quantidade > this.#itensEstoque) {
            console.log("Estoque insuficiente")
            return
        }
        this.#contador++
        this.#itensEstoque -= quantidade
    }

    adicionarEstoque(quantidade) {
        if (typeof quantidade === "number" && quantidade > 0) {
            this.#itensEstoque += quantidade
        } else {
            console.log("Quantidade inválida")
        }
    }
}

const caneta = new Produto("caneta")
const camiseta = new Produto("camiseta", 10)

console.log(caneta)
console.log(camiseta)

caneta.adicionarEstoque(20)
caneta.comprar(25)
caneta.comprar(5)
console.log(caneta.itensEstoque)

camiseta.comprar(2)
camiseta.comprar(3)
camiseta.adicionarEstoque(10)
console.log(camiseta.itensEstoque)
camiseta.itensEstoque = 1
console.log(camiseta.itensEstoque)
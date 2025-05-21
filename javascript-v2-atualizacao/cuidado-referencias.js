class Carrinho {
    #produtos

    constructor() {
        this.#produtos = []
    }

    adicionar(produto) {
        this.#produtos.push(produto)
    }

    get produtos() {
        return [...this.#produtos]
    }
}

const carrinho = new Carrinho()
carrinho.adicionar("caneta")
carrinho.adicionar("camiseta")
console.log(carrinho.produtos)
carrinho.adicionar("lapis")
console.log(carrinho.produtos)
const ref = carrinho.produtos
console.log(ref)
ref.push("borracha")
console.log(carrinho.produtos)
ref.length = 0
console.log(carrinho.produtos)
/*
Crie uma classe chamada Carrinho que represente um carrinho de compras. Essa classe deve:
- Conter uma propriedade privada chamada #itens, que é um array de nomes de produtos (strings).
- Incluir um método público adicionarItem(nome) que adiciona o nome de um produto ao array #itens.
- Incluir um getter público chamado itens, que retorna o array de itens do carrinho.
- Incluir um método público removerItem(nome), que remove um item do carrinho, caso ele exista.
- Criar um método privado chamado #obterIndice(nome), que retorna o índice do item no array. 
Esse método só deve ser usado internamente pelo removerItem.

Após implementar, instancie um carrinho, adicione alguns itens, acesse o array itens 
diretamente via getter e tente modificá-lo fora da classe. Observe o que acontece.

Dica extra: Se quiser, pense em uma forma de evitar que o array real do carrinho seja alterado externamente.
*/

class Carrinho {
    #itens = []

    adicionarItem(nome) {
        this.#itens.push(nome.toLowerCase())
    }

    get itens() {
        return Array.from(this.#itens)
    }

    removerItem(nome) {
        const indice = this.#obterIndice(nome)
        if (indice >= 0) {
            this.#itens.splice(indice, 1)
        }
    }

    #obterIndice(nome) {
        return this.#itens.indexOf(nome.toLowerCase())
    }
}

const carrinho = new Carrinho()
carrinho.adicionarItem("Camiseta")
carrinho.adicionarItem("caneta")
carrinho.adicionarItem("LAPIS")
console.log(carrinho.itens)
console.log(carrinho.itens.pop())
console.log(carrinho.itens)
carrinho.removerItem("camiseta")
console.log(carrinho.itens)
/**
 * colecao de elementos contendo atributo e valor
 */

let pessoa = {
    nome: "Matheus",
    idade: 26,
    profissao: "programador"
}
console.log(pessoa.nome) // acessando atributos do objeto
console.log(pessoa.idade)
console.log(pessoa.profissao)

console.table(pessoa)

// Abstraindo um objeto do mundo real através de uma classe
class Carro {
    constructor(marca, modelo, cor, anoDeFabricacao) {
      this.marca = marca;
      this.modelo = modelo;
      this.cor = cor;
      this.anoDeFabricacao = anoDeFabricacao
    }
}

let gol = new Carro("Volkswagen", "Gol", "Prata", 2000)
let palio = new Carro("Fiat", "Palio", "Branco", 2010)

console.table(gol)
console.table(palio)


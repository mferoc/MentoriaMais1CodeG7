let x = 10
var variavel = "escopo global" // escopo global

function mostraNumero() { // criando um escopo
  let y = 20
  console.log(y)
  console.log(variavel)
  let num = 1// existe no ciclo de vida de mostraNumero
  function mostraNumeroQuadrado(numero) {
    let num = 0 // existe no ciclo de vida de mostraNumeroQuadrado
    console.log(numero * numero)
  }
  console.log(num)
  mostraNumeroQuadrado(y)
} // fechando um escopo
mostraNumero()

console.log(x)
console.log(x + 1)
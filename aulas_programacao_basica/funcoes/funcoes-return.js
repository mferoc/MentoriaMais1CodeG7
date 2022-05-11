function retornaValor() {
  const texto = "Sou o valor retornado por uma função"
  const novoTexto = "Sou outro texto"
  const novoTextoUpperCase = novoTexto.toUpperCase()
  return texto + novoTextoUpperCase
}

const valorRetornadoPelaFuncao = retornaValor();

console.log(valorRetornadoPelaFuncao)

let palavra = "palavra"
// let palavraUpperCase = ""
//   for(let i = 0; i < p.length; i++) {
//      let charCode = p.charCodeAt(i) - 32
//      palavraUpperCase += String.fromCharCode(charCode)
//   }
function upperCase(p = "default") {
  let palavraUpperCase = ""
  for(let i = 0; i < p.length; i++) {
     let charCode = p.charCodeAt(i) - 32
     palavraUpperCase += String.fromCharCode(charCode)
  }
  return palavraUpperCase;
}

console.log(upperCase(palavra))
console.log(upperCase())

let outraPalavra = "blablabla"
console.log(upperCase(outraPalavra))
// let palavraUpperCase = ""
//   for(let i = 0; i < p.length; i++) {
//      let charCode = p.charCodeAt(i) - 32
//      palavraUpperCase += String.fromCharCode(charCode)
//   }
let p1 = "asdf"
// let palavraUpperCase = ""
//   for(let i = 0; i < p.length; i++) {
//      let charCode = p.charCodeAt(i) - 32
//      palavraUpperCase += String.fromCharCode(charCode)
//   }
let p2 = "sdaf"
// let palavraUpperCase = ""
//   for(let i = 0; i < p.length; i++) {
//      let charCode = p.charCodeAt(i) - 32
//      palavraUpperCase += String.fromCharCode(charCode)
//   }


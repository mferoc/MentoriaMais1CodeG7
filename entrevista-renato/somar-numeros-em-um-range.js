const number = 5

let sum = 0

for (let index = 1; index <= number; index++) {
  sum += index
  // sum = sum + index
}

console.log(sum)

// criar funcao
// sumInRange(range)
// receber um numero e devolver a soma de todos os numeros ate o numero recebido
// validacao = o numero (range) precisa ser maior que 0
// caso nao seja, mostrar uma mensagem de erro (range invalido)
function NumeroInvalidoException(mensagem) {
  this.message = mensagem;
  this.name = "NumeroInvalidoException";
}

const number = "as"

try {
  if (isNaN(Number(number)))
    throw new NumeroInvalidoException("Impossível converter para número")
  console.log("O numero eh " + Number(number) )
} catch (e) {
  console.log("O erro eh: " + e.name)
  console.log("A mensagem de erro eh: " + e.message)
} finally {
  console.log("execucao do finally")
}

// ATIVIDADE
// entrada no cinema
// um filme com classificação indicativa para 18 anos
// pegar a idade de uma pessoa e validar
// se tiver 18 anos acima, pode entrar no cinema
// caso contrário, retornar uma exception
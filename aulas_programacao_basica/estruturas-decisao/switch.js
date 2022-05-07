/**
 * 
 * Criar um menu de opções / escolhas ou avaliar valores de forma simples
 * 
 */
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const opcao = 10;

switch (opcao) {
    case 1:
        console.log("opcao 1")
        break; // parar a execucao na opcao escolhida
    case 2:
        console.log("opcao 2")
        break;
    case 3:
        console.log("opcao 3")
        break;
    case 4:
        //code
        break;
    default:
        console.log("selecione uma opcao valida")
}

// Calculadora de soma e subtracao
const numA = 20;
const numB = 20;
const operacao = '-';

switch (operacao) {
    case '+':
        console.log("soma = " + (parseInt(numA) + parseInt(numB)));
        break;
    case '-':
        console.log("subtracao = " + (parseInt(numA) - parseInt(numB)));
        break;
}

//if (a > b && ||)
let arrayVazio = []
let arrayInit = [8, 9, 10, 11, 12] //arrayInit[0] = 8

// primeiro indice = 0
// ultimo indice = tamanho - 1
// percorrer o array
for (let index = 0; index < arrayInit.length; index++) {
    console.log(`arrayIninit[${index}] = ${arrayInit[index]}`);
}
console.log("tamanho do array = " + arrayInit.length)

for (let num = 1; num < 6; num++) {
    arrayVazio.push(num) // acrescentar um valor no array
}
for (let index = 0; index < arrayVazio.length; index++) {
    console.log(`arrayVazio[${index}] = ${arrayVazio[index]}`);
}
console.log("tamanho do array = " + arrayVazio.length)
arrayVazio.pop() // remover o ultimo elemento do array
arrayVazio.forEach(elemento => {
    console.log(elemento)
});
for (let index = 0; index < arrayVazio.length; index++) {
    console.log(`arrayVazio[${index}] = ${arrayVazio[index]}`);
}
let somaPares = 0;
let somaImpares = 0;

// Implementar comando de repetição (de 1 até 20)
for (let numero = 1; numero <= 20; numero++) {

  const quadrado = numero * numero;

  if (quadrado % 2 === 0) {
    somaPares += quadrado;
  } else {
    somaImpares += quadrado;
  }
  console.log(quadrado);
}
// Implementar os comandos de decisão para verificar números quadrados pares ou ímpares
console.log("A soma dos quadrados pares: " + somaPares);
console.log("A soma dos quadrados ímpares: " + somaImpares);
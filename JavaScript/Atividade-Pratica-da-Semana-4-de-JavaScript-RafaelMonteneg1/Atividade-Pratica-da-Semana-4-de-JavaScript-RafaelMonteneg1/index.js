const prompt = require('prompt-sync')();

const alturas = []

// Implementar a entrada de dados
for (let i = 0; i < 10; i++) {
  const altura = parseFloat(prompt(`Digite a altura : `));
  alturas.push(altura);
}



// Implementar o processamento de dados
for (let i = 0; i < 10; i++) {
  const alturaAtual = alturas[i];
  let alturasMenores = 0;


  // Fazer for dentro de for
  for (let j = 0; j < 10; j++) {
    if (alturas[j] < alturaAtual) {
      alturasMenores++;
    }
  }


  // Implementar a saída de dados
  console.log(`Aluno ${i + 1}: ${alturasMenores} Talturas menores que a sua.`);
}

const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempoServico = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
let podeAposentar = false;

if (idade >= 65 || tempoServico >= 30 || (idade >= 60 && tempoServico >= 25)) {
  podeAposentar = true;
}


// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)
let salarioAposentadoria = 0;

if (podeAposentar) {
  if (tempoServico > 20) {
    salarioAposentadoria = salario * 0.8;
  } else {
    salarioAposentadoria = salario * 0.6;
  }
  // Implementar os comandos de decisão aninhados para garantir o salário de aposentadoria dentro dos limites inferior (R$ 1212,00) e superior (R$ 7087,22)

  const salarioMinimo = 1212.00;
  const salarioMaximo = 7087.22;

  if (salarioAposentadoria < salarioMinimo) {
    salarioAposentadoria = salarioMinimo;
  } else if (salarioAposentadoria > salarioMaximo) {
    salarioAposentadoria = salarioMaximo;
  }
}
if (podeAposentar) {
  console.log("Você pode se aposentar.");
  console.log(`Se salário de aposentado será R$ ${salarioAposentadoria.toFixed(2)}`);
} else {
  console.log("Você não pode se aposentar!.");
}
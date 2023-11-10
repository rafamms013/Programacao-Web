const prompt = require('prompt-sync')();
var array_bicicletas = [];

function inserir_bicicleta(bicicleta) {
  array_bicicletas.push(bicicleta);
  console.log("A Bicicleta foi inserida com sucesso!");
}

function excluir_bicicleta(codigo) {
  for (let i = 0; i < array_bicicletas.length; i++) {
    if (array_bicicletas[i].codigo === codigo) {
      array_bicicletas.splice(i, 1);
      console.log("A Bicicleta foi  removida com sucesso!");
      return;
    }
  }
  console.log(" A Bicicleta não foi  encontrada.");
}

function listar_bicicletas() {
  for (let i = 0; i < array_bicicletas.length; i++) {
    console.log(`O Código da bicicleta é : ${array_bicicletas[i].codigo}`);
    console.log(`A Marca da bicicleta é : ${array_bicicletas[i].marca}`);
    console.log(`O Modelo da bicicleta é : ${array_bicicletas[i].modelo}`);
    console.log(`O Preço da bicicleta é : ${array_bicicletas[i].preco}`);
    console.log('---');
  }
}

do {
  console.log("Sistema de Cadastro de Bicicletas");
  console.log('---------------------------------');
  console.log("Digite 1 para Inserir Bicileta");
  console.log("Digite 2 para Excluir Bicicleta");
  console.log("Digite 3 para Listar Bicicletas");
  console.log("Digite 0 para Sair");
  console.log('--------------------------------');

  var opcao = prompt("Insira sua opção: ");

  if (opcao == '1') {
    console.log("\n\nInserindo Bicicleta...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let marca = prompt("Digite a marca: ");
    let modelo = prompt("Digite o modelo: ");
    let preco = parseFloat(prompt("Digite o preço: "));

    // Neste trecho estamos declarando um objeto
    const bicicleta = {
      codigo: codigo,
      marca: marca,
      modelo: modelo,
      preco: preco
    };
    // Chamar a função inserir
    inserir_bicicleta(bicicleta);
  } else if (opcao == '2') {
    console.log("\n\nExcluindo Bicicleta...\n");
    let codigo = parseInt(prompt("Digite o código da bicicleta: "));
    excluir_bicicleta(codigo);
    // Chamar a função excluir
  } else if (opcao == '3') {
    console.log("\n\nListando Bicicletas...\n");
    // Chamar a função listar
    listar_bicicletas();
  } else if (opcao != '0') {
    console.log("Opção inválida. Tente novamente.");
  }
  else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_bicicleta(bicicleta) {
  // Implementar corpo da função
  array_bicicletas.push(bicicleta);
  console.log("Bicicleta inserida com sucesso!");
}


function excluir_bicicleta(codigo) {
  // Implementar corpo da função
  for (let i = 0; i < array_bicicletas.length; i++) {
    if (array_bicicletas[i].codigo === codigo) {
      array_bicicletas.splice(i, 1);
      console.log("Bicicleta removida com sucesso!");
      return;
    }
  }
  console.log("Bicicleta não encontrada.");

}

function listar_bicicletas() {
  // Implementar corpo da função
  for (let i = 0; i < array_bicicletas.length; i++) {
    console.log('--------------------------------------');
    console.log(`Código: ${array_bicicletas[i].codigo}`);
    console.log(`Marca: ${array_bicicletas[i].marca}`);
    console.log(`Modelo: ${array_bicicletas[i].modelo}`);
    console.log(`Preço: ${array_bicicletas[i].preco}`);
    console.log('--------------------------------------');
  }
}




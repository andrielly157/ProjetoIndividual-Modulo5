import readline from "readline";

const valores = [];
const saida = () => {
  entrada.close();
  valores.sort();
  let saidaString = ``
  for(let cont = 0; cont<valores.length; cont++){
    saidaString += `${valores[cont]} \n`
  }
  console.log(saidaString);
};

const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questao = (pergunta) => {
  return new Promise((resolve, reject) => {
    entrada.question(pergunta, (entrada) => {
      resolve(entrada);
    });
  });
};

while (true) {
  try {
    let entrada = await questao("Digite uma propriedade css: ");
    if (entrada.toUpperCase() != "SAIR") {
      valores.push(entrada);
      continue;
    } else {
      break;
    }
  } catch (err) {
    console.error(err);
  }
}
saida()

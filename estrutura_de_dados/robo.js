class Robo {
  constructor(linha, coluna, ambiente, nome = "Robô") {
    this.nome = nome;
    this.ambiente = ambiente;
    this.linha = linha;
    this.coluna = coluna;
    this.setPos();
  }

  mostrarPosicao() {
    console.table(this.ambiente);
  }

  setPos(linhaOuColuna, adicionar) {
    this.resetPos();
    if (linhaOuColuna == "linha") {
      this.linha = adicionar ? this.linha + 1 : this.linha - 1;
    } else if (linhaOuColuna == "coluna") {
      this.coluna = adicionar ? this.coluna + 1 : this.coluna - 1;
    }
    this.ambiente[this.linha][this.coluna] = 1;
  }

  resetPos() {
    this.ambiente[this.linha][this.coluna] = 0;
  }

  andarFrente() {
    if (this.linha < this.ambiente.length - 1) {
      this.setPos("linha", true);
    } else console.log("Fim da linha! Nada a Abaixo!");
  }

  andarTras() {
    if (this.linha > 0) {
      this.setPos("linha", false);
    } else console.log("Fim da linha! Nada a Acima!");
  }

  virarDireita() {
    if (this.coluna < this.ambiente.length - 1) {
      this.setPos("coluna", true);
    } else console.log("Fim da linha! Nada à Direita!");
  }

  virarEsquerda() {
    if (this.coluna > 0) {
      this.setPos("coluna", false);
    } else console.log("Fim da linha! Nada à Esquerda!");
  }
}

let rb = new Robo(
  0,
  0,
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  "Robô de Teste"
);
var robos = [];
robos.push(rb);

function main() {
  let op;
  do {
    op = parseInt(
      prompt(
        `Escolha uma das opções:\n 1 - Criar Robô\n 2 - Usar Robô (MENU)\n 3 - Sair`
      )
    );

    switch (op) {
      case 1:
        let ambiente = gerarArrey(
          parseInt(prompt("Total Linhas do Ambiente: ")),
          parseInt(prompt("Total Colunas do Ambiente: "))
        );
        let robo = new Robo(
          parseInt(prompt("Linha ocupada: ")),
          parseInt(prompt("Coluna ocupada: ")),
          ambiente
        );
        robos.push(robo);
        break;
      case 2:
        let op_robo = 0;
        do {
          if (op_robo != 0) {
            menu(op_robo - 1);
          }
          op_robo = parseInt(
            prompt(
              `Escolha o robô que deseja utilizar: \n${listaRobos(
                robos
              )} 0 - Sair`
            )
          );
        } while (op_robo != 0);

        break;
    }
  } while (op != 3);
}

function menu(pos_robo) {
  let opcao = 0;
  let meuRobo = robos[pos_robo];
  do {
    opcao = parseInt(
      prompt(`
		1 - Andar para Frente
		2 - Andar para Trás
		3 - Parar
		4 - Virar para Direita
		5 - Virar para Esquerda
		0 - Sair`)
    );

    switch (opcao) {
      case 1:
        meuRobo.andarFrente();
        break;
      case 2:
        meuRobo.andarTras();
        break;
      case 3:
        break;
      case 4:
        meuRobo.virarDireita();
        break;
      case 5:
        meuRobo.virarEsquerda();
        break;
      default:
        opcao = 0;
        console.log("Desligando Robô...");
    }
    if (opcao != 0) meuRobo.mostrarPosicao();
  } while (opcao != 0);
}

main();

function listaRobos(lista) {
  return lista.map((f, x) => `${x + 1} - ${f.nome}\n`);
}

function gerarArrey(l, c) {
  return Array.from({ length: l }, (_, i) => {
    let subarray = [];
    for (let a = 0; a < c; a++) {
      subarray.push(0);
    }
    return subarray;
  });
}

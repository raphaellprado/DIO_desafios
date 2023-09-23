const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Jogo {
  constructor() {
    this.cont_JOGADOR = 0;
    this.cont_CPU = 0;
    this.nome = '';
  }

  iniciarJogo() {
    rl.question('Digite o nome do seu heroi: ', (answer) => {
      this.nome = answer;
      console.log(`O herói ${this.nome} foi criado. Que comecem os jogos.`);
      this.jogar();
    });
  }

  jogar() {
    this.dados();
    this.regra();
    this.resultado();
    this.final();
  }

  dados() {
    console.log("Vamos rodar os dados");
    this.CPU = Math.floor(Math.random() * 6) + 1;
    console.log(`O computador tirou ${this.CPU}`);
    this.JOGADOR = Math.floor(Math.random() * 6) + 1;
    console.log(`${this.nome} tirou ${this.JOGADOR}`);
  }

  regra() {
    if (this.CPU > this.JOGADOR) {
      console.log("O computador Ganhou");
      this.cont_CPU += 1;
    } else {
      console.log(`O ${this.nome} ganhou essa`);
      this.cont_JOGADOR += 1;
    }
  }

  resultado() {
    let xp_log;
    if (this.cont_JOGADOR <= 10) {
      xp_log = "Ferro";
    } else if (this.cont_JOGADOR >= 11 && this.cont_JOGADOR <= 20) {
      xp_log = "Bronze";
    } else if (this.cont_JOGADOR >= 21 && this.cont_JOGADOR <= 50) {
      xp_log = "Prata";
    } else if (this.cont_JOGADOR >= 51 && this.cont_JOGADOR <= 80) {
      xp_log = "Ouro";
    } else if (this.cont_JOGADOR >= 81 && this.cont_JOGADOR <= 90) {
      xp_log = "Diamante";
    } else if (this.cont_JOGADOR >= 91 && this.cont_JOGADOR <= 100) {
      xp_log = "Lendário";
    } else if (this.cont_JOGADOR >= 101) {
      xp_log = "Imortal";
    }
    console.log(`O herói ${this.nome} tem o saldo de ${this.cont_JOGADOR} e está no nível ${xp_log}`);
  }

  final() {
    rl.question('Deseja jogar mais uma partida? S/N ', (answer) => {
      if (answer.toUpperCase() === "N") {
        console.log(`Fim do jogo. Até a próxima ${this.nome}`);
        rl.close();
      } else {
        this.jogar();
      }
    });
  }
}

const jogo = new Jogo();
jogo.iniciarJogo();

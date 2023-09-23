const readline = require('readline');

class Heroi {
  static classes = ["Guerreiro", "Mago", "Monge", "Ninja"];
  static armas = ["espada", "magia", "artes marciais", "shuriken"];

  constructor() {
    this.nome = '';
    this.idade = '';
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async iniciar() {
    this.nome = await this.questionAsync('Digite o nome do seu heroi: ');
    this.idade = await this.questionAsync('Sua Idade: ');
    this.porrada();
  }

  async porrada() {
    console.log('1 - Guerreiro');
    console.log('2 - Mago');
    console.log('3 - Monge');
    console.log('4 - Ninja');
    this.tipo = parseInt(await this.questionAsync('Escolha sua classe: ')) - 1;
    console.log(`O herói ${this.nome} criado pelo jogador com ${this.idade} anos de idade foi criado. Sua Classe é ${Heroi.classes[this.tipo]}. Que comecem os jogos.`);
    this.atacar();
  }

  atacar() {
    console.log(`O ${Heroi.classes[this.tipo]} atacou usando ${Heroi.armas[this.tipo]}`);
    this.final();
  }

  async final() {
    const resposta = await this.questionAsync('Deseja jogar mais uma partida? S/N ');
    if (resposta.toUpperCase() === 'N') {
      console.log(`Fim do jogo. Até a próxima ${this.nome}`);
      this.rl.close();
    } else {
      this.porrada();
    }
  }

  questionAsync(question) {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }
}

const heroi = new Heroi();
heroi.iniciar();
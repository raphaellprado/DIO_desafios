const readline = require('readline-sync');

let nome = readline.question('Digite o nome do seu heroi: ');
let exp = 0;
let xp_log = '';

console.log(`O herói ${nome} tem ${exp} pontos de experiência.`);

function Jogo() {
    console.log('Vamos treinar esse heroi?');
    console.log('1 - Vamos comer Salada - Acrescentar 1.000 pontos de experiência');
    console.log('2 - Levantar barras de FERRO acrescenta 5.000 pontos de experiência');
    console.log('3 - Comer um quadrado de Chocolate acrescenta 10.000 pontos de experiência');
    console.log("4 - Comer uma barra de Chocolate - 'Se uma quadrado dá isso de pontos...'");
    console.log('5 - Cansei da brincadeira');
    Regra();
}

function Regra() {
    let regra = readline.question('Escolha uma das opções: ');
    
    if (regra === '1') {
        console.log('Escolha saudável');
        exp += 1000;
    } else if (regra === '2') {
        console.log(`Aqui é BODYBUILDER disse o ${nome}`);
        exp += 5000;
    } else if (regra === '3') {
        console.log('Cuidado...');
        console.log('Não vai se perder nesse mundo...');
        exp += 10000;
    } else if (regra === '4') {
        console.log('Olha a besteira que você fez');
        exp += Math.floor(Math.random() * (1000 - (-10000) + 1)) + (-10000);
    } else if (regra === '5') {
        console.log('Vamos sair');
        Final();
    } else {
        console.log(`Escolha uma opção válida, ${nome}`);
        return;
    }
    
    console.log(`Você escolheu ${regra}, atribuindo ${exp} pontos ao ${nome}.`);
    Xp();
}

function Xp() {
    if (exp === 0) {
        xp_log = 'FRANGO';
    } else if (exp > 0 && exp < 1000) {
        xp_log = 'Ferro';
    } else if (exp >= 1000 && exp < 2000) {
        xp_log = 'Bronze';
    } else if (exp >= 2000 && exp < 6000) {
        xp_log = 'Prata';
    } else if (exp >= 6000 && exp < 7000) {
        xp_log = 'Ouro';
    } else if (exp >= 7000 && exp < 8000) {
        xp_log = 'Platina';
    } else if (exp >= 8000 && exp < 9000) {
        xp_log = 'Ascendente';
    } else if (exp >= 9000 && exp < 10000) {
        xp_log = 'Imortal';
    } else if (exp >= 10000) {
        xp_log = 'Radiante';
    }
    
    Final();
}

function Final() {
    console.log(`O Herói ${nome} está no nível ${xp_log} com ${exp} pontos de experiência.`);
    if (xp_log !== 'Radiante') {
        Jogo();
    }
}

Jogo();

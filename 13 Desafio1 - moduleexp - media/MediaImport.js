// 1 - faça um programa que receba a média de um aluno.
// caso a média seja < 5 imprima "Reprovado"
// caso a média seja >= 5 e < 7 imprima "Recuperação"
// caso a média seja >= 7 imprima "Aprovado"

// exemplo: 
// Entrada : 5.5
// Saida: Recuperação

const { entradas, gets, print } = require('./funcoes-auxilares');

let media = [];
let soma = entradas.reduce((accumulator,value) => accumulator + value,0);
media.push(soma / entradas.length)

if (media < 5) {
    print('Reprovado');
  } else if (media >= 5 && media < 7 ) {
    print('Recuperação');
  } else {
    print('Aprovado');
  }

print(media);
const {entradas, gets, print} = require('./funcoes-auxiliares(DIO).js');

const numerosSorteados = [];

for (let i = 0; i < entradas.length; i++) {
    numerosSorteados.push(gets());
}

const maiorValor = Math.max(...numerosSorteados);
const menorValor = Math.min(...numerosSorteados);

print(numerosSorteados);
print(`Menor numero do Sorteio: ${menorValor}`);
print(`Maior numero do Sorteio: ${maiorValor}`);







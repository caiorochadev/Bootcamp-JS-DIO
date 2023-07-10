const {entradas, gets, print } = require('./funcoes-auxilares');

let numerosPares = [];
let numerosImpares = [];

for (let i = 0; i < entradas.length; i++) {
    let resto = gets() % 2;
    resto == 0 ? numerosPares.push(entradas[i]) : numerosImpares.push(entradas[i]);
}

let maiorNumeroPar = Math.max(...numerosPares);
let menorNumeroImpar = Math.min(...numerosImpares);

print(`Dentro desse array [${entradas}]`);
print(`Entre os numeros pares: ${numerosPares} o maior é o: ${maiorNumeroPar}`);
print(`Entre os números impares: ${numerosImpares} o menor é o: ${menorNumeroImpar}`);
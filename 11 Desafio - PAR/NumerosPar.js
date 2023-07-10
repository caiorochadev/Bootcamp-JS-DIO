/*crie um programa que seja capaz de percorrer uma lista de numeros e imprima 
cara numero par encontrado.*/


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function gerarNumeroPar() {

    let numerosPares = [];
    for (let i = 0; i < numeros.length; i++) {
        resto = numeros[i] % 2;

        if (resto === 0) {
            numerosPares.push(`${numeros[i]} é numero par`);
        }
    }
    return numerosPares;
}
console.log(gerarNumeroPar());



// const numerosPares = [];

// for (let i = 0; i < 10; i++) {
//     const numeroPar = i % 2 === 0;
//     if (numeroPar) {
//         numerosPares.push(i);
//     }
// }

// console.log(numerosPares);

// const numerosPares = [];

// for (let i = 0; i < 10; i = i + 2) {
//     numerosPares.push(i);
// }

// console.log(numerosPares);
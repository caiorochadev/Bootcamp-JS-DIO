/*Crie um programa que dado um número imprima a sua tabuada.*/

/*chamada por parametro*/
function calcularTabuada(numero){
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}
calcularTabuada(5);
calcularTabuada(6);

/*chamada por variavel*/
// const numero = 5;

// function calcularTabuada(){
//     for (let i = 1; i <= 10; i++) {
//          console.log(`${numero} x ${i} = ${numero * i}`)
//     }
// }
// calcularTabuada();



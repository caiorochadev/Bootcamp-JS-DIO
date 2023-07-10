const entradas = [5, 50, 10, 98, 23,24,25,26,100];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto)
}

/*exportação module recebe obj*/
module.exports = {
    entradas,
    gets,
    print
};

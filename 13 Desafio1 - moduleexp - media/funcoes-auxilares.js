const entradas = [3, 3, 3, 3, 7]

let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {
    entradas,
    gets,
    print
}
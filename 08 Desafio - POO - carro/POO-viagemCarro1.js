class Car {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoPercurso(combustivel, distanciaKM) {
        return (combustivel / this.gastoMedio) * distanciaKM;
    }

    gerarEconomico() {
        if (gastoCivic < gastoClio) {
            return (`- O ${civic.marca} é mais economico`)
        } else if (gastoCivic > gastoClio) {
            return (`- O ${clio.marca} é mais economico`)
        } else {
            return ('- Não tem diferença de economia nos 2 carros')
        }
    }

}

const civic = new Car("Honda Civic", "branco", 8);
const clio = new Car("Renault clio", "verde", 12);
const celta = new Car("CHEVROLET Celta", "preto", 15);

const gastoCivic = civic.calcularGastoPercurso(5, 1000);
const gastoClio = clio.calcularGastoPercurso(5, 1000);
const gastoCelta = celta.calcularGastoPercurso(5, 1000);

console.log(`Gasto com Civic = R$${gastoCivic.toFixed(2)}`);
console.log(`Gasto com Clio = R$${gastoClio.toFixed(2)}`);
console.log(`Gasto com Celta = R$${gastoCelta.toFixed(2)}`);
console.log(civic.gerarEconomico());
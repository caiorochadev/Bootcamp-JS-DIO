class Car {
    marca;
    cor;
    combustivel;
    gastoMedio;
    distanciaKMKM;
    gastoEmReal;

    constructor(marca, cor, gastoMedio,combustivel,distanciaKM) {
        this.marca = marca;
        this.cor = cor;
        this.combustivel = combustivel;
        this.gastoMedio = gastoMedio;
        this.distanciaKM = distanciaKM;
        this.gastoEmReal = (combustivel / gastoMedio) * distanciaKM;
    }

    descricao(combustivel, distanciaKM) {
        return(` - ${this.marca} ${this.cor} com combustivel a R$ ${this.combustivel.toFixed(2)}, precisando rodar ${this.distanciaKM} km, vai ser gasto R$${this.gastoEmReal.toFixed(2)}`)
    }

    gerarEconomico() {
        if (civic.gastoEmReal < clio.gastoEmReal) {
            return (`- O ${civic.marca} é mais economico`)
        } else if (civic.gastoEmReal > clio.gastoEmReal) {
            return (`- O ${clio.marca} é mais economico`)
        } else {
            return ('- Não tem diferença de economia nos 2 carros')
        }
    }
}

const civic = new Car("Honda Civic", "branco", 8, 5, 1000);
const clio = new Car("Renault clio", "verde", 12, 5 , 1000);
const celta = new Car("CHEVROLET Celta", "verde", 15, 5 , 1000);

console.log(civic.descricao());
console.log(clio.descricao());
console.log(celta.descricao());
console.log(civic.gerarEconomico());
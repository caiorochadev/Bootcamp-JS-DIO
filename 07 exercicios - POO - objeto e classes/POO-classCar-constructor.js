class Car { /*criando a classe*/
    marca;
    modelo;
    cor;
    ano;
    dono;
    idadeDoCarro;
    descricao() { /*usando metodo*/
        console.log(`O carro de ${this.dono} é um ${this.marca} ${this.modelo}, na cor ${this.cor}, Ano ${this.ano} 
        idade do carro em Anos: ${this.idadeDoCarro}`) /*this para pegar a chave do obj*/
    }

    constructor(marca, modelo, cor, ano, dono) { //torna obrigatorios esses parametros
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.dono = dono;
        this.idadeDoCarro = 2023 - ano //
    }

}

const carroDeCleiton = new Car('Renault', 'Clio', 'verde', 2004, 'Cleiton'); //
const carroDeCaio = new Car('Honda', 'Civic', 'Branca', 2021, 'Caio');
const carroDeAdriele = new Car('toyota', 'corolla', 'preta', 2023, 'Adriele');

carroDeCleiton.descricao();
carroDeCaio.descricao();
carroDeAdriele.descricao()
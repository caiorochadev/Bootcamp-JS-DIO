class Car { /*criando a classe*/
    marca;
    modelo;
    cor;
    ano;
    dono;

    descricao() { /*usando metodo*/
        console.log(`O carro de ${this.dono} é um ${this.marca} ${this.modelo}, na cor ${this.cor}, Ano ${this.ano}`) /*this para pegar a chave do obj*/
    }
}

const carroDeCleiton = new Car();

carroDeCleiton.marca = 'renault';
carroDeCleiton.modelo = 'Clio';
carroDeCleiton.cor = 'verde';
carroDeCleiton.ano = 2004;
carroDeCleiton.dono = 'cleiton';

const carroDeCaio = new Car();

carroDeCaio.marca = 'Honda';
carroDeCaio.modelo = 'Civic';
carroDeCaio.cor = 'Branca';
carroDeCaio.ano = 2021;
carroDeCaio.dono = 'Caio';


const carroDeAdriele = new Car();

carroDeAdriele.marca = 'Toyota';
carroDeAdriele.modelo = 'Corolla';
carroDeAdriele.cor = 'Preto';
carroDeAdriele.ano = '2023';
carroDeAdriele.dono = 'Adriele';

carroDeCleiton.descricao();
carroDeCaio.descricao();
carroDeAdriele.descricao();

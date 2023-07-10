class pessoa {
    nome;
    sobreNome;
    idade;
    profissao;
    dados() {
        console.log(`Meu nome é ${this.nome} ${this.sobreNome}, tenho ${this.idade} anos e sou ${this.profissao}`)
    }

    constructor(nome, sobreNome, idade, profissao) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

function gerarMaisVelho(p1,p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome} ${p1.idade - p2.idade} Ano`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velha que ${p1.nome} ${p2.idade - p1.idade} Ano`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const Caio = new pessoa('Caio', 'Rocha', 26, 'Programador');
const Adriele = new pessoa('Adriele', 'Coelho', 27, 'Enfermeira');

gerarMaisVelho(Caio, Adriele);



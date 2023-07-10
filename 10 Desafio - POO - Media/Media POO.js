
class Aluno {
    nome;
    profissao;
    NotaMatematica = [];
    NotaHistoria = [];

    constructor(nome, profissao) {
        this.nome = nome;
        this.profissao = profissao;
    }
    
    calcularMediaMatematica() {  /*por parametros*/
        let soma = 0;
        for (let i = 0; i < this.NotaMatematica.length; i++) {
            soma = soma + this.NotaMatematica[i];
        }
        return soma / this.NotaMatematica.length;
    }
    calcularMediaHistoria() {  /*por parametros*/
        let soma = 0;
        for (let i = 0; i < this.NotaHistoria.length; i++) {
            soma = soma + this.NotaHistoria[i];
        }
        return soma / this.NotaHistoria.length;
    }

}

const caio = new Aluno('Caio', 'programador');
caio.NotaMatematica = [8,7,10];
caioMediaMatematica = caio.calcularMediaMatematica().toFixed(2);
caio.NotaHistoria = [9,8,10];
caioMediaHistoria = caio.calcularMediaHistoria().toFixed(2);

const joao = new Aluno('Joao', 'engenheiro');
joao.NotaMatematica = [1,6,8];
joaoMediaMatematica = joao.calcularMediaMatematica().toFixed(2);
joao.NotaHistoria = [4,8,10];
joaoMediaHistoria = joao.calcularMediaHistoria().toFixed(2);

console.log(`- Caio Media Matemática: ${caioMediaMatematica}`);
console.log(`- Caio Media Historia: ${caioMediaHistoria}`);
console.log(`- Joao Media Historia: ${joaoMediaMatematica}`);
console.log(`- Joao Media Historia: ${joaoMediaHistoria}`);














// console.log(calcularMedia([10,7,6,8,8]));


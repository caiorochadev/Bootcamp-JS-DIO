// Crie uma classe para representar pessoas.
// para cada pessoa teremos os atributos nome,peso e altura.
// as pessoas devem ter a capacidade de dizer o valor do seu imc
// imc = peso / (altura *altura)
// instancie uma pessoa chamada josé que tenha 70kg de peso e 1,75 de altura
// e peça para josé dizer o valor do seu imc.

class Pessoa {
    nome;
    peso;
    altura;

    gerarIMC(situacaoIMC) {
        return this.peso / (this.altura * this.altura);
    }

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    situacaoIMC(){
        const imc = this.gerarIMC();
        if (imc < 18.5) {
            return ( 'Abaixo do peso')
          } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal')
          } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso')
          } else if (imc >= 30 && imc < 40) {
            return ('Obeso')
          } else if (imc > 40) {
            return ('Obesidade grave')
          } else {
            return ('Desculpe, precisamos dos seus dados validos')
          }

    }
}

const jose = new Pessoa('José', 70, 1.75);
const caio = new Pessoa('Caio', 84, 1.80);

const imcCaio = caio.gerarIMC();
const imcJose = jose.gerarIMC();

const situacaoJose = jose.situacaoIMC();
const situacaoCaio = caio.situacaoIMC();

console.log(`IMC de Caio: ${imcCaio.toFixed(2)} - ${situacaoCaio}`);
console.log(`IMC de José: ${imcJose.toFixed(2)} - ${situacaoJose}`);
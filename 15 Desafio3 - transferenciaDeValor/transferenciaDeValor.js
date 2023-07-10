// 3 -  faça um programa que calcule e imprima o salário a ser transferido
// para um funcionario.
// - para realizar o calculo receba o valor bruto do salario e adicione os
// beneficios.
// o salario a ser transferido é calculado a seguinte maneira:

// valor bruto do salário - percentual de imposto mediante a faixa salarial
// + adicional dos beneficios

// Para calcular o percentual de imposto segue as aliquotas:

// de R$ 0.00 a R$1100.00 = 5%
// de R$ 1100.01 a R$2500.00 = 10%
// Maior que R$2500.00 = 15%
// Exemplo:
// Entrada:
//     2000
//     250

// Saída:
//     2050.00

const { gets, print} = require('./funcoes-auxilares');

let salario = gets();
let IR = calculoIR();
let bonus = 250;

function pagamento(){
    return (`Salario: R$${salario} \n IR: - R$${IR} \n Bonus : R$${bonus} \n Valor a receber : R$${calculoTransferencia()}` )
}

function calculoTransferencia(){
    return (salario - IR) + bonus;
}

function calculoIR(){
    if(salario < 1100){
        return salario * (5/100);
    }else if(salario > 1100.01 && salario <= 2500){
        return salario * (10/100);
    }else{
        return salario * (15/100);
    }
}

print(pagamento());

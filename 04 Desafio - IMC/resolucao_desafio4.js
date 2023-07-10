
function calcularIMC(peso, altura) {
  let imc = (peso / Math.pow(altura, 2)).toFixed(2)

  return situacaoIMC(imc);
}

function situacaoIMC(imc) {
  if (imc < 18.5) {
    return (`${imc} - Abaixo do peso`)
  } else if (imc >= 18.5 && imc < 25) {
    return (`${imc} - Peso normal`)
  } else if (imc >= 25 && imc < 30) {
    return (`${imc} - Acima do peso`)
  } else if (imc >= 30 && imc < 40) {
    return (`${imc} - Obeso`)
  } else if (imc > 40) {
    return (`${imc} - Obesidade grave`)
  } else {
    return ('Desculpe, precisamos dos seus dados validos')
  }
}
console.log(calcularIMC(84,1.80));


// const peso = 80;
// const altura = 1.80;

// const imcCalculo = peso / Math.pow(altura,2); //math lib de matematica, pow função estatica de exponencial
// const imc = imcCalculo.toFixed(1);


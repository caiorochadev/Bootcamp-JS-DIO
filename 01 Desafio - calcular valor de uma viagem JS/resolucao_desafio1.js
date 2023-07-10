

const precoCombustivel = 5.79;
const gastoMedioVeiculo = 12;
const distanciaKM = 300;

function gerarGastoKM(precoCombustivel,gastoMedioVeiculo){
  return precoCombustivel / gastoMedioVeiculo;
}

function calcularViagem(distanciaKM, gastoKM){
  let gastoPorKM = gerarGastoKM(precoCombustivel,gastoMedioVeiculo)

  let gastoViagem = distanciaKM * gastoPorKM ;
  return (` - Será gasto R$${gastoViagem} na sua viagem de ida \n - Ida e volta ficará R$${gastoViagem * 2}`);
}
console.log(calcularViagem(distanciaKM,gerarGastoKM(5,12)))



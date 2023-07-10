
const precoGasolina = 5;
const precoEtanol = 2.94;

const gastoMedioGasolina = 10;
const gastoMedioEtanol = 6;

const distancia = 300;

function viajarGasolina(precoGasolina,gastoMedioGasolina){
  return (precoGasolina / gastoMedioGasolina) * distancia;
}

function viajarEtanol(precoEtanol,gastoMedioEtanol){
  return  (precoEtanol / gastoMedioEtanol) * distancia;
}

function formaDeViajar(){
  let usarGasolina = viajarGasolina(precoGasolina,gastoMedioGasolina);
  let usarEtanol = viajarEtanol(precoEtanol,gastoMedioEtanol);

    if (usarGasolina < usarEtanol) {
      return(` - Vamos usar Gasolina, vamos gastar R$${usarGasolina} na viagem, se fosse a Etanol iriamos gastar R$${usarEtanol}`)
    } else if(usarEtanol < usarGasolina) {
      return(` - Vamos usar Etanol , vamos gastar R$${usarEtanol} na viagem, se fosse a Gasolina iriamos gastar R$${usarGasolina}`)
    } else {
    return("Temos valores iguais para os 2 combustiveis")
  }
}

console.log(viajarEtanol(precoEtanol,gastoMedioEtanol));
console.log(viajarGasolina(precoGasolina,gastoMedioGasolina));
console.log(formaDeViajar());







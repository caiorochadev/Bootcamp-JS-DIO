const precoEtiqueta = 100;
const formaDePagamento = 2;

function aplicarDesconto(precoEtiqueta, desconto) {
  return precoEtiqueta - (precoEtiqueta * desconto / 100);
}
function aplicarJuros(preco, juros) {
  return precoEtiqueta + (precoEtiqueta * juros / 100);
}

function gerarPreçoFinal(pagamento, valor) {

  if (formaDePagamento == 1) {
    return(aplicarDesconto(precoEtiqueta,10));
  } else if (formaDePagamento == 2) {
    return(aplicarDesconto(precoEtiqueta,15));
  } else if (formaDePagamento == 3) {
    return(aplicarDesconto(precoEtiqueta,0));
  } else if (formaDePagamento == 4) {
    return(aplicarJuros(precoEtiqueta,10))
  } else {
    return("Escolha uma das formas de pagamento acima");
  }
}
console.log(gerarPreçoFinal());

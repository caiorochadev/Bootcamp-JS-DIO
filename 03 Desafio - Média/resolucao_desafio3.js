function pegarValores(){
  let aluno = document.getElementById("aluno").value;
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let n3 = parseFloat(document.getElementById("n3").value);

  let resultado = calcularMedia(n1,n2,n3)
  
  situacao(resultado, aluno)

  document.getElementById('meuAluno').innerHTML = aluno ? `Ola ${aluno}`: "Olá aluno";
}

function calcularMedia(num1,num2,num3){
  
  let somaAluno = (num1 + num2 + num3)/3;
  return somaAluno
}

function situacao(mediaAluno, meuAluno){
  if (mediaAluno > 7) {
    document.getElementById("mediaAluno").innerHTML = `O Aluno ${meuAluno} passou de semestre, nota ${mediaAluno.toFixed(2)}`;
  } else if (mediaAluno > 5 && mediaAluno <= 7) {
    document.getElementById("mediaAluno").innerHTML = `O Aluno ${meuAluno} ficou na recuperação, nota ${mediaAluno.toFixed(2)}`;
  } else {
    document.getElementById("mediaAluno").innerHTML = `O Aluno ${meuAluno} Reprovou, nota ${mediaAluno.toFixed(2)}`;
  }
}

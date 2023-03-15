var temTexto = false;
function calculaIMC(peso, altura){
  var imc = (peso / (altura*altura));
  return imc;
}
function verificaIMC(){
if (temTexto == true){
  const paragrafo = document.getElementById("p2__js");
  paragrafo.remove();
}
var peso = document.getElementById("pesoid").value;
var altura = document.getElementById("altura").value;
if(peso || peso != '' && altura || altura != ''){
    var imc = calculaIMC(peso, altura);
    const paragrafo = document.createElement("p");
    const elemento = document.getElementById("p__js");
    paragrafo.setAttribute('id', 'p2__js');
    paragrafo.setAttribute('class', 'paragrafo__js__paragrafo1');
    elemento.appendChild(paragrafo);
      for (let x = 0; x < 1; x++){
        if (imc < 16){
          criaTexto("O seu IMC é " + Math.round(imc) + ", cuidado o seu estado é de Magreza Grave");
          temTexto = true;
          break;
        }
        if (imc < 17){
          criaTexto("O seu IMC é " + Math.round(imc) + ", cuidado o seu estado é de Magreza moderada");
          temTexto = true;
          break;
        }
        if (imc < 18.5){
          criaTexto("O seu IMC é " + Math.round(imc) + ", cuidado o seu estado é de Magreza leve");
          temTexto = true;
          break;
        }
        if (imc < 25){
          criaTexto("O seu IMC é " + Math.round(imc) + ", parabéns o seu estado é Saudavel");
          temTexto = true;
          break;
        }
        if (imc < 30){
          criaTexto("O seu IMC é " + Math.round(imc) + ", cuidado o seu estado é de Sobrepeso");
          temTexto = true;
          break;
        }
        if (imc < 35){
          criaTexto("O seu IMC é " + Math.round(imc) + ", cuidado o seu estado é de Obesidade Grau I");
          temTexto = true;
          break;
        }
        if (imc < 40){
          criaTexto("O seu IMC é " + Math.round(imc) + ", cuidado o seu estado é de Obesidade Grau II");
          temTexto = true;
          break;
        }
        if (imc > 40){
          criaTexto("O seu IMC é " + Math.round(imc) + ", cuidado o seu estado é de Obesidade Grau III");
          temTexto = true;
          break;
        }
      }
      function criaTexto(texto){
        const linha = document.createTextNode(texto);
        paragrafo.appendChild(linha);
    }
  } else {
    alert("Informações incorretas, por favor verifique os dados!");
    temTexto = false;
}
}
document.querySelector(".conteudo__divisao__calculos__botao").onclick = verificaIMC;

//PEGANDO OS ELEMENTOS 
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');
let card7 = document.getElementById('card7');
let card8 = document.getElementById('card8');
let card9 = document.getElementById('card9');
let card10 = document.getElementById('card10');
let card11 = document.getElementById('card11');
let card12 = document.getElementById('card12');
let card13 = document.getElementById('card13');
let card14 = document.getElementById('card14');
let card15 = document.getElementById('card15');
let icon = document.getElementById('icon');
let botao = document.getElementById('botao');


//CRIANDO VARIAVEIS 
let prato = "";
let valorPrato = 0;
let cocoquinha= "";
let valorCoca = 0;
let sobremesa = "";
let valorSobremesa = 0;
let total = 0;
let cont1 = 0;
let cont2 = 0;
let cont3 = 0;
let valor = 0;


let nome = prompt('QUAL SEU NOME: ');
let endereco = prompt('INFORME SEU ENDEREÇO: ');




//SESSÃO ONE!!!!!! ===================== EU SEI QUE NÃO É A MELHOR FORMA!
function selecionar1(){
    card1.classList.add('corbordCard');
    card2.classList.remove('corbordCard');
    card3.classList.remove('corbordCard');
    card4.classList.remove('corbordCard');
    card4.classList.remove('corbordCard');
    icon.classList.add('icon_visivel')
    prato = 'Frango Yin Yang';
    valorPrato = 14.90;
    cont1 = 1;
}
function selecionar2(){
  card2.classList.add('corbordCard');
  card1.classList.remove('corbordCard');
  card3.classList.remove('corbordCard');
  card4.classList.remove('corbordCard');
  card4.classList.remove('corbordCard');
  prato = 'Cassoulet';
  valorPrato = 20,00;
  cont1 = 1;
}
function selecionar3(){
  card3.classList.add('corbordCard');
  card1.classList.remove('corbordCard');
  card2.classList.remove('corbordCard');
  card4.classList.remove('corbordCard');
  card5.classList.remove('corbordCard');
  prato = 'Strogonoff';
  valorPrato = 15.99;
  cont1 = 1;
}
function selecionar4(){
  card4.classList.add('corbordCard');
  card3.classList.remove('corbordCard');
  card5.classList.remove('corbordCard');
  card1.classList.remove('corbordCard');
  card2.classList.remove('corbordCard');
  prato = 'Carne suína assada';
  valorPrato = 20.00;
  cont1 = 1;
}
function selecionar5(){
  card5.classList.add('corbordCard');
  card4.classList.remove('corbordCard');
  card1.classList.remove('corbordCard');
  card2.classList.remove('corbordCard');
  card3.classList.remove('corbordCard');
  prato = 'Fettuccine';
  valorPrato = 30.00;
  cont1 = 1;
}

///SESSÃO TWO =============================================================================

function selecionar6(){
  card6.classList.add('corbordCard');
  card7.classList.remove('corbordCard');
  card8.classList.remove('corbordCard');
  card9.classList.remove('corbordCard');
  card10.classList.remove('corbordCard');
  cocoquinha = 'Cocacola';
  valorCoca = 3.00;
  cont2 = 1;
}
function selecionar7(){
  card7.classList.add('corbordCard');
  card6.classList.remove('corbordCard');
  card8.classList.remove('corbordCard');
  card9.classList.remove('corbordCard');
  card10.classList.remove('corbordCard');
  cocoquinha = 'Guarana Jesus';
  valorCoca = 3.00;
  cont2 = 1;
}
function selecionar8(){
  card8.classList.add('corbordCard');
  card6.classList.remove('corbordCard');
  card7.classList.remove('corbordCard');
  card9.classList.remove('corbordCard');
  card10.classList.remove('corbordCard');
  cocoquinha = 'Suco natural';
  valorCoca = 5.00;
  cont2 = 1;
}
function selecionar9(){
  card9.classList.add('corbordCard');
  card6.classList.remove('corbordCard');
  card7.classList.remove('corbordCard');
  card8.classList.remove('corbordCard');
  card10.classList.remove('corbordCard');
  cocoquinha = 'Fanta';
  valorCoca = 3.00;
  cont2 = 1;
}
function selecionar10(){
  card10.classList.add('corbordCard');
  card6.classList.remove('corbordCard');
  card7.classList.remove('corbordCard');
  card8.classList.remove('corbordCard');
  card9.classList.remove('corbordCard');
  cocoquinha = 'Haineken';
  valorCoca = 30.00;
  cont2 = 1;
}

//SESSÃO THREE =============================================================================
function selecionar11(){
  card11.classList.add('corbordCard');
  card12.classList.remove('corbordCard');
  card13.classList.remove('corbordCard');
  card14.classList.remove('corbordCard');
  card15.classList.remove('corbordCard');
  sobremesa = 'Pudim';
  valorSobremesa = 12.00;
  cont3 = 1;
  }
function selecionar12(){
  card12.classList.add('corbordCard');
  card11.classList.remove('corbordCard');
  card13.classList.remove('corbordCard');
  card14.classList.remove('corbordCard');
  card15.classList.remove('corbordCard');
  sobremesa = 'Coxinha';
  valorSobremesa = 2.50;
  cont3 = 1;
}
function selecionar13(){
  card13.classList.add('corbordCard');
  card12.classList.remove('corbordCard');
  card11.classList.remove('corbordCard');
  card14.classList.remove('corbordCard');
  card15.classList.remove('corbordCard');
  sobremesa = 'Pão de queijo';
  valorSobremesa = 1.50;
  cont3 =  1;
  }
function selecionar14(){
  card14.classList.add('corbordCard');
  card12.classList.remove('corbordCard');
  card13.classList.remove('corbordCard');
  card11.classList.remove('corbordCard');
  card15.classList.remove('corbordCard');
  sobremesa = 'Soverte na taça';
  valorSobremesa = 9.90;
  cont3 =  1;
  }
function selecionar15(){
  card15.classList.add('corbordCard');
  card12.classList.remove('corbordCard');
  card13.classList.remove('corbordCard');
  card14.classList.remove('corbordCard');
  card11.classList.remove('corbordCard');
  sobremesa = 'Pastel de frango';
  valorSobremesa = 4.80;
  cont3 =  1;
  }
 
//fUNÇÃO PARA FAZER O PEDIDO
function fazerPedido(){
  total = valorCoca +  valorPrato + valorSobremesa;
  valor = cont1 + cont2 + cont3;
  valor.toFixed(2)
  let msg = encodeURIComponent
  (`
  *Olá, gostaria de fazer o pedido:*
   *- Prato:* ${prato}                ${valorPrato}
   *- Bebida:* ${cocoquinha}          ${valorCoca}
   *- Sobremesa:* ${sobremesa}        ${valorSobremesa}
     *Total:* *R$${total}*
   --------------------------------------------------
   *Nome:* ${nome};
   *Endereço:* ${endereco}
   `)
   
  if(valor == 3){
    window.open('https://wa.me/5598984358019?text=' + msg);
  }
  
}
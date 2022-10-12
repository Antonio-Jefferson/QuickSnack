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

//SESSÃO ONE!!!!!! ===================== eu SEI QUE NÃO É A MELHOR FORMA!
function selecionar1(){
    card1.classList.add('corbordCard');
    card2.classList.remove('corbordCard');
    card3.classList.remove('corbordCard');
    card4.classList.remove('corbordCard');
    card4.classList.remove('corbordCard');
    icon.classList.add('icon_visivel')
    prato = 'comida1';
    valorPrato = 10.50;
    cont1 = 1;
}
function selecionar2(){
  card2.classList.add('corbordCard');
  card1.classList.remove('corbordCard');
  card3.classList.remove('corbordCard');
  card4.classList.remove('corbordCard');
  card4.classList.remove('corbordCard');
  prato = 'comida2';
  valorPrato = 12.50;
  cont1 = 1;
}
function selecionar3(){
  card3.classList.add('corbordCard');
  card1.classList.remove('corbordCard');
  card2.classList.remove('corbordCard');
  card4.classList.remove('corbordCard');
  card5.classList.remove('corbordCard');
  prato = 'coomida3';
  valorPrato = 15.00;
  cont1 = 1;
}
function selecionar4(){
  card4.classList.add('corbordCard');
  card3.classList.remove('corbordCard');
  card5.classList.remove('corbordCard');
  card1.classList.remove('corbordCard');
  card2.classList.remove('corbordCard');
  prato = 'coomida4';
  valorPrato = 13.50;
  cont1 = 1;
}
function selecionar5(){
  card5.classList.add('corbordCard');
  card4.classList.remove('corbordCard');
  card1.classList.remove('corbordCard');
  card2.classList.remove('corbordCard');
  card3.classList.remove('corbordCard');
  prato = 'coomida5';
  valorPrato = 8.50;
  cont1 = 1;
}

///SESSÃO TWO =============================================================================

function selecionar6(){
  card6.classList.add('corbordCard');
  card7.classList.remove('corbordCard');
  card8.classList.remove('corbordCard');
  card9.classList.remove('corbordCard');
  card10.classList.remove('corbordCard');
  cocoquinha = 'coco1';
  valorCoca = 5.50;
  cont2 = 1;
}
function selecionar7(){
  card7.classList.add('corbordCard');
  card6.classList.remove('corbordCard');
  card8.classList.remove('corbordCard');
  card9.classList.remove('corbordCard');
  card10.classList.remove('corbordCard');
  cocoquinha = 'coco2';
  valorCoca = 3.50;
  cont2 = 1;
}
function selecionar8(){
  card8.classList.add('corbordCard');
  card6.classList.remove('corbordCard');
  card7.classList.remove('corbordCard');
  card9.classList.remove('corbordCard');
  card10.classList.remove('corbordCard');
  cocoquinha = 'coco3';
  valorCoca = 1.00;
  cont2 = 1;
}
function selecionar9(){
  card9.classList.add('corbordCard');
  card6.classList.remove('corbordCard');
  card7.classList.remove('corbordCard');
  card8.classList.remove('corbordCard');
  card10.classList.remove('corbordCard');
  cocoquinha = 'coco4';
  valorCoca = 2.00;
  cont2 = 1;
}
function selecionar10(){
  card10.classList.add('corbordCard');
  card6.classList.remove('corbordCard');
  card7.classList.remove('corbordCard');
  card8.classList.remove('corbordCard');
  card9.classList.remove('corbordCard');
  cocoquinha = 'coco5';
  valorCoca = 2.50;
  cont2 = 1;
}

//SESSÃO THREE =============================================================================
function selecionar11(){
  card11.classList.add('corbordCard');
  card12.classList.remove('corbordCard');
  card13.classList.remove('corbordCard');
  card14.classList.remove('corbordCard');
  card15.classList.remove('corbordCard');
  sobremesa = 'pudin1';
  valorSobremesa = 12.50;
  cont3 = 1;
  }
function selecionar12(){
  card12.classList.add('corbordCard');
  card11.classList.remove('corbordCard');
  card13.classList.remove('corbordCard');
  card14.classList.remove('corbordCard');
  card15.classList.remove('corbordCard');
  sobremesa = 'pudin1';
  valorSobremesa = 10.00;
  cont3 = 1;
}
function selecionar13(){
  card13.classList.add('corbordCard');
  card12.classList.remove('corbordCard');
  card11.classList.remove('corbordCard');
  card14.classList.remove('corbordCard');
  card15.classList.remove('corbordCard');
  sobremesa = 'pudin1';
  valorSobremesa = 15.00;
  cont3 =  1;
  }
function selecionar14(){
  card14.classList.add('corbordCard');
  card12.classList.remove('corbordCard');
  card13.classList.remove('corbordCard');
  card11.classList.remove('corbordCard');
  card15.classList.remove('corbordCard');
  sobremesa = 'pudin1';
  valorSobremesa = 4.50;
  cont3 =  1;
  }
function selecionar15(){
  card15.classList.add('corbordCard');
  card12.classList.remove('corbordCard');
  card13.classList.remove('corbordCard');
  card14.classList.remove('corbordCard');
  card11.classList.remove('corbordCard');
  sobremesa = 'pudin1';
  valorSobremesa = 2.50;
  cont3 =  1;
  }

// Fazer o pedido !!!
total = valorCoca +  valorPrato + valorSobremesa;
valor = cont1 + cont2 + cont3;

console.log(valor)
console.log(sobremesa)
console.log(prato)
console.log(cocoquinha)
console.log(valorCoca)
console.log(valorSobremesa)
console.log(valorPrato)

let msg = encodeURIComponent
(`
Olá, gostaria de fazer o pedido:
 - Prato:${prato} valor:R$${valorPrato}
 - Bebida:${cocoquinha} valor:R$${valorCoca}
 - Sobremesa:${sobremesa} valor:R$${valorSobremesa}
 Total: R$${total}`)

function fazerPeido(){
 if(valor == 0){
  window.open('https://wa.me/5598984358019?text=' + msg);
 }
  
}
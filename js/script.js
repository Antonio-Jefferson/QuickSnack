// let pedido01 = document.getElementById('pedido_01');
// let pedido02 = document.getElementById('pedido_02');
// let pedido03 = document.getElementById('pedido_03');
// let pedido04 = document.getElementById('pedido_04');
// let pedido05 = document.getElementById('pedido_05');
// let pedido06 = document.getElementById('pedido_06');
// let preco = 0;
// let nomePedido = "";
// let mensagem = "";
// function pedir(){

//     pedido01.style.borderColor = 'red';
//     pedido02.style.borderColor = '#fff';
//     preco = 15.00;
//     nomePedido = 'X-tudo';

// }
// function pedir02(){

//     pedido01.style.borderColor = '#fff';
//     pedido02.style.borderColor = 'red';
//     preco = 20.00;
//     nomePedido = 'X-Salada'; 

// }
// //Sessão 02
// function pedir03(){

//     pedido03.style.borderColor = 'red';
//     pedido04.style.borderColor = '#fff';
//     preco = preco + 5.00;
//     nomePedido = nomePedido + ', batata';

// }
// function pedir04(){

//     pedido03.style.borderColor = '#fff';
//     pedido04.style.borderColor = 'red';
//     preco = preco + 10.00;
//     nomePedido = nomePedido + ', milkshake'; 

// }
// //Sessão 3
// function pedir05(){

//     pedido05.style.borderColor = 'red';
//     pedido06.style.borderColor = '#fff';
//     preco = preco + 10.00;
//     nomePedido = nomePedido + ', picole'; 

// }
// function pedir06(){

//     pedido05.style.borderColor = '#fff';
//     pedido06.style.borderColor = 'red';
//     preco = preco + 10.00;
//     nomePedido = nomePedido + ', refrigerante'; 

// }

// Fazer o pedido !!!
let msg = encodeURIComponent(`Olá, gostaria de fazer o pedido:
 - Prato: Frango Yin Yang 
 - Bebida: Coquinha Gelada
  - Sobremesa: 
  Pudim Total: R$ 27.70`)
  
function fazerPeido(){

  window.open('https://wa.me/5598984358019?text=' + msg);
  console.log(msg)
}
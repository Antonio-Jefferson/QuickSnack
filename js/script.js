
// Selecionando Prato 
let comida;
let coca;
let sobremesa;
let total = 100;
function selecionarComida(comidaSelecionada){
  
  const comidaAnterior = document.querySelector('.bordComida')
  if(comidaAnterior !== null){
    comidaAnterior.classList.remove('bordComida')
  }  

  comidaSelecionada.classList.add('bordComida')
  comida = comidaSelecionada.innerHTML;
  ativarBTN()
  console.log(comida)
}
//Selecionando a Bebiba
function selecionarCoca(cocaSelecionada){
  const bebibaAnterior = document.querySelector('.bordCoca')
    if(bebibaAnterior !== null){
      bebibaAnterior.classList.remove('bordCoca');
    }

  cocaSelecionada.classList.add("bordCoca");
  coca = cocaSelecionada.innerHTML;
  ativarBTN()

}
//Selecionando a Sobremesa
function selecionarSobremesa(sobremesaSelecionada){
  const sobremesaAnterior = document.querySelector('.bordSobremesa');
  if(sobremesaAnterior !== null){
    sobremesaAnterior.classList.remove('bordSobremesa')
  }

  sobremesaSelecionada.classList.add("bordSobremesa")
  sobremesa = sobremesaSelecionada.innerHTML;
  ativarBTN()
 
}




//Ativar botão de fazer pedido
function ativarBTN() {
  const comida = document.querySelector(".bordComida");
  const coca = document.querySelector(".bordCoca");
  const sobremesa = document.querySelector(".bordSobremesa");
  const botao = document.querySelector(".btn");
  let cont = 0;

  if (comida !== null) {
    cont += 1;
  }
  if (coca !== null) {
    cont += 1;
  }
  if (sobremesa !== null) {
    cont += 1;
  }
  if (cont === 3) {
    //troca botão de finalizar pedido
    botao.innerHTML = "Fechar Pedido";
    botao.classList.remove("btn");
    botao.classList.add("btn_pedido_fechado");
  }
}

function fazerPedido(){
  const nome = prompt("QUAL SEU NOME?:");
  const endereco = prompt("ENDEREÇO DE ENTREGA: ")
  // total = valorCoca +  valorPrato + valorSobremesa;
  // valor = cont1 + cont2 + cont3;
  // total.toFixed(2)
  let msg = encodeURIComponent
  (`
  *Olá, gostaria de fazer o pedido:*
   *- Prato:* ${comida}               
   *- Bebida:* ${coca}        
   *- Sobremesa:* ${sobremesa}       
     *Total: R$${total}*
   ---------------------------------
  *Nome:* ${nome};
  *Endereço:* ${endereco}
   `)
  window.open('https://wa.me/5598985856218?text=' + msg);
}
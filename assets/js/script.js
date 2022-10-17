
//Variaveis Globais
let comida;
let coca;
let sobremesa;
let total;
let valorComida;
let valorBebida;
let valorSobremesa;


// Selecionando Prato 
function selecionarComida(comidaSelecionada){
  const iconAnterior = document.querySelector('.comidas .icon_visivel')
  const comidaAnterior = document.querySelector('.bordComida')
  if(comidaAnterior !== null){
    comidaAnterior.classList.remove('bordComida')
  }  
  comidaSelecionada.classList.add('bordComida')

  //Pegando o nome da Comida
  const nomeComida = document.querySelector('.bordComida > h3')
  comida =  nomeComida.innerHTML; 

  //pegar valor da comida
  const valorPrato = document.querySelector('.bordComida > h4 > strong')
  valorComida = valorPrato.innerHTML;

  //Fazer icon aparecer
  const icon = document.querySelector('.bordComida .icon_invisivel');
  icon.classList.add('icon_visivel')
  if(iconAnterior !== null){
    iconAnterior.classList.remove('icon_visivel')
  } 

  ativarBTN()

}
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

//Selecionando a Bebiba =================================================================
function selecionarCoca(cocaSelecionada){
  const iconAnterior = document.querySelector('.bebidas .icon_visivel')
  const bebibaAnterior = document.querySelector('.bordCoca')
    if(bebibaAnterior !== null){
      bebibaAnterior.classList.remove('bordCoca');
    }
  cocaSelecionada.classList.add("bordCoca");


  //Pegando o nome da bebida 
  const nomeCoca = document.querySelector('.bordCoca > h3')
  coca =  nomeCoca.innerHTML;

  //Pegar valor da bebida
  const valorCoca = document.querySelector('.bordCoca > h4 > strong')
  valorBebida = valorCoca.innerHTML;

  const icon = document.querySelector('.bordCoca .icon_invisivel');
  icon.classList.add('icon_visivel')
  if(iconAnterior !== null){
    iconAnterior.classList.remove('icon_visivel')
  } 
  ativarBTN()

}
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/ 

//Selecionando a Sobremesa ================================================================
function selecionarSobremesa(sobremesaSelecionada){
  const iconAnterior = document.querySelector('.sobremesas .icon_visivel')
  const sobremesaAnterior = document.querySelector('.bordSobremesa');
  if(sobremesaAnterior !== null){
    sobremesaAnterior.classList.remove('bordSobremesa')
  }
  sobremesaSelecionada.classList.add("bordSobremesa")

  //Pegando o nome da Sobremesa 
  const nomeSobremesa = document.querySelector('.bordSobremesa > h3')
  sobremesa =  nomeSobremesa.innerHTML;

  //Pegar valor da Sobremesa
  const valorSobre = document.querySelector('.bordSobremesa > h4 > strong')
  valorSobremesa = valorSobre.innerHTML;

  //Fazer icon aparecer 
    const icon = document.querySelector('.bordSobremesa .icon_invisivel');
    icon.classList.add('icon_visivel')
    if(iconAnterior !== null){
      iconAnterior.classList.remove('icon_visivel')
  } 
  ativarBTN()
 
}
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

//Ativar botão de fazer pedido
function ativarBTN() {
  const comida = document.querySelector(".bordComida");
  const coca = document.querySelector(".bordCoca");
  const sobremesa = document.querySelector(".bordSobremesa");
  
  const botao = document.querySelector(".btn");
  if (comida !== null) { //Vericando se a 'Comida' é null, se for diferente de null quer dizer que foi selecionada!
    botao.innerHTML ="Você tem mais 2 opções"
    if (coca !== null) {
      botao.innerHTML = "Você só tem mais 1 opção para escolher"
      if (sobremesa !== null) {
          //troca botão de finalizar pedido
          botao.innerHTML = "Fechar Pedido";
          botao.classList.remove("btn");
          botao.classList.add("btn_pedido_fechado");
        }
      }
    }
  }
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
function telaConfirmacao(){
  if(comida !== undefined && coca !== undefined && sobremesa !== undefined){
        const tela = document.querySelector('.teladeConfirmacao');
        tela.classList.remove('teladeConfirmacao');
      
        const p_comida = document.querySelector('.p_comida');
        const p_valorComida = document.querySelector('.p_valorComida');
        p_comida.innerHTML = comida;
        p_valorComida.innerHTML = valorComida;

        const p_bebida = document.querySelector('.p_bebida');
        const p_valorBebida = document.querySelector('.precoBebida');
        p_bebida.innerHTML = coca;
        p_valorBebida.innerHTML = valorBebida;

        const nomeSobremesa = document.querySelector('.nomeSobremesa');
        const precoSobremesa = document.querySelector('.precoSobremesa');
        nomeSobremesa.innerHTML = sobremesa;
        precoSobremesa.innerHTML = valorSobremesa;

        const valorTotal = document.querySelector('.precoTotal');
        //Tirando a "," e colocando o "." usando o replace()
        const nu1 = valorComida.replace(',','.');
        const nu2 = valorBebida.replace(',','.');
        const nu3 = valorSobremesa.replace(',', '.');
        //Convertendo para número e fazendo a soma
        total = Number(nu1) + Number(nu2) + Number(nu3);
        const precoFinal = total.toFixed(2).replace('.', ',')
        valorTotal.innerHTML = precoFinal;
  }
}
//Funcção para enviar o pedido!!! ==================================================
function fazerPedido(){
  //Perguntando o endereço e o nome do usuario
  const nome = prompt("QUAL SEU NOME?:");
  const endereco = prompt("ENDEREÇO DE ENTREGA: ")

  //Tirando a "," e colocando o "." usando o replace()
  const nu1 = valorComida.replace(',','.');
  const nu2 = valorBebida.replace(',','.');
  const nu3 = valorSobremesa.replace(',', '.');
  //Convertendo para número e fazendo a soma
  total = Number(nu1) + Number(nu2) + Number(nu3);
  
  let msg = encodeURIComponent
  (`
  Olá, gostaria de fazer o pedido:*
  - Prato: ${comida}               
  - Bebida: ${coca}        
  - Sobremesa: ${sobremesa}       
  Total: R$${total.toFixed(2)}

  Nome: ${nome};
  Endereço: ${endereco}
   `)
  window.open('https://wa.me/5598985856218?text=' + msg);
}

function cancelar(){
  const semIdeiaDeNomeMais = document.querySelector('.idetificador');
  semIdeiaDeNomeMais.classList.remove('visivel');
  semIdeiaDeNomeMais.classList.add('teladeConfirmacao')
}
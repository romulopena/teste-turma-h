//criei a função tocaSomAplausos e usamos o .play para tocar o som do id
function tocaSom(idElementoAudio){
   document.querySelector(idElementoAudio).play(); 
}
//criei constante listaDeTeclas e busquei a classe coletiva tecla
 const listaDeTeclas = document.querySelectorAll(".tecla");
//criei a variavel contador
let contador = 0;
//criei o laço de repetição while chamando cada botão da lista de teclas pelo contador
while(contador < listaDeTeclas.length){
   const efeito = listaDeTeclas[contador].classList[1];
   const idAudio = "#som_" + efeito;
   listaDeTeclas[contador].onclick = function(){
      tocaSom(idAudio);
   }
   contador = contador + 1;
   //console.log(contador);
}
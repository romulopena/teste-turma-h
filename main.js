//criei a função tocaSomAplausos e usamos o .play para tocar o som do id
function tocaSom(idElementoAudio){
   const elemento = document.querySelector(idElementoAudio);
   if (elemento && elemento.localName === 'audio'){
   elemento.play();
}else{
   console.log("Elemento não encontrado ou inválido");
   }

}
//criei constante listaDeTeclas e busquei a classe coletiva tecla
 const listaDeTeclas = document.querySelectorAll(".tecla");
//criei o laço de repetição while chamando cada botão da lista de teclas pelo contador
//trocado o while pelo for e inserido o contador e a atualização dele
for(let contador = 0;contador < listaDeTeclas.length;contador = contador + 1){
   const tecla = listaDeTeclas[contador];
   const efeito = tecla.classList[1];
   const idAudio = `#som_${efeito}`;
   tecla.onclick = function(){
      tocaSom(idAudio);
   }
   tecla.onkeydown = function(evento){
      if (evento.code === 'Space' || evento.code === 'Enter'){
         tecla.classList.add('ativa');
      }
      
   }
   tecla.onkeyup = function(){
      tecla.classList.remove('ativa');
   }
}
function tocaSomAplausos(){
   document.querySelector('#som_tecla_aplausos').play(); 
}
document.querySelector('.tecla_aplausos').onclick = tocaSomAplausos;

 const listaDeTeclas = document.querySelectorAll(".tecla");
 listaDeTeclas[0].onclick = tocaSomAplausos;
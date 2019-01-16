//para que se cambie de pagina por medio de Boton
//primer boton de Empezar
//const botonEmpezar= documet.getElementById('empezar');
//botonEmpeza.addEventListener("onclick", botonA);
//function boton(){
  //welcome.classList.add ("hideElement");
  //condiciones.classList.remove("hideElement");
//}
const empezar = document.getElementById("empezar");
empezar.onclick= function (){

// Capturar el título de "Mensaje Cifrado"
const titulo = document.getElementById("titulo");
titulo.classList.remove("hideTitle");

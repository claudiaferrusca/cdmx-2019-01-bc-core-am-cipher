//mi boton de empezar me despliega otra pagina
const empezar = document.getElementById("empezar");
empezar.onclick= function(){

// Capturar el título de "Mensaje Cifrado"
const titulo = document.getElementById("titulo")
titulo.classList.remove("hideTitle")

const empiezaJuego= document.getElementById("empezar").value
  document.getElementById("pantalla1").style.display="none"
  document.getElementById("pantalla2").style.display="none"
  document.getElementById("pantalla2").style.display="block"
}

//mi contador debe de mostrarse en la pantalla2
let valor = document.getElementaryById ("recorredor").value;
localStorage.setItem("captarNumero",valor);
location.href="pantalla2";
const boton = document.getElementById("enviar");
boton.addEventListener("click", window.cipher.encode)

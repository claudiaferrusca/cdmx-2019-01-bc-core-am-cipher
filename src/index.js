//crear todas las variblesb

const box= document.getElementById('box');
const corredor= document.getElementById('recorredor');
//let string = '';
//let offset = 0;
//const code= document.getElementById('code').value;
//const encode= document.getElementById('encode');

//const compartir= document.getElementById('compartir');
//const reiniciar= document.getElementById('reiniciar');


document.getElementById('code').addEventListener('click', encriptar);
function encriptar() {
    let offset = parseInt(corredor.value);
   let string= box.value;

 document.getElementById("result").innerHTML=window.cipher.encode(offset,string);
//console.log(offset+string);

}
//decode
document.getElementById('decode').addEventListener('click', descifrar);
function descifrar() {
    let offset = parseInt(corredor.value);
   let string= box.value;

 document.getElementById("result").innerHTML=window.cipher.decode(offset,string);
}

//activa mi boton de limpiar

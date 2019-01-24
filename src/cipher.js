window.cipher = {
  // ...
  encode: (offset,string) => {
let espacios= parseInt(offset);
    let final = "";

    //let mayus= string.toUpperCase();
    for (let i = 0; i<string.length; i++) {
      let ascii = string [i].charCodeAt();
      //CODIFICAR
    //  let formula = (ascii-65+offset)%26+65;
      //let palabra = String.fromCharCode(formula);

//para minusculas encriptar
if (ascii >= 65 && ascii <= 90){

  let formula = (ascii -65 + espacios)%26+65;
  let resultado = String.fromCharCode(formula);
  final= final + resultado;

}
else if (ascii >= 97 && ascii <= 122) {
  let minusculas= (ascii - 97 + espacios)%26 +97;

  let resultado = String.fromCharCode(minusculas);
  final= final+resultado;

}
else {
  let resultado= String.fromCharCode(ascii);
  final= final+ resultado;

}
       //concatenar

    //}
    //let resultado= offset+string;
  }

return final;

},

// encode: (offset,string) =>{
  // return offset+string
   //mensaje a cifrar
//variable de offset
//let texto = "box";
//capturar espacios
//let espacios= par

  // for (let i= 0; 1 <= string.length; i++) {


    //let valor = string.charCodeAt(i);
    //console.log (valor)






   //alert ("aunque no lo crean estoy funcionado")

 //},
 decode: (offset,string) => {
   let espacios= parseInt(offset);

   let final= "";
  // let mayus= string.toUpperCase();
   for (let i = 0; i<string.length; i++) {
     let ascii = string.charCodeAt(i);
//CODIFICAR
if( ascii >= 65 && ascii <=90){

  let formula = (ascii+65-espacios)%26+65;
  let palabra = String.fromCharCode(formula);
final= final+palabra;
}
      //concatenar
   //descifrar minúscula
   else if (ascii >= 97 && ascii <= 122) {
     let minusculas= (ascii - 122 - espacios)%26 +122;

     let palabra = String.fromCharCode(minusculas);
    final = final+palabra;

   }
   else {
     let palabra= String.fromCharCode(ascii);
     final= final+ palabra;

   }
   //let resultado= offset+string

}
return final;
}
}

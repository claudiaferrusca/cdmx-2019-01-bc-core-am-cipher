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
  console.log(ascii, minusculas)
  let resultado = String.fromCharCode(minusculas);
  final= final+resultado;
console.log(String.fromCharCode(minusculas));
}
else {
  let resultado= String.fromCharCode(ascii);
  final= final+ resultado;

}
       //concatenar

    //}
    //let resultado= offset+string;
  }
console.log (final);
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
   let resultado= "";
   let mayus= string.toUpperCase();
   for (let i = 0; i<mayus.length; i++) {
     let ascii = mayus.charCodeAt(i);
     //CODIFICAR
     let formula = (ascii+65-offset)%26+65;
     let palabra = String.fromCharCode(formula);
      //concatenar
resultado= resultado+palabra;
   }
   //let resultado= offset+string
return resultado;
}
}

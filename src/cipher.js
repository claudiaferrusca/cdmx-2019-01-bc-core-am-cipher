window.cipher = {
  // ...
  encode: (offset,string) => {
    let resultado="";

    let mayus= string.toUpperCase();
    for (let i = 0; i<mayus.length; i++) {
      let ascii = mayus.charCodeAt(i);
      //CODIFICAR
      let formula = (ascii-65+offset)%26+65;
      let palabra = String.fromCharCode(formula);
       //concatenar
resultado= resultado+palabra;
    //}
    //let resultado= offset+string;
return resultado;
}
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

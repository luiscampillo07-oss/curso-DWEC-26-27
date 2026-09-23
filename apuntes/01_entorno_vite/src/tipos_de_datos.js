/*funcion que le pase como parametro un numero en grados celsius y lo transforme a grados kelvin.

version 1, una basura, demasiado verboso
function celsiusToKelvin1(celsius){
let kelvin = celsius +273,15
return celsius
}

version 2, priorizamos menor numero de lineas
function celsiusToKelvin2(celsius){
return celsius + 273,15
}

tryhard edition, usamos arrow function
const celToKel = (celsius) => {
 return celsius + 273.15
}

full tryhard edition, arrow function pro max
const cToK = (c) => c + 273.15
*/

//funcion que le pase como parámetro 2 números y me los orden
const ordenarDosNumeros = (a,b) => a>b ? a : b;

/*
//funcion que pase de celsius a kelvin, pero comprobando que celsius es un numero, que la temperatura no puede estar por debajo del 0 ABSOLuto, y que el resultado me lo das con sólo 2 cifra decimal
isNaN -> is Not a Number --> significa que no es un numero valido
buscar como truncar un numero a 2 decimales
Para truncar a 2 decimales tenemos que usar la funcion ".toFixed(numero para truncar)" 
*/
const celsiusToKelvin = (celsius) => {
  if(isNan(celsius)){
    console.log("Error")
  }else{
    if(celsius>=(-273.15)){
      console.log("Es menor que cero absoluto");
    }else{
      let kelvin = celsius + 273.15
      return kelvin.toFixed(2);
    } 
  }
}



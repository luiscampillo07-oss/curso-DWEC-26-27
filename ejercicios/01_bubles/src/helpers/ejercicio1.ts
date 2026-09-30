
//#Enunciado --> Crear una funcion que mientras sea verdad compruebe todos los numeros de un array pasado como parametro,
//guarde los positivos en un array llamado positivos, los negativos en negativos y que calcule cada uno de ellos.
//Autor: Luis CC.
//Declaracion de variables

function comprobarNumeros(numeros: number[]){
  const positivos:number[] = []
  const negativos:number[] = []
  let sumaPos:number = 0
  let sumaNeg:number = 0

  for(const numero of numeros){
    if(numero >= 0){
      positivos.push(numero)
      sumaPos += numero
    } else{
      negativos.push(numero)
      sumaNeg += numero
    }
  }
  //antes de salir retornamos los valores pedidos
  return {
    positivos,
    negativos,
    sumaPos,
    sumaNeg
  }
}
//---------------------Inicio de la aplicacion------------------------
 
const datos:number[]= [1,-10,25,11,9,5,-6,8,-5,9,12,-10]

const resultado = comprobarNumeros(datos)
console.log("El array de positivos es: " , resultado.positivos)
console.log("------Suma del array de positivos: ", resultado.sumaPos)
console.log(`El array de negativos es: ${resultado.negativos}`)
console.log(`------Suma del array de negativos: ${resultado.sumaNeg}`)

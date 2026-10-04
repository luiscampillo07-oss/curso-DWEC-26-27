// Enunciado: Ejercicio de uso de arrays y tipados
// Autor: Jose Luis CC.
// Investigación: Fuentes consultadas

//Como tipamos un array
const activos: boolean[] = [true, false, true, false];
const nombres: string[] = ["Pepe", "Luis", "Carlos"];

//Nueva forma
const edades: Array<number> = [12, 22, 18];
const precios = [65, 34, 23];

console.log(typeof precios);

//Arrays con mas de un tipo
const valores: (string | number)[] = ["Ana", 25, "Luis", 56];

//Comodo pero para empezar mejor no
const persona: [string, number] = ["Ana", 45]

//Leer elementos de un array
console.log(nombre[0]): // <-- "Pepe"
nombres[0] = "Don Pepe";

//Insertar y eliminar en ultimo logar y al comienzo del array
nombres.push("Sara"); //--> El metodo push modifica el contenido del array (mutar), cosa que esta prohibido en React
console.log(nombres.pop()); //--> Elimina la ultima posicion del array, muta el array y devuelve el nuevo array modificado
nombres.unshift("Pedro"); //--> Para insertar al principio devuelve la nueva longuitud del array
nombres.shift(); //--> Inserta al comienzo del array y devuelve el arrayç

//Metodos que mutan y no mutan
//push(),pop(),shift(),unshift(),splice(),sort(),reverse --> Mutan el array

//Metodo slice() --> Devuelve una parte del array sin mutar el array
const numeros: number[] = [10, 20, 30, 40, 50];
const parte: Array<number> = numeros.slice(1, 4); // [20,30,40] --> Coge la primera posicion la (1) pero no la ultima posicion la (4)

//Metodo splice() --> Elimin, añade, sustituir elementos del array
numeros.splice(1, 2) //--> Devuelve [20, 30] y nemeros se queda con [10,40,50] 

//*********Copiar Arrays Spread Operator *****************
const num: number[] = [1, 2, 3];
const copia: number[] = ...num // --> tiene una copia con [1,2,3]
const copia2 = [...copia, 6];

function setAlumnos([...alumnos, nuevoAlumno])

//Recorrer un array:
//for(let i=0;i<=num.length-1;i++)

//for of --> se utiliza cuando solo queremos el valor
for (const precio of precios) {
  console.log(precio)
}

//forEach() --> Se usa mucho en React
//Se usara el forEach() cada vez que queramos hacer algo con cada uno de los elementos de un array.
//Se parece al map, pero el map es mas potente en muchos casos
precios.forEach((precio: number, indice: number) => {
  console.log(`Precio al cuadrado: ${precio ** 2} - Posicion: ${indice}`)
})

//Metodos que usan funciones CallBack
//forEach(), map(), filter(),find() --> ****muy importante****
//Un callback es una funcion por tanto esos metodos reciben como parametro una funcion

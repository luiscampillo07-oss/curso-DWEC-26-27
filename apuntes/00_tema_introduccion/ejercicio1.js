//Ejercicio 1 de JavaScript
console.log('Hola, Mundo');

//Tipo de datos
//String y number
//Sirven con --> '' - "" - `comillas francesas`
console.log(`Hola a todos`);

/*Palabras para definir:
var *Importante: no utilizar var*
let es de ambito local
const es constante
*/

//let nombre = "Luis";
//let apellidos = "CC"
//let aniosTrabajados = 25;
//console.log(`Hola a todos me llamo ${nombre}, ${apellidos} t llevo trabajando ${aniostrabajados}`);

//Conversion de tipos
//console.log(typeoff(String(aniosTrabajados)));
//console.log(typeoff(Number(apellidos)));

//Validaciones
//== --> Significa que el valor de la izquierda es igual que el de la derecha ignorando el tipo
//=== --> Significa que el valor y tipo del de la izquierda es igual euq el valor y tipo del de la derecha
//'5' == 5 --> devuelve true *peligro publico*
//'5' === 5 --> devuelve false

//Ternarias
//evaluacion_expresion ? verdadero : falso
const edad = 23 //conversion a numero
edad > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")

//*ADVERTENCIA*
//"2" +   = '20'
//2 + "2" = '22'
//2 +   = 2
//Cambia el Numbre a String y el resultado pasa a ser String

//*EJERCICIO*
//Dada la edad, los minutos, y los segundos. Comprobar: si la edad es un numero positivo y mayor que 18, y comprobar si la hora es valida dentro de nuestro sistema de numeracion.

let edadEjercicio = 18;
let minutos = 45;
let segundos = 100;
edadEjercicio > 0 && edadEjercicio >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");
minutos > 0 && minutos < 60 ? console.log("Es un numero de minutos valido") : console.log("No es un numero valido de minutos");
segundos > 0 && segundos  < 60 ? console.log("Es un numero de segundos valido") : console.log("No es un numero de segundos valido");


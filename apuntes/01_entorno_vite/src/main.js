document.querySelector('#app').innerHTML = `
<section id="center">
<h1>Hola Mundo</h1>
  </section>
<div class="ticks"></div>
<section id="spacer"></section>
`
setupCounter(document.querySelector('#counter'))

//2
console.log(typeof 7)
console.log(typeof '7')
console.log(typeof null)
console.log('7' + 2)
console.log('7' - 2)
console.log(10 % 3)
console.log(Number(''))
console.log(Number('14px'))

//3
const nombre = Luis
const edad = 19
const edadString = '19'
const grupo = '2ºDAW'
const programa = false

//4
//Para calcular segundos, minutos y horas usaremos un let
//puesto que no queremos que esta variable sea constante

//5
/*
let numeroDeAlumnos = 24
numeroDeAlumnos = 'veinticinco'
console.log(numeroDeAlumnos)
El error de tipos que tenemos es que el primer parametro
que le pasamos es un Number y el segundo un String*/

//Resolucion
let numeroDeAlumnos = 24
numeroDeAlumnos = String(numeroDeAlumnos)
console.log(numeroDeAlumnos)

//6
/*const intentos = 1
intentos = intentos + 1
console.log(`Intentos: ${intentos}`)
El problema que nos da es que al aasignarle el tipo const
a internos este no puede cambiar, es decir, que no
podra aumentar ni disminuir si usamos el nombre de esa variable. Por eso la mejor opcion
es usar el let, pues este tipo de variable nos permitira
cambiarla mas adelante en nuestro codigo
*/

//Resolucion
let intentos = 1
intentos = intentos + 1
console.log(`Intentos: ${intentos}`)

//7
/*const cantidadTexto = '5'
const extra = 2
console.log(`Total: ${cantidadTexto + extra}`)
El programa muestra 52 porque transforma el 2 a un String
a causa de la variable cantidadTexto
*/
const cantidadTexto = 5
const extra = 2
console.log(`Total: ${cantidadTexto + extra}`)

//8
/*Number('hola')
Number('Infinity')
0 / 0

Aunque una variable sea de tipo Number no puede ser usada 
como cantidad debido a que el contenidode la variable no
tiene valor numerico en el caso de hola, y Infinity.
Por otro lado el 0/0 es un NaN not a valid Number puesto que 
esta operacion da infinito el cual no entraria en los numeros
reales
*/


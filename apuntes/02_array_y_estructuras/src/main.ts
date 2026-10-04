// Enunciado: Main de partida de mis ejercicios de Arrays
// Autor: Jose Luis CC.
// Investigación: Fuentes consultadas

import { ejercicio2 } from './ejercicios/ejercicio2'

const ejercicios: Array<() => void> = [
  ejercicio2,
];

for (let i = 0; i < ejercicios.length; i++) {
  console.log(`\n--------------Ejercicio ${i + 1}`)
  console.log(`Funcion ${i + 1}`)
  ejercicios[i]()
}



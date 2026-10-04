// Enunciado: Ejercicio de metodos de arrays
// Autor: Jose Luis CC.
// Investigación: Fuentes consultadas

//------------------Declaracion de variables----------------------------
const notas: number[] = [6, 8, 4, 9, 7];


//------------------Declaracion de funciones----------------------------

//Funcion que muestre todas las notas
function showNotes(notas: number[]): void {
  //  for (const note of notas) {
  //    console.log("  ", note);
  //  }
  //notas.forEach((note: number) => console.log("  ", note));
  //Modo dios
  console.log([...notas]);
}


//Funcion que calcule la media de las notas
function mediaNotas(notas: number[]): void {
  let suma = 0;
  for (const nota of notas) {
    suma += nota;
  }
  const media = notas.length > 0 ? Number(suma / notas.length) : 'No hay notas';
  console.log(`La media es: ${media}`);
}
//const calcularAveragePro= (notas: number[]) => {
//let suma = 0;
//note.forEach(nota: number => suma += nota)
//}


//Funcion que muestre la mayor nota y la posicion de esa nota
function maxNota(notas: number[]): void {
  let max = 0;
  let posicion = 0;
  notas.forEach((nota: number, indice: number) => {
    if (nota > max) {
      max = nota
      posicion = indice
    }
  });
  console.log(`La nota maxima es: ${max} y esta en la posicion: ${posicion}`);
}


//Funcion que calcule la mediana
function obtenerMediana(notas: number[]): void {
  const notasOrdenadas = [...notas].sort((a, b) => a - b);
  const mitad = Math.floor(notasOrdenadas.length / 2);

  if (notasOrdenadas.length % 2 !== 0) {
    console.log(`La mediana es: ${notasOrdenadas[mitad]}`);
  } else {
    console.log(`La mediana es:${(notasOrdenadas[mitad - 1] + notasOrdenadas[mitad]) / 2}`);
  }
}


//Funcion que devuelva un array con notas junto con la nota pasada como parametro
function addNota(notas: number[], notaNueva: number): void {
  if (notaNueva >= 0 && notaNueva <= 10) {
    notas.push(notaNueva);
    console.log(notas);
  } else {
    console.log('No es una nota valida')
  }
}


//Duncion que elimina una not, recibe el array de notas y como segundo parametro 1 o -1, si es 1 elima la primera posicion del array y devuelve una copio,
//si es -1 elimina la ultima posicion del array devolviendo una copia. No mutamos el array del parametro ojo y me lo demostrais haciendo un clg del array para asegurarme de que no lo habeis mutado.
//
function deleteGrade(notas: number[], t: (1 | -1)): void {
  const copyNotes = [...notas];
  if (t === 1) {
    copyNotes.shift();
  } else if (t === -1) {
    copyNotes.pop()
  }
  console.log("CopyNotes: ", copyNotes);
  console.log(notas);
}

//-----------------..Funcion de ekecucion-------------------------------
export function ejercicio2(): void {
  showNotes(notas);
  mediaNotas(notas);
  maxNota(notas);
  obtenerMediana(notas);
  addNota(notas, 10);
  deleteGrade(notas, -1);
}

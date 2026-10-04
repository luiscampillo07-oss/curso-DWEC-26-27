//Ejercicio de uso de map y otros en typeScript
//Crea un programa que muestre los nombres de todos lo alumnos, calcule la media de todos los alumnos, mostrar alumnos con nota media mas alta,
//calcular la media global de la clase usando la siguiente data.
//
//{nombre: "Luis"", edad: 22, notas: [5,4,6,3]}
//{nombre: "Antonio", edad: 28, notas: [1,10,6,6]}
//{nombre: "Ana", edad: 18, notas: [9,2,7,5]
//{nombre: "Maria", edad: 20, notas: [8,9,7,7]}
//
//Para declarar tipos de objetos en typeScript uso type t el objeto comienzza en mayusculas
//
//-----------declaracion de tipos---------------

type Alumno = {
  nombre: string;
  edad: number;
  notas: number[];
}

//-----------declaracion de variables---------------
const alumnado : Alumno[] = [
  {nombre: "Luis", edad: 22, notas: [5,4,6,3]},
  {nombre: "Antonio", edad: 28, notas: [1,10,6,6]},
  {nombre: "Ana", edad: 18, notas: [9,2,7,5]},
  {nombre: "Maria", edad: 20, notas: [8,9,7,7]},
]

//Obten los nobres de los alumnos
function obtenerNombres(alumnos : Alumno[]) {
  return alumnos.map( (alumno) => alumno.nombre) // El map siempre devuelve un array
}
//function obtenerNombresV2= (alumnos : Alumno[]) =>  alumnos.map((alumno) => alumno.nombre);

//Obtener media general
function obtenerMedia(alumnos : Alumno[]) {
  let suma = 0;
  let contador = 0;

  for (const datos of alumnos.map( (alumno) => alumno.notas)) {
    for (const dato of datos) {
    suma += dato;
    contador++;
    }
  }
  const mediaGeneral = contador > 0 ? (suma / contador) : 'Sin resultados';
  return mediaGeneral;
}

//Obtener media por alumno
function obtenerMediaPorAlumno(alumnos : Alumno[]) {
  return alumnos.map((alumno) => {
  let suma = 0;

  for (const datos of alumno.notas) {
    suma += datos;
  }
  const mediaAlumno = alumno.notas.length > 0 ? (suma / alumno.notas.length) : 'No hay alumnos';
  return {nombre: alumno.nombre, mediaAlumno};
  });
}

//Obtener alumnoConMejorMedia
function obtenerAlumnoConMejorMedia(alumnos : Alumno[]) {
  let alumnosVistos = obtenerMediaPorAlumno(alumnos);
  let mejorAlumno = alumnosVistos[0];

  for (const alumno of alumnosVistos) {
    if(alumno.mediaAlumno > mejorAlumno.mediaAlumno){
      mejorAlumno = alumno;
    }
  }
  return mejorAlumno;
}

//------------Inicializar el ejercicio-----------------
console.log(obtenerNombres(alumnado));
console.log(obtenerMedia(alumnado));
console.log(obtenerMediaPorAlumno(alumnado));
console.log(obtenerAlumnoConMejorMedia(alumnado))

//SET-----------------------------------
import { products } from "../../data/products";

products.map(p => p.category) // --> Devuelve un array de las categorias de productos, habra repetidas

//El Set solo guarda unicos, no pone repetidos

//No usa posiciones

//Como se declara: new Set<tipe>();
const tags = new Set<string>();
//Como se añade
tags.add('ciencia ficcion');
tags.add('terror');

//Como se ve el tamaño del set
tags.size; // --> 2

//Como se si un elemento esta dentro del set
tags.has('terror'); // --> true muy rapido, no recorre todo para encintrarlo

//Como se borra
tags.delete('terror'); // Devuelve un boolean, true si lo ha borrado, false si no lo ha borrado

const categoriasNoRepetidas = new Set<string>(...products.map(p => p.category)) // --> Con el spreat operator (...) sepuede quitar los array

//Ejercicio
//Crear una funcion que le pase como parametro un array de numeros y devuelva true o folse si hay repetidos o no.
export function hasDuplicates(numeros: number[]): boolean {
  //const agrupacion = new Set<number>(...numeros);
  return new Set(numeros).size !== numeros.length
}

//Ejemplificamos con un set una lista de peliculas ya vistas
//Crear una funcion que llamemos firsView que reciba un array de ids de peliculas y que devuelva un number o undefined con la primera pelicula repetida o que haya visto mas de una vez.

export function firsView(ids: number[]): number | undefined {
  const see = new Set<number>();
  for (const id of ids) {
    //if(see.has(id) return ids)
    //see.add(id)
    see.has(id) ? ids : see.add(id);
  }
  return undefined;
}
//firstView([4,3,2,6,2,7,4]) --> 2

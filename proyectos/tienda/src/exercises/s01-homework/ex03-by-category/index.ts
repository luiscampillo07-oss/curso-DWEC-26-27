import type { Category, Product } from "../../../types/product";

export function byCategory(list: Product[], category: Category): Product[] {
  return list.filter(p => p.category === category);
}

// Pregunta · ¿Qué devuelve byCategory([], 'audio')?
// Resultado: Devuelve un array vacio []
// ¿Da error o devuelve algo con sentido? ¿Por qué?: ...
// No da error, porque cuando el metodo filter detecta el array vacio no sigue con la ejecucion de la linea sino que devuelve un un array vacio.

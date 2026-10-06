import type { Product } from '../../../types/product';
//export const allInStock = (list: Product[]): boolean => list.every((p) => p.stock > 0);

// Pregunta 1 · ¿Qué devuelve allInStock([])?
// Resultado: Devolvera true, ya que el metodo every() no detecta ningun producto que incumpla la condicion de stock>0.

// Pregunta 2 · ¿Es una respuesta razonable para una tienda sin productos? ¿Porqué?
// Respuesta: No es razonable, puesto que puede parecer que la tienda tiene podructos pese a que esta no tenga nada, confundiendo asi a quienes vayan a comprar.

// Pregunta 3 · ¿Cómo cambiarías la función para que una tienda vacía devuelva false?
// Respuesta (escribe el código en una línea):
export const allInStock = (list: Product[]): boolean => list.length > 0 && list.every((p) => p.stock > 0);

/*
//Enunciado: Proyecto creacion de una tienda
// Autor: Jose Luis Campillo Conde
// Investigación:
//

//---------Importaciones-----------
import type { Product } from "./types/product";
import { products } from "./data/products";



//Mostrar todos los productos
console.log("Catalogo de productos: ", products);

//Mostrar del primer producto
const first: Product | undefined = products[0];
console.log("Primer producto: ", first);

//Mostrar precio del primer producto
console.log();
*/



import { products } from "./data/products";

// Ejercicio 2
import { soldOutNames } from './exercises/s01-homework/ex02-sold-out-names';
console.log('ej02', soldOutNames(products));

// Ejercicio 3
import { byCategory } from './exercises/s01-homework/ex03-by-category';
console.log('ej03', byCategory(products, 'audio').map((p) => p.name));
console.log('ej03', byCategory(products, 'monitors').map((p) => p.name));
console.log('ej03', byCategory([], 'audio'));

// Ejercicio 4
import { priceOf } from './exercises/s01-homework/ex04-price-of';
console.log('ej04', priceOf(products, 3));
console.log('ej04', priceOf(products, 99));

// Ejercicio 5
import { canBuy } from './exercises/s01-homework/ex05-can-buy';
console.log(
  'ej05',
  canBuy(products, 1, 2),
  canBuy(products, 1, 6),
  canBuy(products, 2, 1),
  canBuy(products, 99, 1),
  canBuy(products, 1, 0)
);

// Ejercicio 6
import { allInStock } from './exercises/s01-homework/ex06-think';
console.log('ej06', allInStock([]));

import { products } from "./data/products";
/*
//Metodos de repaso---------------------------------

products.filter(product => product.stock > 3); // --> devuelve un array del mismo tamaño o menor que el array original, que verifica la condicion del final.
products
  .filter(product => product.stock > 3)
  .map(product => product.name) // --> devuelve el nombre de los productos que tienen stock mayor a 3.
  .some(name => name === 'Auriculares'); // --> devuelve verdadero o falso si la condicion es cumplida por algun elemento.
  //.every() --> todos deben cumplir con la condicion.
  //.includes() --> es mejor que el some
  //.indexOf() --> devuelve la posicion del objeto o -1 sino lo encuentra.

  products
  .find(product => product.category === 'peripherals'); // --> Me devuelve todo el objeto que cumple esa condicion, pero la primera ocurrencia (Solo el primero).

// No hace falta tipar las variables, PERO si las FUNCIONES. No sirve la inferencia en ese caso.

//Metodo reduce-----------------------------------

console.log(products[0]?.vat); // --> si existe la clave vat devuelve< vat sino existe devuelve undefined.

//si esto de la izquierda es null o undefined ?? entonces devuelve esto
console.log(products[0]?.vat ?? "No existe la clave"); 
*/

//calcular el valor total de todos mis productos (suma precio * stock)
let total = 0;
for (const p of products) {
  total += p.price * p.stock;
}

// [ ].reduce((Acumulador, Elemento_que_itera, posicion, El_array_de_partida) =>  , valor_inicil)

products.reduce((totalProductsValui, product) => totalProductsValui + product.price * product.stock, 0) // Siempre va a devolver el tipo del valor inicial

//Metodo short---------------------------------------
//Ordena --> muta === malo

//Metodo toSorted()----------------------------------
//Ordenacion ascendente



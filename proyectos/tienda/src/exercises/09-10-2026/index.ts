//Crear una funcion que permita añadir productos a mi data
//Restricciones:
//
//--------------------Importaciones------------------------
//import { products } from "../../data/products";
import type { Cart } from "../../types/cart"
//import type { Product } from "../../types/product"
/*
----------------------Vatiables--------------------------
//const copy = [...products];
const original = { name: 'teclado', price: 80 }
const other = original; // <-- Asi no debo de crear una copia porque puede mutar el objeto original, porque apuntan al mismo espacio de memoria.
other.price = 0;
console.log(orignal.precio);

//*** IMPORTANTE ***
export type NewProduct = Omit<Product, 'id'>; // ****** ---> Utility type
//Crea un nuevo tipo igual que products pero sin id

//Crear una funcion que actualice el precio de los productos, le paso id, y el nuevo precio
export function updatePrice(list: Product[], id: number, price: number): Product[] {
  return list
    .map(product => product.id === id ? { ...product, price } : product); // Si la clave y la variable son iguales solo se pone una vez MODO DIOS
}

//Actualizaciones parciales
export type ProductChange = Partial<Omit<Product, 'id'>>; // --> Quita el id de product y lo que queda hazlo opcional. Me aseguro que nunca voy a cambiar de is.
export function updateProduct(list: Product[], id: number, changes: ProductChange): Product[] {
  return list
    .map(product => product.id === id ? { ...product, ...changes } : product);
}

//updateProduct(products, q, {stock: 10, name: 'Teclado Gaming'})

//CRUD --> Create, Read, Update, Delete
export function deleteProduct(list: Product[], id: number): Product[]{
  return list
  .filter(product => product.id !== id);
}
*/


//Ejercicio
//
//Añadir elementos al carrito, borrar elementos del carrito, obtener el total del carrito

export function addToCart(cart: Cart, productId: number): Cart {

  const existe = cart.some(p => p.productId === productId);

  if (existe) {
    return cart
      .map(p => p.productId === productId ? { ...p, quantity: p.quantity + 1 } : p);
  }
  return [...cart, { productId, quantity: 1 }];
}

export function removeFromCart(cart: Cart, productId: number): Cart {
  const existe = cart.some(p => p.productId === productId);
  if (existe) {
    return cart
      .filter(p => p.productId !== productId);
  }
  return [...cart];
}

export function cartTotal(cart: Cart) {
  const totalPorProducto = cart.map(p => p.productId * p.quantity);
  return totalPorProducto.reduce((acc, price) => acc + price, 0)
}



//------------------Inicio de la aplicacion-------------------



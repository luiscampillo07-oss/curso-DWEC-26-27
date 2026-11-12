import { createList, createProductItem, createSearchInput, createTitle, getElement } from './components/dom'
import { initialProducts } from './services/products';
import './style.css'
import type { Product } from './types/product';

//Declaraciones de variables
const app = getElement("#app", HTMLDivElement);
//const miNombre = createTitle("Jose Luis CC");
const search = createSearchInput();
const list = createList();







//Declaracion de funciones

//pintar los productos que reciba
function paint(products: readonly Product[]): void {
  const items = products.map((product) => {
    const item = createProductItem(product);
    return item;
  })
  list.replaceChildren(...items);
}







//------------------Inicio de la aplicacion--------------------
//app.append(miNombre, search, list);
app.append(createTitle("Productos: "), search, list)

//Hacemos un map de cada producto <li>
//y usaremos replaceChild para reemplazar todos los elementos.

//list.replaceChildren(...initialProducts.map(createProductItem));

// Funcion que con cada pulsacion de tecla que le de:
search.addEventListener("input", () => {
  const text = search.value.trim().toLowerCase();
  paint(initialProducts.filter((p) => p.name.toLowerCase().includes(text)))
});
paint(initialProducts);

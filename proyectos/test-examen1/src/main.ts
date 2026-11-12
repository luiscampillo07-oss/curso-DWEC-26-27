import { createFooter, createList, createProductItem, createSearchInput, createTitle, getElement } from './components/dom';
import { initialProducts } from './services/products';
import './style.css';
import type { Product } from './types/product';

//Declaraciones de variables
const app = getElement("#app", HTMLDivElement);

//const miNombre = createTitle("Jose Luis CC");
const search = createSearchInput();
const list = createList();
const footer = createFooter("Jose Luis CC");


// La libreta original
interface AppState {
  products: readonly Product[];
  search: string;
}

//1º- Estado de la libreta (usamos let para modificarlo)
let state: AppState = { products: initialProducts, search: "" };



//Declaracion de funciones

function deleteProduct(id: number): void {
  state = {
    ...state,
    products: state.products.filter(p => p.id !== id)
  };
  //Crear una funcion que guarde en el localStorege nustros productos
  render();
}

function toggleFavorite(id: number): void {
  state = {
    ...state,
    products: state.products.map((p) =>
      p.id === id ? { ...p, favorite: !p.favorite } : p, ""),
  };

  //Crear una funcion que guarde en el localStorege nustros productos
  render();
}

//2º- El render de la libreta y la copia en la pantalla
function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.products.filter(p => p.name.toLowerCase().includes(text));
  const items = visible.map(product => createProductItem(product, deleteProduct, toggleFavorite),);

  list.replaceChildren(...items);
}

//-----------------Eventos------------------------
search.addEventListener("input", () => {
  state = { ...state, search: search.value.trim().toLowerCase() };
  render();
});

render();



//------------------Inicio de la aplicacion--------------------
//app.append(miNombre, search, list);
app.append(createTitle("Productos: "), search, list, footer);


//Cuanto quiero quitar un elemento --> list.filter(x -> x.id !== id)
//Cuanto quiero cambiar un elemento --> list.map(x -> x.id === id ? {...x, sudadera: roja} : x)
//Si quiero añadir un elemento --> [...lista, nuevoElemento]


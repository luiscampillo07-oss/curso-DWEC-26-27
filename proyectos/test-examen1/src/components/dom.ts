import type { Product } from "../types/product";

// Funcion que comprueba si existe y es del tipo pedido
export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`Error en el selector de tipos`);
  }
  return element;
}

// Componente1: recibe un texto y devuelve un h1
export function createTitle(text: string): HTMLHeadElement {
  const title = document.createElement("h1");
  title.textContent = text;
  return title;
}

//Componente2: buscador
export function createSearchInput(): HTMLInputElement {
  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Buscar producto ...";
  return input;
}

//Componente3: un <ul> vacio
export function createList(): HTMLUListElement {
  return document.createElement("ul");
}

//Component4: recibe un producto y devuelve si li bonito
export function createProductItem(product: Product): HTMLLIElement {
  const item = document.createElement("li");
  const text = document.createElement("span");

  text.textContent = `${product.name} ----- ${product.price.toFixed(2)} €`;

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Borrar";

  const buttonFav = document.createElement("button");
  buttonFav.type = "button";
  buttonFav.textContent = "⭐";

  item.append(text, button, buttonFav);
  return item;
}

//Footer
export function createFooter(name: string): HTMLElement {
  const footer = document.createElement("footer");
  const date: Date = new Date();
  footer.textContent = `${name} --- ${date}`;
  footer.style.background = "gray";
  return footer;
}

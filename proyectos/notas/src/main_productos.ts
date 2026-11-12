import "./style.css";
import { getElement } from "./components/dom";
import { products } from "./services/products";
import { mountClickCounter } from "./utils/counter";
import { createProductCard } from "./components/textSpanComponent";


/*
  * Crear y definir elements arriba
  * Appends a mitad
  * Funciones al final
*/

const app = getElement("#products", HTMLDivElement);

//Fabricar una lista con todos los productos que tengo
const ulProduct = document.createElement("ul") //-- > Esta en memoria, no existe como tal

//Recorremos products y voy generando con createCard una Li por cada objeto del array
/*for (const p of products) {
  ulProduct.append(createCard(p));
}
*/

//V2 --> modo Dios
ulProduct.append(...products.map(p => createProductCard(p))) //Cuando el parametro del callback es el mismo que el de la funcion de puede poner: .map(createCard)


//Hacer otro li al final que me diga el total del precio
const liTotal = document.createElement("li");
liTotal.classList.add("card", "total");

const totalStrongText = document.createElement("strong");
totalStrongText.textContent = "Total: ";
liTotal.append(totalStrongText);

const totalStrong = document.createElement("strong");
totalStrong.textContent = String(products.reduce((acc, p) => acc + p.price, 0));
totalStrong.classList.add("card-price")
liTotal.append(totalStrong);

ulProduct.append(liTotal);

//Mostrar por pantalla la Ul
app.append(ulProduct);


/*
  * .append             --> al final
  * .prepend            --> al principio
  * .before             --> justo antes de
  * .after              --> justo depues de 
  * .replaceWith(nuevo) --> en lugar de 
*/

//Creo una seccion y creo un boton
const section = document.createElement("section");
const btnClicks = document.createElement("button");
const btnReset = document.createElement("button");

btnClicks.textContent = "Clicks: 0";
btnReset.textContent = "Reset";

section.append(btnClicks, btnReset);

const hr = document.createElement("hr");
app.append(hr);
app.append(section);

mountClickCounter(btnClicks, btnReset);

import { getElement } from "./components/dom";

const h1Product = document.createElement("h1");
h1Product.classList.add("h1Product");
h1Product.textContent = "Productos"

const divProducts = getElement("#products", HTMLDivElement);

divProducts.append(h1Product);


//Fabricar un li con todos los productos que tengoç


export function getElement<T extends Element>(selector: string, type: new () => T): T {
  const element = document.querySelector(selector);
  if (!(element instanceof type)) {
    throw new Error(`No se encuentra el selector: ${selector} o no es del tipo esperado`);
  }
  return element;
}

//Crear una funcion que genere etiquetas con el texto que le paso como parametro y con un array de clases
export function createTextSpan(text: string, cssArray: string[]): HTMLSpanElement {
  const span = document.createElement("span");
  span.classList.add(...cssArray);
  span.textContent = text;
  return span;
}

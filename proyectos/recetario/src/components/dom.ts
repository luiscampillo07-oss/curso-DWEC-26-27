import type { Recipe } from "../types/recipes";

export function getElement<T extends Element>(service: string, type: new () => T): T {
  const element = document.querySelector(service);
  if (!(element instanceof type)) {
    throw new Error(`No existe ${service} en la instancia ${type}`);
  }
  return element;
}

export function createTitle(text: string): HTMLHeadingElement {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
}

export function createCheckbox(): HTMLLabelElement {
  const checkBoxLabel = document.createElement("label");
  const checkBoxVegetarian = document.createElement("input");
  checkBoxVegetarian.type = "checkbox";
  checkBoxLabel.textContent = "Solo Vegetariano";
  checkBoxLabel.append(checkBoxVegetarian);
  return checkBoxLabel;
}

export function createForm(): HTMLFormElement {
  const form = document.createElement("form");
  const inputNameRecipe = document.createElement("input");
  const inputMinutes = document.createElement("input");
  const btnCreateRecipe = document.createElement("button");

  inputNameRecipe.required = true;
  inputMinutes.required = true;

  inputNameRecipe.type = "text";
  inputMinutes.type = "number";
  btnCreateRecipe.type = "submit";

  inputNameRecipe.name = "name";
  inputMinutes.name = "minutes";

  inputNameRecipe.placeholder = "Nombre de la receta .....";
  inputMinutes.placeholder = "Tiempo de la receta .....";
  btnCreateRecipe.textContent = "Crear receta";

  form.append(inputNameRecipe, inputMinutes, btnCreateRecipe);
  return form;
}

export function createList(): HTMLUListElement {
  return document.createElement("ul");
}

export function createRecipe(recipe: Recipe, deleteRecipe: (id: number) => void): HTMLLIElement {
  const li = document.createElement("li");
  const item = document.createElement("span");
  const btnDelete = document.createElement("button");

  if (recipe.vegetarian === false) {
    item.textContent = `${recipe.name} · ${(Math.round(recipe.minutes))} min  `;
  } else {
    item.textContent = `${recipe.name} · ${(Math.round(recipe.minutes))} min · [V]  `;
  }
  btnDelete.textContent = "Borrar";
  btnDelete.addEventListener("click", () => deleteRecipe(recipe.id));

  li.append(item, btnDelete);
  return li;
}

export function createResume(): HTMLLabelElement {
  return document.createElement("label");
}

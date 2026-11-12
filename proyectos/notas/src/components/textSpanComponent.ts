import type { Product } from "../types/product";
import type { Student } from "../types/student";

export function createStudentCard(s: Student): HTMLLIElement {
  //Crea la list
  const li = document.createElement("li");
  li.classList.add("card");

  //Crea la etiqueta name
  const name = document.createElement("span");
  name.textContent = s.name;

  //Crea la etiqueta price
  const grade = document.createElement('span');
  grade.textContent = `${s.grade.toFixed(2)}`;
  li.append(name, grade); // varios hijos de una vez

  return li;
}


export function createProductCard(p: Product): HTMLLIElement {
  //Crea la list
  const li = document.createElement("li");
  li.classList.add("card");
  if (p.stock === 0) li.classList.add("card-agotado")

  //Crea la etiqueta name
  const name = document.createElement("span");
  name.textContent = p.name;

  //Crea la etiqueta price
  const price = document.createElement('span');
  price.textContent = `${p.price.toFixed(2)} €`;
  li.append(name, price); // varios hijos de una vez

  return li;
}

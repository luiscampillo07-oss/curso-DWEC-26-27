import type { Product } from "../types/product";
import type { Student } from "../types/student";
import { createProductCard, createStudentCard } from "./textSpanComponent";

export function findStudentList(students: Student[], studentList: HTMLUListElement): HTMLLabelElement {
  const searchLabel = document.createElement("label");
  const searchInput = document.createElement("input");

  searchLabel.textContent = "Buscar usuario: ";
  searchInput.placeholder = "Escribe un nombre y presiona Enter";

  searchInput.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      const contain = searchInput.value.toLowerCase();

      //Filtrar estudiantes
      const filter = students.filter(s => s.name.toLowerCase().includes(contain));
      if (filter.length === 0) {
        alert("No hay ningun estudiante que se llame asi");
      } else {
        studentList.textContent = "";
        studentList.append(...filter.map(s => createStudentCard(s)))
      }
    }
  })
  searchLabel.append(searchInput);
  return searchLabel;
}

export function findProductList(products: Product[], productList: HTMLUListElement): HTMLLabelElement {
  const searchLabel = document.createElement("label");
  const searchInput = document.createElement("input");

  searchLabel.textContent = "Buscar producto: ";
  searchInput.placeholder = "Escribe un nombre y presiona Enter";

  searchInput.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      const contain = searchInput.value.toLowerCase();

      //Filtrar productos
      const filter = products.filter(p => p.name.toLowerCase().includes(contain));
      if (filter.length === 0) {
        alert("No hay ningun producto con ese nombre");
      } else {
        productList.textContent = "";
        productList.append(...filter.map(p => createProductCard(p)))
      }
    }
  })
  searchLabel.append(searchInput);
  return searchLabel;
}


export function findStudentTable(students: Student[], table: HTMLTableElement): HTMLLabelElement {
  const searchLabel = document.createElement("label");
  const searchInput = document.createElement("input");

  searchLabel.textContent = "Buscar usuario: ";
  searchInput.placeholder = "Escribe un nombre y presiona Enter";

  searchInput.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      const contain = searchInput.value.toLowerCase().trim();

      // Filtrar estudiantes
      const filter = students.filter(s => s.name.toLowerCase().includes(contain));

      if (filter.length === 0) {
        alert("No hay ningún estudiante que se llame así");
      } else {

        const tbody = table.querySelector("tbody");
        if (!(tbody instanceof HTMLTableSectionElement)) {
          throw new Error("No es el cuerpo de una tabla")
        }

        tbody.textContent = "";

        for (const s of filter) {
          const bodytr = document.createElement("tr");
          const tdName = document.createElement("td");
          const tdGrade = document.createElement("td");

          tdName.textContent = s.name;
          tdGrade.textContent = String(s.grade);
          bodytr.append(tdName, tdGrade);
          tbody.append(bodytr);
        }
      }
    }
  });

  searchLabel.append(searchInput);
  return searchLabel;
}

export function findProductsTable(products: Product[], table: HTMLTableElement): HTMLLabelElement {
  const searchLabel = document.createElement("label");
  const searchInput = document.createElement("input");

  searchLabel.textContent = "Buscar producto: ";
  searchInput.placeholder = "Escribe un nombre y presiona Enter";

  searchInput.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      const contain = searchInput.value.toLowerCase().trim();

      // Filtrar estudiantes
      const filter = products.filter(p => p.name.toLowerCase().includes(contain));

      if (filter.length === 0) {
        alert("No hay ningún producto que se llame así");
      } else {

        const tbody = table.querySelector("tbody");
        if (!(tbody instanceof HTMLTableSectionElement)) {
          throw new Error("No es el cuerpo de una tabla")
        }
        tbody.textContent = "";

        for (const p of filter) {
          const bodytr = document.createElement("tr");
          const tdName = document.createElement("td");
          const tdStock = document.createElement("td");
          const tdPrice = document.createElement("td");

          tdName.textContent = p.name;
          tdStock.textContent = String(p.stock);
          tdPrice.textContent = String(p.price);
          bodytr.append(tdName, tdStock, tdPrice);
          tbody.append(bodytr);
        }
      }
    }
  });

  searchLabel.append(searchInput);
  return searchLabel;
} 

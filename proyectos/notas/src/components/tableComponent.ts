import type { Product } from "../types/product";
import type { Student } from "../types/student";

export function createStudentTable(students: Student[]): HTMLTableElement {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headertr = document.createElement("tr");
  const thName = document.createElement("th");
  const thGrade = document.createElement("th");

  thName.textContent = "Names";
  thGrade.textContent = "Grades";
  headertr.append(thName, thGrade);
  thead.append(headertr);

  for (const s of students) {
    const bodytr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdGrade = document.createElement("td");

    tdName.textContent = s.name;
    tdGrade.textContent = String(s.grade);
    bodytr.append(tdName, tdGrade);
    tbody.append(bodytr);
  }

  table.append(thead, tbody);
  return table;
}

export function createProductTable(products: Product[]): HTMLTableElement {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const headertr = document.createElement("tr");
  const thName = document.createElement("th");
  const thStock = document.createElement("th");
  const thPrices = document.createElement("th");

  thName.textContent = "Names";
  thStock.textContent = "Stock";
  thPrices.textContent = "Prices";
  headertr.append(thName, thStock, thPrices);
  thead.append(headertr);

  for (const p of products) {
    const bodytr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdStock = document.createElement("td");
    const tdGrade = document.createElement("td");

    tdName.textContent = p.name;
    tdStock.textContent = String(p.stock);
    tdGrade.textContent = String(p.price);
    bodytr.append(tdName, tdStock, tdGrade);
    tbody.append(bodytr);
  }

  table.append(thead, tbody);
  return table;
}

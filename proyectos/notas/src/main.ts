//Label para buscar usuarios, un input buscar o elementor enter.
//Por defecto aparecen todos los usuarios, sisno existe un alert usuario no existe, y si existe deja solo al usuario

import { getElement } from "./components/dom";
import { findProductsTable, findStudentTable } from "./components/findComponent";
import { createHr } from "./components/hrComponents";
import { createProductTable, createStudentTable } from "./components/tableComponent";
import { products } from "./services/products";
import { students } from "./services/students";

const app = getElement("#products", HTMLDivElement);
//V1
// const ulStudent = document.createElement("ul");
// ulStudent.append(...students.map(s => createStudentCard(s)));
//
// const ulProduct = document.createElement("ul");
// ulProduct.append(...products.map(p => createProductCard(p)));
// 
// const btnSearch = document.createElement("button");
// btnClicks.textContent = "Search";
// 
//const searchStudentLabel = findStudent(students, ulStudent);
//const searchProductLabel = findProduct(products, ulProduct);
const hr = createHr();
//
//
//app.append(searchStudentLabel);
// app.append(ulStudent);
// app.append(hr);
// app.append(searchProductLabel);
// app.append(ulProduct);


//V2
const studentTable = createStudentTable(students);
const productTable = createProductTable(products);

const searchStudentOnTable = findStudentTable(students, studentTable);
const searchProductOnTable = findProductsTable(products, productTable);

app.append(searchStudentOnTable);
app.append(studentTable);
app.append(hr);
app.append(searchProductOnTable)
app.append(productTable);

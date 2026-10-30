import { students } from "./services/students"
import { average, isPassed } from "./utils/grades"



// const averageText = document.getElementById("average")

const averageText = document.querySelector("#average") // --> busca
const listU = document.querySelector("#student-list")

if (!(averageText instanceof HTMLParagraphElement)) {  // --> comprueba
  throw new Error("Falta el parrafo con id average")
}

if (!(listU instanceof HTMLUListElement)) {
  throw new Error("Falta el parrafo con id student-list")
}

//Input de busqueda
const inputSearch = document.createElement("input");
inputSearch.type = "password"
inputSearch.placeholder = "Escriba nombre para buscar";
inputSearch.style.backgroundColor = "gray";

//Boton de enviar la busqueda
const btnSearch = document.createElement("button");
btnSearch.textContent = "Buscar 🔍";


averageText.textContent = `Media: ${average(students).toFixed(2)}` // --> Modifica

for (const student of students) {
  const item = document.createElement("li");
  item.textContent = `Estudiante: ${student.name} --- Nota: ${student.grade}`
  item.style.color = isPassed(student) ? "green" : "red"
  listU.appendChild(item);
}

averageText.appendChild(inputSearch);
averageText.appendChild(btnSearch);

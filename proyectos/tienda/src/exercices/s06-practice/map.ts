/*
const phone = new Map<string, string>();

phone.set("Ana", "660460056");
phone.set("Pedro", "660350056");
phone.set("Maria", "660460070");
phone.set("Marco", "660461156");

console.log(phone.size); // 4
console.log(phone.get("Maria")); // 660460070
console.log(phone.get("Isaias")); // undefined (Hay que validar si el dato existe)

// xxx ?? si lo de la izquierda es null o undefined hace lo de la derecha

//Ejercicio

const grades = new Map<string, number>([
  ["Ana", 9],
  ["Mario", 5],
  ["Andres", 4],
]);

export function addStudent(name: string, note: number): Map<string, number> {
  return grades.has(name) ? no hacer nada: grades.set(name, note);
}

export function gradeOF(name: string): string {
  const grade = grades.get(name);
  //return grade ? "La nota es: ${grade}" : "No tiene nota";

  if (grade === undefined) {
    return "No tiene nota";
  }
  return `La nota es: ${grade}`;
}

console.log(gradeOF("pepe")); // "No tiene nota"
console.log(gradeOF("Ana")); // "La nota es: 9"ç

//Votos de los alumnos--------------------------
export function countVotes(votes: string[]): Map<string, number> {
  const count = new Map<string, number>();
  for (const vote of votes) {
    const previus = count.get(vote) ?? 0;
    count.set(vote, previus + 1);
  }
  return count;
}

//Agrupar alumnos por clase------------------------
//Tengo una lista de alumnos y cada uno es de un grupo:
//2DWEC-A y 2DWEC-B

interface Student {
  name: string;
  group: string;
}

const students: Student[] = [
  { name: "Ana", group: "2-A" },
  { name: "Luis", group: "2-A" },
  { name: "Andres", group: "2-B" },
  { name: "Pedro", group: "2-B" },
]

export function nameGroup(students: Student[]): Map<string, string[]> {
  const groups = new Map<string, string[]>();

  for (const student of students) {
    const current = groups.get(student.group) ?? [];
    groups.set(student.group, [...current, student.name]);
  }
  return groups;
}

for (const [group, names] of nameGroup(students)) { //Esto es destructuring
  console.log(`Group: ${group} Students: ${names}`)
}

//Closures  DOM
function fello(name: string): string {
return `Hola ${name}`;
}

const fHello = hello;
console.log(fHello("Ana"));
*/

import type { Student } from "../types/student";

/**
 *  Funcion que calcula la media
 * @param Student[] array de estudiantes
 * @returns Number average total
 */
export function average(list: Student[]): number {
  if (list.length > 0) {
    const total = list.reduce((acc, student) => acc += student.grade, 0)
    return total / list.length;
  } else {
    return 0;
  }
  // return list.lenght === 0 ? 0 : list.reduce((acc, student) => acc += student.grade, 0) / list.lenght;
}


/**
 *  Calcula si un alumno a suspendido o no
 * @param Student un estudiante
 * @returns boolean para saber si suspende
 */
export function isPassed(student: Student): boolean {
  return student.grade >= 5;
}

//Una funcion que calcule cuantos han aprobado
export function studentPass(list: Student[]): Student[] {
  return list.filter(isPassed);
}

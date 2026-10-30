import type { Priority, Task } from "../../../types/tareas";


/*
 * Funcion que crea una nueva tarea
 * @param list : Task[] Array de tareas
 * @param title : string Title de la tarea
 * @param priority : Prioridad de la tarea
 * @returns Descripción
 */
export function createTask(list: Task[], title: string, priority: Priority): Task[] {
  const id = list.reduce((max, t) => Math.max(max, t.id), 0) + 1;
  return [...list, { id, title, priority, done: false }];
}


export function toggleDone(list: Task[], id: number): Task[] {
  return list.map(t => t.id === id ? { ...t, done: !t.done } : t);
}


export function rename(list: Task[], id: number, title: string): Task[] {
  const clear = title.trim();
  if (clear === '') return list;

  return list.map(t => t.id === id ? { ...t, title: clear } : t);
}


export const removeDone = (list: Task[], id: number): Task[] => {

  // Opcion 1 --->
  return list.filter(t => t.id === id)[0]?.done ? list.filter(t => t.id !== id) : list;

  // Opcion 2 ---> !(t.id === id && t.done));
}

export function editTask(list: Task[], id: number, changes: Partial<Omit<Task, 'id'>>): Task[] {
  return list.map(t => (t.id === id ? { ...t, ...changes } : t));
}

//const order: Record<tipo , valo_igual_para_todos> = {}
const order: Record<Priority, number> = { high: 2, medium: 1, low: 0 }

export function pendingByPriority(list: Task[]): string[] {
  return list
    .filter(t => !t.done)
    .toSorted((a, b) => order[b.priority] - order[a.priority])
    .map(t => t.title);
}

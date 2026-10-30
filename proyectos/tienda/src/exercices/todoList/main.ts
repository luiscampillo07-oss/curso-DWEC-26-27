import type { Task } from "../../types/tareas";
import { createTask, toggleDone, rename, removeDone, editTask, pendingByPriority } from "./helpers/todoList";

let list: Task[] = [];

list = createTask(list, "Tarea 1", "high");
list = toggleDone(list, 1);
list = rename(list, 1, "Tarea 1 renombrada");
list = editTask(list, 1, { priority: "low" });
console.log("Pendientes ordenadas:", pendingByPriority(list));
list = removeDone(list, 1);

console.log("Resultado final:", list);

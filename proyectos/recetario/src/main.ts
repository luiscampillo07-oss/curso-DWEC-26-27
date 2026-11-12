import './style.css';

import { createCheckbox, createForm, createList, createRecipe, createResume, createTitle, getElement } from './components/dom';
import { initialRecipes } from './services/initialRecipes';
import type { AppState } from './types/recipes';

const app = getElement("#app", HTMLDivElement);

let state: AppState = { recipes: initialRecipes, search: "" };

const title = "Recetario";
const subtitle = createCheckbox();
const form = createForm();
const list = createList();
const resume = createResume();



//DECLARACION DE FUNCIONES
function deleteRecipe(id: number): void {
  state = {
    ...state,
    recipes: state.recipes.filter(r => r.id !== id)
  };
  render();
};


function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.recipes.filter(r => r.name.toLowerCase().includes(text));

  resume.textContent = `${state.recipes.length} recetas · tiempo medio: ${state.recipes.length > 0 ? Math.round(state.recipes.reduce((acc, r) => acc + r.minutes, 0) / state.recipes.length) : 0} min`;

  const items = visible.map(recipe => createRecipe(recipe, deleteRecipe));

  if (form.length === 0) {
    form.textContent = "0 recetas";
  } else {
    list.replaceChildren(...items);
  }

}


//---------------Events-----------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const minutes = Number(data.get("minutes"));

  if (minutes > 0 && Number.isInteger(minutes)) {
    const newId = Math.max(0, ...state.recipes.map(r => r.id)) + 1;
    const newRecipe = {
      id: newId,
      name: name,
      minutes: minutes,
      vegetarian: false,
    };
    state = { ...state, recipes: [...state.recipes, newRecipe] };
    form.reset();
    render();

  } else {
    alert("No es un numero valido de minutos");
  }
});

//------------------- Inicio-----------------------
app.append(createTitle(title), subtitle, form, list, resume);
render();

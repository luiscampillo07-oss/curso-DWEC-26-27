import { createForm, createGameItem, createList, createResume, createSearchInput, createTitle, getElement } from './components/dom';
import { initialGames } from './services/initialGame';
import './style.css';
import type { AppState } from './types/game';

const app = getElement("#app", HTMLDivElement);


let state: AppState = { games: initialGames, search: "" };

const title = "Mis juegos";
const form = createForm();
const labelResume = createResume();
const search = createSearchInput();
const list = createList();


//DECLARACION DE FUNCIONES
function deleteGame(id: number): void {
  state = {
    ...state,
    games: state.games.filter(g => g.id !== id)
  };
  render();
};

function playedGame(id: number): void {
  state = {
    ...state,
    games: state.games.map(g => g.id === id ? { ...g, played: !g.played } : g)
  };
  render();
}

function render(): void {
  const text = state.search.trim().toLowerCase();
  const visible = state.games.filter(g => g.title.toLowerCase().includes(text));

  labelResume.textContent = `Jugados ${state.games.reduce((acc, g) => g.played ? acc + 1 : acc, 0)}`;
  const items = visible.map(game => createGameItem(game, playedGame, deleteGame));

  list.replaceChildren(...items);
}

//-----------------Eventos------------------------
search.addEventListener("input", () => {
  state = { ...state, search: search.value.trim().toLowerCase() };
  render();
});
render();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const title = String(data.get("title") ?? "").trim();
  const platform = String(data.get("platforms") ?? "").trim();

  const newId = Math.max(0, ...state.games.map(g => g.id)) + 1;
  const newGame = {
    id: newId,
    title: title,
    platform: platform,
    played: false,
  };
  state = { ...state, games: [...state.games, newGame] };
  form.reset();
  render();
});


//---------------Inicio de la aplicacion-----------------
app.append(createTitle(title), labelResume, form, search, list);
render();

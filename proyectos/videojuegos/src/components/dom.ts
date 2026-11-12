import type { Game } from "../types/game";

//Funcion para verificar elementos del main
export function getElement<T extends Element>(service: string, type: new () => T): T {
  const element = document.querySelector(service);
  if (!(element instanceof type)) {
    throw new Error(`No existe ningun elemento ${service} que sea una instancia de ${type}`);
  }
  return element;
}

//Funcion que crea titulos
export function createTitle(text: string): HTMLHeadElement {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
}

//Funcion que crea un formulario
export function createForm(): HTMLFormElement {
  const form = document.createElement("form");

  const inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.placeholder = "Busca un titulo";
  inputTitle.name = "title;";

  const selectPlatform = document.createElement("select");
  selectPlatform.name = "platform";

  const platforms = ["PC", "Switch", "PlayStation"];

  platforms.forEach(platform => {
    const option = document.createElement("option");
    option.value = platform;
    option.textContent = platform;
    selectPlatform.append(option);
  });

  inputTitle.required = true;
  inputTitle.name = "title";
  selectPlatform.name = "platforms";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Guardar juego";

  form.append(inputTitle, selectPlatform, submitButton);

  return form;
}

//Funcion que crea un buscador
export function createSearchInput(): HTMLInputElement {
  const input = document.createElement("input");
  input.type = "search";
  input.placeholder = "Buscar producto ...";
  return input;
}


//Componente3: un <ul> vacio
export function createList(): HTMLUListElement {
  return document.createElement("ul");
}

//Component4: recibe un producto y devuelve si li bonito
export function createGameItem(game: Game, playedGame: (id: number) => void, deleteGame: (id: number) => void): HTMLLIElement {
  const item = document.createElement("li");
  const text = document.createElement("span");

  text.textContent = `${game.title} ----- ${game.platform}`;

  const played = document.createElement("button");
  played.type = "button";
  if (game.played) {
    played.textContent = "Jugado";
  } else {
    played.textContent = "Planeado";
  }

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Borrar";

  played.addEventListener("click", () => playedGame(game.id));
  button.addEventListener("click", () => deleteGame(game.id));

  item.append(text, played, button);
  return item;
}

;

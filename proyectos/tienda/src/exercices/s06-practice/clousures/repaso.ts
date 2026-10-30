import { books } from "../../../services/books";
import { booksBy } from "../../../utils/library";

//Crea una funcion fabrica que de saludos
export function makeGrater(gree: string): (name: string) => string {
  return (name) => `${gree} - ${name}`
}

const morning = makeGrater("Good morning")
const evening = makeGrater("Good night")

console.log(['Ana', 'uis', 'Pablo'].map(morning))


//Conversor de diferentes unidades
export function makeConventer(factor: number): (value: number) => number {
  return (value) => value * factor;
}

const kimToMiles = makeConventer(0.621);
const euroToDolars = makeConventer(1.08);

console.log(kimToMiles(10).toFixed(3)); // 6.21 millas son 10km
console.log(euroToDolars(100).toFixed(2)); // 108 dólares son 100 euros

//Crear un marcador de cualquier competicion
export function makeScoredBoard(): { scoreHome: () => void; scoreAwey() => void; result: () => string } => {
  //Declaro las variables que acumulan las puntuaciones del home y del awey
  let home = 0;
  let awey = 0;
  return {
    scoreHome: () => { home += 1 },
    scoreawey: () => { awey += 1 },
    result: () => `S{home} -- ${awey}`
  }
}

const granadaToMalaga = makeScoredBoard();
const finalChampion = makeScoredBoard();

granadaToMalaga.scoreHome();
granadaToMalaga.scoreHome();
granadaToMalaga.scoreAwey();

console.log(granadaToMalaga.result());
console.log(finalChampion.result());

//Ejercicio 4 book
const availableList = availableBooks(books);
console.log(`Cantidad de libros disponibles: ${availableList.length}`)

const author = "Miguel de Cervantes";
const authorBooks = booksBy(books, author);
const titles = authorBooks.map(b => b.title);
console.log(`Titulos de ${author}, titles`)

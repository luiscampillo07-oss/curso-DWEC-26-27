import type { Book } from "../../../types/book";

export function goalsByPlayers(goals: string[]): Map<string, number> {
  const count = new Map<string, number>();
  for (const goal of goals) {
    const previus = count.get(goal) ?? 0;
    count.set(goal, previus + 1);
  }
  return count;
}

export function topScorer(count: ReadonlyMap<string, number>): string | undefined {
  let maxPlayer: string | undefined = undefined;
  let max = 0;

  for (const [player, goals] of count) {
    if (goals > max) {
      max = goals;
      maxPlayer = player;
    }
  }
  return maxPlayer;
}

export function titlesByAuthor(books: Book[]): Map<string, string[]> {
  const order = new Map<string, string[]>();
  for (const book of books) {
    const current = order.get(book.author) ?? [];
    order.set(book.author, [...current, book.title]);
  }
  return order;
}

export function capitalOf(capitals: ReadonlyMap<string, string>, country: string): string {
  if (capitals.get(country) === undefined) {
    return `No conozco el pais: ${country}`;
  } else {
    return `La capital de ${country} es ${capitals.get(country)}`
  }
} 

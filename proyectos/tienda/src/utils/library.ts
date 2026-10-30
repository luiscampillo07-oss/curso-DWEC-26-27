import type { Book } from "../types/bookk";

export function availableBooks(list: Book[]): Book[] {
  return list.filter(b => b.available);
}

export function booksBy(list: Book[], author: string): Book[] {
  return list.filter(b => b.author.toLowerCase() === author.toLowerCase());
}

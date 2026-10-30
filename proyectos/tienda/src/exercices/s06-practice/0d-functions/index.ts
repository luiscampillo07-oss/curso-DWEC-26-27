import type { Movie, MovieOrder } from "../../../types/movies";

type PriceRule = (price: number) => number;

const addVat: PriceRule = (price) => price * 1.21;

export function applyToAll(prices: number[], rule: PriceRule): number[] {
  return prices.map(rule);
}

export function createDiscount(percent: number): PriceRule {
  return (price) => price * (1 - percent / 100);
}

const byYear: MovieOrder = (a, b) => a.year - b.year;
const byRatingDesc: MovieOrder = (a, b) => b.rating - a.rating;

export function sortMovies(movies: readonly Movie[], order: MovieOrder): string[] {
  return movies.toSorted(order).map(m => m.title);
}

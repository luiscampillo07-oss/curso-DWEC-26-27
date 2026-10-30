export type MovieOrder = (a: Movie, b: Movie) => number;

export interface Movie {
  title: string;
  year: number;
  rating: number;
}

export type Categoty = "perifericos" | "monitores" | "GPU"

export interface Product {
  readonly id: number;
  name: string;
  price: number;
  stock: number;
}

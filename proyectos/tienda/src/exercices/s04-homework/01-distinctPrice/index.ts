import type { Product } from "../../../types/product";

export function distinctPrices(list: Product[]): number {
  const unique = new Set<number>();
  for (const product of list) {
    unique.add(product.price);
  }
  return unique.size;
}

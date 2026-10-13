import type { Product } from "../../../types/product";

export function totalUnits(list: Product[]): number { //Es number porque el valor inicial es nmber
  return list.reduce((totalProducts, product) => totalProducts + product.stock, 0)
}

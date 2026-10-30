import type { Category, Product } from "../../../types/product";

export function stockByCategory(list: Product[]): Map<Category, number> {
  const mapCategorys = new Map();
  for (const p of list) {
    const currentCount = mapCategorys.get(p.category) || 0;
    mapCategorys.set(p.category, currentCount + 1);
  }
  return mapCategorys;
}

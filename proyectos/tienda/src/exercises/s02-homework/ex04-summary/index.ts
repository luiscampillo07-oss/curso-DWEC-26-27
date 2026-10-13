import type { Product, Summary } from "../../../types/product";

export function summary(list: Product[]): Summary {
  return list
    .reduce((productUnitValue, product) => ({
      products: productUnitValue.products + 1,
      units: productUnitValue.units + product.stock,
      value: productUnitValue.value + product.price * product.stock,
    }),
      { products: 0, units: 0, value: 0 }
    );
}

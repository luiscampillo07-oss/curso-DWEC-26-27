import type { Product } from "../../../types/product";

//Recibe una lista de productos y promete devolver una lista de numeros con el precio incluyendo el IVA
const VAT = 0.21;
export function priceWithVat(myProducts: Product[]): number[] {
  return myProducts.map((product) => product.price * VAT)
}

import type { Product } from "../../../types/product";

export function priceOf(list: Product[], id: number): number | null {
  const product = list.find(p => p.id === id);
  if (product === undefined) {
    return null;
  } else {
    return product.price;
  }
}

// Pregunta · ¿Por qué no es buena idea devolver 0 cuando el producto no existe?
// Respuesta: Porque puede interpretarse de manera que el producto sea gratis.

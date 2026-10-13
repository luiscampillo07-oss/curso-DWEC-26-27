//1.-Crear un tipo llamado Cartline que tenga el id del producto y la cantidad a comprar
export interface CartLine {
  productId: number;
  quantity: number;
}

export type Cart = CartLine[];

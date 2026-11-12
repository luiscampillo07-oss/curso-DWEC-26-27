//Tipos para mis productos
export interface Product {
  readonly id: number; // el id no cambia nunca
  name: string;
  price: number;
  favorite: boolean; // true si el usuario le da a favorito
}

export interface NewProduct {
  name: string;
  price: number;
}

//Un tipo describe la Forma de un dato
export type Category = 'audio' | 'monitors' | 'peripherals';

//Una interfaz es como un contrato con los valores que debe tener y el tipo. Typescript firma el contrato.. y si se rompe .. se queja.
//Los elementos van separados por ;
export interface Product {
  id: number;
  name: string;
  price: number; //Sin IVA
  category: Category;
  stock: number;
}



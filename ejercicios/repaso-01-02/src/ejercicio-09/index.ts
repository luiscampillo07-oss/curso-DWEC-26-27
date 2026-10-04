type Producto = {
  id: number
  nombre: string
  precio: number
  rebajado: boolean
}

const productos: Producto[] = [
  { id: 1, nombre: 'Teclado', precio: 25, rebajado: false },
  { id: 2, nombre: 'Ratón', precio: 15, rebajado: true },
  { id: 3, nombre: 'Monitor', precio: 180, rebajado: false },
  { id: 4, nombre: 'Altavoces', precio: 45, rebajado: true },
  { id: 5, nombre: 'Webcam', precio: 60, rebajado: false }
]

function rebajar(catalogo: Producto[], id: number): Producto[] {
  return catalogo.map((producto) => {
    if (producto.id !== id) {
      return producto;
    } else {
      const productoDescuento = Number((producto.precio * 0.9).toFixed(2));
      return {
        id: producto.id,
        nombre: producto.nombre,
        precio: productoDescuento,
        rebajado: true
      };
    }
  });
}

export function ejercicio09(): void {
  console.log(rebajar(productos, 3));
}

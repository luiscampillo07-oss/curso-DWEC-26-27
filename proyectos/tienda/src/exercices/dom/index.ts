/*
  *
  *
  *
  *DOM --> Arbol de objetos construidos con HTML
  *
  *
  <html>
    <body>
      <h1> Tienda </h1>
      <div id="category">
        <input id="search" type="search"/>
        <ul id="list"></ul>
      </div>
    </body>
  </html>
  
  document
    bodt
      h1
      div
        input#search
        ul#list
  *
  *
  NODE --> Todos los elementos del DOM se denominan NODOS (node)
    Element --> Cualquier etiqueta
      HTMLElement --> textContent, classList, dataset, etc
        HTMLInputElement --> .value, .cheched, etc
        HTMLButtonElement --> .disable, etc
        ........
  
  ¿Cómo se seleccionan los elementos del DOM?
  document.querySelector("#category") --> Metodo para seleccionar segun su id o class
  ********* MUCHO CUIDADO que ese query puede devolver null | Element ***********
  *
  *
  ¿Como se tipa en typeScript? De peor forma a mejor

  const search = document.querySelector("#search")! as HTMLInputElement; --> No utilizarla peor forma
  ! --> No te preocupes lo juro por Snoopy que no es null
  Es decir quita null de los posibles valores y te garantizo que existe

  const search2 = documenr.querySelector<HTMLInputElement>("#search") --> Es la mas utilizada y un poco mejor pero sigo sin comprobar si es un null | HTMLInputElement

  const searchInput = document.querySelector("#search") --> Es la mejor forma
  if(! (searchInput instanceOf HTMLInputElement)){
    //Te lanzo un error o te ridercciono a los errores
    throw new Error("No se encuentra la etiqueta search o no esta asociada a un input")
  }
  console.log(searchInput.value) --> Mostraria por pantalla lo que ha escrito en el input
  * 
*/

console.log("Estoy en index.ts")

//Crear variables que apunten a cada uno de los elementos del DOM que tengo diseñados en html

const controlInput = document.querySelector(".control")
if (!(controlInput instanceOf HTMLElement)) {
  //Te lanzo un error o te ridercciono a los errores
  throw new Error("No se encuentra el controlador control")
}

const searchInput = document.querySelector("#search")
if (!(searchInput instanceOf HTMLInputElement)) {
  //Te lanzo un error o te ridercciono a los errores
  throw new Error("No se encuentra la etiqueta search o no esta asociada a un input")
}

const laberInput = document.querySelector(".label")
if (!(laberInput instanceOf HTMLLabelElement)) {
  //Te lanzo un error o te ridercciono a los errores
  throw new Error("No se encuentra la etiqueta label o no esta asociada a una label")
}

const onlyInput = document.querySelector("#only-in-stock")
if (!(onlyInput instanceOf HTMLInputElement)) {
  //Te lanzo un error o te ridercciono a los errores
  throw new Error("No se encuentra la etiqueta only-in-stock o no esta asociada a un input")
}


const butoonInput = document.querySelector("#btn-clicks")
if (!(butoonInput instanceOf HTMLButtonElement)) {
  //Te lanzo un error o te ridercciono a los errores
  throw new Error("No se encuentra la etiqueta btn-clicks o no esta asociada a un button")
}

const ulistControl = document.querySelector("#list")
if (!(ulistControl instanceOf HTMLUListElement)) {
  //Te lanzo un error o te ridercciono a los errores
  throw new Error("No se encuentra la etiqueta list o no esta asociada a una unorderList")
}


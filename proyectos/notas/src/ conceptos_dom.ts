// A.- El Dato
import { products } from ".src/services/products";
state = { products: [{ id: 1, name: "raton", favorite: false }] }

  // B.- El DOM
  < ul >
  <li>
  <span>Raton 19.20 </span>
    < button data - action="favorite" data - id="1" > Favorito < /button> / / data - es un dataset con el valor que yo quiera
      < button data - action="delete" data - id="1" > Borrar </button>
        </li>
        </ul>

        < ul >
        <li>
        <span>Monitor 60.99 </span>
          < button data - action="favorite" data - id="2" > Favorito < /button> / / data - es un dataset con el valor que yo quiera
            < button data - action="delete" data - id="2" > Borrar </button>
              </li>
              </ul>

//para añadir un dataset a un nodo u objeto del DOM usamos objeto.dataset.nombre_del_dataset = "valor_del_dataset"
button.dataset.action = "favorite" // data- === dataset
button.datase.id = "1"

// C.- El Listener escucha y colocamos casi siempre en un nodo padre que englobe a todos los hijos que quiera escuchas
const list = document.getElementById("lista-productos");

list.addEventListener("click", (event) => {
  //Esto se ejecutara solo cuando ocurra el evento
})

//closest --> Simboliza el evento mas proximo... que tenga tal cosa.... (<lo que pongo aqui es lo que busco)
const button = xxxxx.target.closest('button[data-action]')-- > Este sería el boton pulsado
//Como ya tengo el boton le puedo sacar el id
const id = Number(button.dataset.id) // lee data-id="el numero que he pulsado y lo combertimos a number"

if (button.dataset.action === "favorite") { // leo data-action = "favorite"
  // lamo a una funcion que cambie el valor que tenga ese boton. A la funcion la llamare con el nombre Dispatch
  dispatch({ type: "favorite", id }) // hacer el cambio
}

// La funcion disparch coge el parametro, lo busca en mi data y le cambia el valor
funcion dispatch(action: Action): void {
  state = reducer(state, action) // --> cambia el dato en la data principal
  render(); // --> renderiza todo con la nueva data (repetimos el nodo por pantalla)
}

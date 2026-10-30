const graterThan10 = (number: number): boolean => number >= 10;

//Fabriquemos una funcion que pueda fabricar otras.

//1.- Typemos una funcion: type nombre_funcion = /parametros tipados) => Tipo_valor_devuelto.

type NumberCheck = (n: number) => boolean;

function greaterThan(limit: number): NumberCheck {
  function check(n: number): boolean {
    return n >= limit;
  }
  return check;
}

const greaterThan_10 = greaterThan(10);

console.log(greaterThan_10(40)); //Si le pongo parentesis se ejecuta al momento



const nums = [-2, 3, 4, -5, 6];

const greaterThan3 = greaterThan(3);

console.log(nums.filter(greaterThan3)); // [3, 4, 6]


//Crea una fabrica que le pase 2 valores y genere vedadero o falso si el valor pedido esta entre esos 2 valores sin incluir.

// between10and20 --> createBetween(zzzz, xxxx)

function createBetween(lowLimit: number, hightLimit: number): NumberCheck {

  //retun (n: number): boolean => n > lowLimit && n < hightLimit; --> Modo corto

  function chek(n: number): boolean {
    return n > lowLimit && n < hightLimit;
  }
  return chek;
}

const between10and20 = createBetween(10, 20);
console.log(between10and20(5));


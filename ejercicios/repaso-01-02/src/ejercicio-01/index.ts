const lecturas = ['21.5', '19', '', '23.5', 'error', '20'];

function analizarLecturas(lecturas: string[]): {
  validas: number;
  descartadas: number;
  media: string;
}
{
  let suma = 0;
  let descartadas = 0;
  let validas = 0; 

  for (const dato of lecturas) {
   if(typeof dato === 'string' && dato.trim() === '') {
      descartadas++;
      continue;
   }

   const num = Number(dato);

    if(Number.isFinite(num)){
     const temperatura = num >= 22 ? 'Caluroso' : 'Fresco';
     console.log(`${num}-->${temperatura}`);

      suma += num;
      validas++;
   }else{ 
     descartadas++;
   }
} 
const media = validas > 0 ? (suma / validas).toFixed(1): 'Sin datos';
console.log(`Media = ${media}`) ;

return{validas, descartadas, media};
}

export function ejercicio01(): void {
  console.log(analizarLecturas(lecturas));
}

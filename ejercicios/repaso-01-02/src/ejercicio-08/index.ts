const entradas = ['7', '4.5', '9', '3', '5.5', 'hola']

function mediaNotas(entradas: string[]): {
  validas: number
  media: string | null
} {
  const notaValida: number[] = []

  for (const dato of entradas) {
    const num = Number(dato)
    if (Number.isFinite(num) && num >= 0 && num <= 10) {
      notaValida.push(num)
    }
  }

  let suma = 0
  for (const nota of notaValida) {
    suma += nota
  }

  if (notaValida.length > 0) {
    const media = (suma / notaValida.length).toFixed(1)
    return { validas: notaValida.length, media }
  } else {
    return { validas: 0, media: null }
  }
}

export function ejercicio08(): void {
  console.log(mediaNotas(entradas))
}

import React, { Children, useEffect, useState } from "react"

export type Props = {
  children: React.ReactNode
}

const Gallery = ({ children }: Props) => {
  const [actual, setActual] = useState(0)
  const total = Children.count(children)

  //Pensar la lógica para ir cambiando la imagen actual cada 2 segundos. Agregar la limpieza
  useEffect(() => {
  }, [])

  return (
    <div>
      Cantidad: {total}
      <br />
      {Children.toArray(children)[actual]}
    </div>
  )
}

export default Gallery

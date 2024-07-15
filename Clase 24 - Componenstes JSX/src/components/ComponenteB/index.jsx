import React from 'react'
import ComponenteA from './ComponenteA';

export default function ComponenteB() {
    const handleEventoB = (mensaje) => {
        console.log(`Evento manejado del componente B - ${mensaje}`);
    }
  return (
    <div>
        <h1>Componente B</h1>
        <ComponenteA onEventoA={handleEventoB} />
    </div>
  )
}

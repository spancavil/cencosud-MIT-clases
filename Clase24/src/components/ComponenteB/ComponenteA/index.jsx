import React from "react";

export default function ComponenteA({ onEventoA }) {
  const handleClickEventoA = () => {
    onEventoA("Es el componente A");
  };
  return <button onClick={handleClickEventoA}>Disparar evento A</button>;
}

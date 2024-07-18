import React, { useEffect, useState } from "react";

export default function TPractico() {
  const [datos, setDatos] = useState();
  const [cargando, setCargando] = useState(true);
  const [idParametro, setIdParametro] = useState(1);

  useEffect(() => {
    fetchDatos();
  }, [idParametro]);

  const fetchDatos = () => {
    setCargando(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${idParametro}`)
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((e) => console.log(e))
      .finally(() => setCargando(false));
  };

  return (
    <div>
      <input
        type="text"
        value={idParametro}
        onChange={(e) => setIdParametro(e.target.value)}
      />
      {cargando ? (
        <p>Carando...</p>
      ) : (
        <>
          <p>{datos?.title}</p>
          <p>{datos?.body}</p>
        </>
      )}
    </div>
  );
}

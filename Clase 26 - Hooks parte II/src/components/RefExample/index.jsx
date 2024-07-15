import { useRef, useState } from "react";

export default function RefExample() {
  const [contador, setContador] = useState(0);
  const [bandera, setBandera] = useState(true);
  const counterRef = useRef(0);

  const reiniciar = () => {
    counterRef.current = 0;
    setContador(counterRef.current);
  };

  const incrementar = () => {
    counterRef.current += 1;
    setContador(counterRef.current);
  };
  const decrementar = () => {
    counterRef.current = counterRef.current - 1;
  };
  const alterarBandera = () => {
    setBandera(!bandera);
  };

  return (
    <>
      <p>contador: {contador}</p>
      <p>contador del userRef: {counterRef.current}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <button onClick={alterarBandera}>Alterar Bandera</button>
    </>
  );
}

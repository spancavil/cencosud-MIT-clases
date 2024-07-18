import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Formulario() {
  const [mail, setMail] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`Ingreso con el mail ${mail} y el nombre ${nombre}`);
    setMail("");
    setNombre("");
  };

  const setStateGlobal = (setState) => (e) => {
    setState(e.target.value);
  };

  const funcionTelefono = (e) => {
    let result = e.target.value.replace(/\D/g, "");
    setTelefono(result);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="mail"
        value={mail}
        onChange={setStateGlobal(setMail)}
        sx={{ backgroundColor: "white" }}
      />
      <TextField
        label="nombre"
        value={nombre}
        onChange={setStateGlobal(setNombre)}
        sx={{ backgroundColor: "white" }}
      />
      <TextField
        label="telefono"
        value={telefono}
        onChange={funcionTelefono}
        sx={{ backgroundColor: "white" }}
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
          maxLength:10
        }}
      />
      <Button type="submit">Enviar</Button>
    </form>
  );
}

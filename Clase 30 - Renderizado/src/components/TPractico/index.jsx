import { TextField, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function TPractico() {
  const [id, setId] = useState(101);
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const setStateGlobal = (setState) => (e) => {
    setState(e.target.value);
  };

  const onChangeNumeric = (e) => {
    let result = e.target.value.replace(/\D/g, "");
    setUserId(result);
  };

  const isFormValid = userId && title && body;

  const onSubmitForm = (e) => {
    e.preventDefault();
    let comando = {
      id: id,
      userId: userId,
      title: title,
      body: body,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", comando)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
      .finally(() => {
        setBody("");
        setTitle("");
        setUserId("");
        setId((prevId) => prevId + 1);
      });
  };

  return (
    <Grid container component="form" onSubmit={onSubmitForm} spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h4">Trabajo de Clase</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={userId}
          onChange={onChangeNumeric}
          label="Id Usuario"
          sx={{ backgroundColor: "white" }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={title}
          onChange={setStateGlobal(setTitle)}
          label="Titulo"
          sx={{ backgroundColor: "white" }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          value={body}
          onChange={setStateGlobal(setBody)}
          label="Descripcion"
          sx={{ backgroundColor: "white" }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          type="submit"
          disabled={!isFormValid}
          variant="contained"
          sx={{ backgroundColor: "white", color:"black" }}
        >
          Enviar Formulario
        </Button>
      </Grid>
    </Grid>
  );
}

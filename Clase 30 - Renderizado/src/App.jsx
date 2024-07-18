import { Grid } from "@mui/material";
import "./App.css";
import Formulario from "./components/Formulario";
import TPractico from "./components/TPractico";
function App() {
  return (
    <Grid container spacing={12}>
      <Grid item xs={12}>
        <Formulario />
      </Grid>
      <Grid item xs={12}>
        <TPractico />
      </Grid>
    </Grid>
  );
}

export default App;

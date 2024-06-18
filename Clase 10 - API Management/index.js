import express from "express";
import { rateLimit } from "express-rate-limit";

const app = express();

const limiter = rateLimit({
  windowMs: 5 * 1000, // Ventanas de 5 segundos
  limit: 1, // Permito una sola petición por ventana
  message: "Excediste el límite",
  headers: true,
});

/**
 * Aplico el middleware `limiter` a esta ruta en particular
 * Si quiero aplicar el middleware a toda la aplicación,
 * utilizar `app.use(limiter)`
 *  */
app.get("/api/ratelimit", limiter, (req, res) => {
  res.send({
    success: true,
    message: "Hola API Rate Limit!",
  });
});

app.listen(8888, () => {
  console.log("App listening on port 8888");
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo desde Docker en el puerto 3002!");
});

app.listen(3002, () => {
  console.log("Servidor corriendo en el puerto 3002");
});

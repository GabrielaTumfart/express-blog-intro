// importo express
const express = require("express");
// creo l'app express
const app = espress();
// definisco la posta
const port = 3000;

// rotta
app.get("/", (req, res) => {
  res.send("Server del Blog di Gabriela");
});
// avvio il server sulla porta 3000
app.listen(port, () => {
  console.log(`Server avviato con successo: ${port}`);
});

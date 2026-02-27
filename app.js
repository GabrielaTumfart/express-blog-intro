// importo express
const express = require("express");
// creo l'app express
const app = express();
// definisco la posta
const port = 3000;
// le imagine vengono visualizzate dal server
app.use(express.static("public"));
// array dei post

const posts = [];

// rotta
app.get("/", (req, res) => {
  res.send("Server del Blog di Gabriela");
});

app.get("/bacheca", (req, res) => {
  res.status(200).json({
    success: true,
    posts: [],
  });
});
// avvio il server sulla porta 3000
app.listen(port, () => {
  console.log(`Server avviato con successo: ${port}`);
});

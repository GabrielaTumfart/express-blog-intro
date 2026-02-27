// importo express
const express = require("express");
// creo l'app express
const app = express();
// definisco la posta
const port = 3000;
// le imagine vengono visualizzate dal server
app.use(express.static("public"));
// array dei post

const posts = [
    {
        id: 1,
        titolo: 'Cimabellone',
        contenuto: 'Un dolce soffice e profumatissimo, perfetto per la colazione'
        immagine: '/img/ciambellone.jpeg'
        tags: ['dolce', 'colazione', 'torta']
    },
    {
        id: 2,
        titolo: 'Cracker alla Barbabietola',
        contenuto: 'Cracker colorati e croccantissimi con semi, ottimi come snack',
        imagine: '/img/cracker_barbaietola.jpeg'
        tags: ['snck', 'barbabietola', 'cracker']
    },
    {
        id: 3,
        titolo: 'Pane Fritto Dplce',
        contenuto: 'Cubetti di pane fritto passati nello zucchero, una dolce rustico',
        immagine: '/img/pane_fritto_dolce.jpeg',
        tags: ['dolce', 'fritto', 'pane']
    },
    {
        id: 4,
        titolo: 'Pasta alla Barbabietola',
        contenuto: 'Rigatoni con crema di barbabietola, pistacchi e salvia.',
        immagine: '/img/pasta_barbabietola.jpeg',
        tags: ['pasta', 'barbabietola', 'primo']
    },
    {
        id: 5,
        titolo: 'Torta Paesana',
        contenuto: 'Torta rustica al cacao con frutta secca e arancia.',
        immagine: '/img/torta_paesana.jpeg',
        tags: ['torta', 'cacao', 'dolce']
    }
    ];

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

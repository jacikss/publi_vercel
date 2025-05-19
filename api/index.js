const express = require('express');
const app = express();

// Rota básica
app.get('/', (req, res) => {
  res.send('App funcionando no Vercel!');
});

// Exporta o app para o Vercel
module.exports = app;
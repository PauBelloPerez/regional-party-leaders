const express = require('express');
const path = require('path');
const app = express();

// Sirve todos los archivos estáticos de la carpeta raíz
app.use(express.static(path.join(__dirname, '/')));

// Ruta principal que devuelve tu HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'PruebaMapaExcel2.html'));
});

// Puerto que asigna Heroku
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App escuchando en puerto ${port}`));

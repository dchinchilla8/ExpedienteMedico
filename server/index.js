const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


// const db = require('./config/db'); // Comentado temporalmente
const userRoutes = require('./routes/userRoutes');

// Middleware para manejar JSON
app.use(express.json());

// Usar las rutas
app.use('/api', userRoutes);

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Bienvenido al API de Expediente Médico');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

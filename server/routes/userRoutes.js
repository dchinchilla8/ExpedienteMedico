const express = require('express');
const router = express.Router();

// Ruta de prueba para evitar errores
router.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]); // Datos de prueba
});

module.exports = router;

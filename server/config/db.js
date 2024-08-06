const mysql = require('mysql');

// Verifica si el entorno es de desarrollo y comenta la conexión
const connection = process.env.NODE_ENV === 'development' 
  ? null 
  : mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'test'
    });

if (connection) {
  connection.connect((err) => {
    if (err) {
      console.error('Error conectando a la base de datos:', err);
      return;
    }
    console.log('Conectado a la base de datos');
  });
}

module.exports = connection;

const db = require('../config/db');

exports.getUsers = (req, res) => {
  if (!db) {
    return res.status(500).send('Base de datos no disponible');
  }

  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

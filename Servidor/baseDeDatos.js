const mysql = require('mysql2');
require('dotenv').config(); // Carga variables de entorno desde un archivo .env

function conexionMetodo(query, values) {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    connection.connect((err) => {
      if (err) {
        reject(err); // Rechazar la promesa si hay un error en la conexión
      } else {
        console.log('Conectado a la base de datos');
      }
    });

    connection.execute(query, values, (err, results) => {
      if (err) {
        reject(err); // Rechazar la promesa si hay un error en la consulta
      } else {
        connection.end();
        resolve(results); // Resolver la promesa con los datos obtenidos
      }
    });
  });
}

module.exports = { conexionMetodo };


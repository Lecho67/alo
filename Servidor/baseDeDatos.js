const mysql = require('mysql');

function conexionMetodo(query) {
  return new Promise((resolve, reject) => {
    const conexion = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456789',
      database: 'InnovateU'
    });

    conexion.connect((err) => {
      if (err) {
        reject(err); // Rechazar la promesa si hay un error en la conexión
      } else {
        console.log('Conectado a la base de datos');
      }
    });

    conexion.query(query, function (err, lista) {
      if (err) {
        reject(err); // Rechazar la promesa si hay un error en la consulta
      } else {
        // console.log(lista);
        conexion.end();
        resolve(lista); // Resolver la promesa con los datos obtenidos
      }
    });
  });
}

module.exports = { conexionMetodo };


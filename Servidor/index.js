// Node variables
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../Interface")));
// Definir la ruta base dependiendo del localhost
// app.use((req, res, next) => {
//   let basePath = "";
//   if (req.hostname === "localhost") {
//     if (req.port === "3000") {
//       basePath = "/pene";
//     } else if (req.port === "4000") {
//       basePath = "/lecho"; // Cambiar a la ruta deseada
//     }
//   }
//   req.basePath = basePath;
//   next();
// });

// Variables conexion BD
let mysql = require("mysql");
const mysql2 = require("mysql2/promise");
const conexion = require("./baseDeDatos.js");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "InnovateU",
});
const pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "InnovateU",
  });
// Funcion asincrona para consultas a la BD
async function conexionAsync(query) {
    try {
      const resultado = await conexion.conexionMetodo(query);
      //console.log(resultado);
      return resultado;
    } catch (error) {
      console.error("Error:", error);
    }
}; 

// Controlador de interfaz Colaborador
const interfazColaborador = {
  ...require("../Interface/interfazColaborador/creador.js"),
  ...require("../Interface/interfazColaborador/clasificacion.js"),
  ...require("../Interface/interfazColaborador/visualizacion.js"),
  ...require("../Interface/interfazColaborador/propuestas.js"),
  ...require("../Interface/interfazColaborador/monitoreoTareas.js"),
  ...require("../Interface/interfazColaborador/edicionPerfil.js"),
  ...require("../Interface/interfazColaborador/medallas.js"),
};
const interfazPadrino = {
  ...require("../Interface/interfazPadrino/administradorPlanCarrera.js"),
}; 
const interfazDirectivo = {
  ...require("../Interface/interfazDirectivo/administradorEmpresa.js"),
}; 

let usuarioActivo = 600;
let periodoActual = ["2023-Q4","2023-Q3","2023-Q2","2023-Q1"];

// Variables PDFKit (Generar reportes)
const PDFDocument = require("pdfkit");
const pdfkitTable = require("pdfkit-table");

// Variables Multer (Manejo de Blobs)
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads"); // Directorio donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Usa el nombre original del archivo
  },
});
const upload = multer({ storage: storage });
// const upload = multer({ dest: 'uploads/' }); 


app.get("/mostrarImagen/:id", (req, res) => {
  const id = req.params.id;

  const sql = "SELECT archivo FROM EVIDENCIA WHERE id_evidencia = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res
        .status(500)
        .send("Error al obtener el archivo desde la base de datos.");
    }

    if (result.length === 0 || !result[0].archivo) {
      return res.status(404).send("Archivo no encontrado.");
    }

    const archivoBase64 = result[0].archivo;

    try {
      const archivoBuffer = Buffer.from(archivoBase64, "base64");
      if (Buffer.isBuffer(archivoBuffer)) {
        // El archivo base64 es válido y se ha decodificado correctamente
        res.setHeader("Content-Type", "image/jpeg");
        res.send(archivoBuffer);
      } else {
        // El archivo base64 no pudo ser decodificado correctamente
        return res.status(500).send("El archivo base64 no es válido.");
      }
    } catch (error) {
      console.error("Error al decodificar el archivo base64:", error);
      return res.status(500).send("Error al decodificar el archivo base64.");
    }
  }); 
});

app.post("/subirFotoGrupo/:idGrupo", upload.single("file"), async (req, res) => {
    const idGrupo = req.params.idGrupo;
    const nombreGrupo = req.body.nombre;
    const file = req.file;
    const fecha = new Date();
    const fechaSQL = fecha.toISOString().split("T")[0];

    const id_grupo = await conexionAsync(`SELECT grupo_id
    FROM PARTICIPACION
    WHERE usuario_id = ${usuarioActivo};`);

    const migrupo =
      await conexionAsync(`SELECT U.nombre AS Nombre,U.identificacion AS Identificacion, U.apellido AS Apellido, U.rol AS RolUsuario, U.cargo AS Cargo, G.nombre AS NombreGrupo,G.id_grupo AS id_grupo, P.rol AS RolParticipacion,
    (
    SELECT COALESCE(SUM(M.puntos), 0)
    FROM MEDALLA M JOIN PLANCARRERA PC ON M.id_plancarrera = PC.id_plancarrera 
    WHERE PC.id_usuario = U.identificacion) AS PuntosLogroTotales,
    (
        (
        SELECT COALESCE(SUM(A.unidades), 0)
        FROM ACTIVIDAD A JOIN PLANCARRERA PC ON A.id_plancarrera = PC.id_plancarrera
        WHERE PC.id_usuario = U.identificacion AND A.estado = true
        ) / 72 * 100
    ) AS PorcentajeCompletitud
    FROM USUARIO U
    INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id
    INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
    ORDER BY PorcentajeCompletitud DESC`);
    // console.log(migrupo)
    // console.log(id_grupo)
    let miGrupo = migrupo.filter((x) => x.id_grupo == id_grupo[0].grupo_id);

    if (!file) {
      return res.status(400).send("No se ha proporcionado ningún archivo.");
    }
    const nombreArchivo = file.originalname;

    fs.readFile(file.path, (err, data) => {
      if (err) {
        return res.status(500).send("Error al leer el archivo.");
      }

      const blob = data;
      if (nombreGrupo) {
        const sql =
          "UPDATE Grupo SET imagen = ?, nombre = ? WHERE id_grupo = ?";
        db.query(sql, [blob, nombreGrupo, idGrupo], (err, result) => {
          if (err) {
            return res
              .status(500)
              .send("Error al insertar en la base de datos.");
          }

          fs.unlinkSync(file.path);

          console.log("Evidencia subida y registrada en la base de datos");
          res.send(interfazColaborador.creadorDePaginasMiGrupo(miGrupo));
        });
      } else {
        sql = "UPDATE Grupo SET imagen = ? WHERE id_grupo = ?";
        db.query(sql, [blob, idGrupo], (err, result) => {
          if (err) {
            return res
              .status(500)
              .send("Error al insertar en la base de datos.");
          }

          fs.unlinkSync(file.path);

          console.log("Evidencia subida y registrada en la base de datos");
          res.send(interfazColaborador.creadorDePaginasMiGrupo(miGrupo));
        });
      }
    });
  }
);

app.get("/imagen/:idGrupo", async (req, res) => {
  const idGrupo = req.params.idGrupo;
  const result = await conexionAsync(
    `SELECT imagen FROM GRUPO where id_grupo = ${idGrupo}`
  );
  if (result.length > 0) {
    // Asegúrate de que se encontró un resultado en la consulta.
    const imageBuffer = result[0].imagen;
    res.set("Content-Type", "image/jpeg"); // Cambia 'image/jpeg' según el tipo de imagen que estás almacenando.
    res.send(imageBuffer);
  } else {
    res.status(404).send("No se encontró la imagen.");
  }
});

app.get("/foto/usuario", async (req, res) => {
  const result = await conexionAsync(
    `SELECT foto FROM Usuario where identificacion = ${usuarioActivo}`
  );
  if (result.length > 0) {
    // Asegúrate de que se encontró un resultado en la consulta.
    const imageBuffer = result[0].foto;
    res.set("Content-Type", "image/jpeg"); // Cambia 'image/jpeg' según el tipo de imagen que estás almacenando.
    res.send(imageBuffer);
  } else {
    res.status(404).send("No se encontró la imagen.");
  }
});

app.get("/foto/:idUsuario", async (req, res) => {
  const idUsuario = req.params.idUsuario;
  const result = await conexionAsync(
    `SELECT foto FROM Usuario where identificacion = ${idUsuario}`
  );
  if (result.length > 0) {
    // Asegúrate de que se encontró un resultado en la consulta.
    const imageBuffer = result[0].foto;
    res.set("Content-Type", "image/jpeg"); // Cambia 'image/jpeg' según el tipo de imagen que estás almacenando.
    res.send(imageBuffer);
  } else {
    res.status(404).send("No se encontró la imagen.");
  }
});

app.get("/descargarEvidencia/:idEvidencia", async (req, res) => {
  const idEvidencia = req.params.idEvidencia;
  const result = await conexionAsync(
    `SELECT nombre, archivo FROM EVIDENCIA WHERE id_evidencia = ${idEvidencia}`
  );

  if (result.length > 0) {
    const nombreArchivo = result[0].nombre;
    const archivoBuffer = result[0].archivo;

    res.setHeader('Content-Disposition', `attachment; filename="${nombreArchivo}"`);
    res.setHeader('Content-Type', 'application/octet-stream'); // Cambia el tipo MIME según el tipo de archivo que estás almacenando.

    res.send(archivoBuffer);
  } else {
    res.status(404).send("No se encontró el archivo.");
  }
});

app.get("/download", async (req, res) => {
  const result = await conexionAsync("SELECT * FROM EVIDENCIA");
  const archivos = [];

  result.map((archivo) => {
    const filePath = path.join(
      __dirname,
      "/downloads/" + archivo.id_evidencia + "-Archivo"
    );
    let extension = "";

    if (archivo.nombre.toLowerCase().endsWith(".pdf")) {
      extension = ".pdf";
    } else if (archivo.nombre.toLowerCase().endsWith(".png")) {
      extension = ".png";
    } else if (archivo.nombre.toLowerCase().endsWith(".mp4")) {
      extension = ".mp4";
    } else {
      console.error(`Formato de archivo no soportado: ${archivo.nombre}`);
      return;
    }

    try {
      fs.writeFileSync(
        filePath + extension,
        Buffer.from(archivo.archivo, "binary")
      );
      console.log(`${extension.toUpperCase()} guardado en:`, filePath);
      archivos.push(archivo.id_evidencia + "-Archivo" + extension);
    } catch (error) {
      console.error(`Error al guardar archivo:`, error);
    }
  });

  const archivosEnDirectorio = fs.readdirSync(__dirname + "/downloads");
  const archivosFiltrados = archivosEnDirectorio.filter(
    (file) =>
      file.endsWith(".pdf") || file.endsWith(".png") || file.endsWith(".mp4")
  );

  res.json(archivosFiltrados);
});

// app.get('/download', async (req, res) => {
//     const result = await miFuncionAsync('SELECT * FROM EVIDENCIA');
//     const archivos = [];

//     result.map(
//         archivo => {
//             const filePath = path.join(__dirname, '/downloads/' + archivo.id_evidencia + '-Archivo');

//             try {
//                 const extension = archivo.es_imagen ? '.png' : '.pdf';
//                 fs.writeFileSync(filePath + extension, Buffer.from(archivo.archivo, 'binary'));
//                 console.log(`${extension.toUpperCase()} guardado en:`, filePath);
//                 archivos.push(archivo.id_evidencia + '-Archivo' + extension);
//             } catch (error) {
//                 console.error(`Error al guardar ${archivo.es_imagen ? 'imagen' : 'PDF'}:`, error);
//             }
//         }
//     );

//     const archivosEnDirectorio = fs.readdirSync(__dirname + '/downloads');
//     const archivosFiltrados = archivosEnDirectorio.filter(file => file.endsWith('.pdf') || file.endsWith('.png'));

//     res.json(archivosFiltrados);
// });

app.get("/download-IMG", async (req, res) => {
  const result = await conexionAsync("SELECT * FROM EVIDENCIA");
  result.map((img) => {
    const filePath = path.join(
      __dirname,
      "/downloads/" + img.id_evidencia + "-Simon.png"
    );
    try {
      fs.writeFileSync(filePath, Buffer.from(img.archivo, "binary"));
      console.log("Imagen guardada en:", filePath);
    } catch (error) {
      console.error("Error al guardar imagen:", error);
    }
  });

  const imagenes = fs.readdirSync(__dirname + "/downloads");
  res.json(imagenes);
});

app.post("/subirEvidencia/:idActividad", upload.single("evidencia"), (req, res) => {
    const idActividad = req.params.idActividad;
    const file = req.file;
    const fecha = new Date();
    const fechaSQL = fecha.toISOString().split("T")[0];

    if (!file) {
      return res.status(400).send("No se ha proporcionado ningún archivo.");
    }
    const nombreArchivo = file.originalname;

    fs.readFile(file.path, (err, data) => {
      if (err) {
        return res.status(500).send("Error al leer el archivo.");
      }

      const blob = data;

      const sql =
        "INSERT INTO EVIDENCIA (nombre, fecha, archivo, id_actividad) VALUES (?, ?, ?, ?)";
      db.query(
        sql,
        [nombreArchivo, fechaSQL, blob, idActividad],
        (err, result) => {
          if (err) {
            return res
              .status(500)
              .send("Error al insertar en la base de datos.");
          }

          fs.unlinkSync(file.path); 

          console.log("Evidencia subida y registrada en la base de datos");
          res
            .status(200)
            .send("Evidencia subida y registrada en la base de datos");
        }
      );
    });
  }
);

app.get("/videos/:videoName", (req, res) => {
  const videoName = req.params.videoName;
  const videoPath = path.join(__dirname, "public/uploads", videoName);

  fs.access(videoPath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send("Video no encontrado.");
    }

    const videoStream = fs.createReadStream(videoPath);
    videoStream.pipe(res);
  });
});



// app.post('/subirEvidencia', upload.single('evidencia'), async (req, res) => {
//     try {
//         const evidencia = req.file;
//         const idActividad = 12;

//         const sql = 'INSERT INTO EVIDENCIA (archivo, id_actividad) VALUES (?, ?)';
//         const result = await miFuncionAsync([sql, [fs.readFileSync(evidencia.path), idActividad]]);

//         // Elimina el archivo temporal después de guardarlo en la base de datos
//         fs.unlinkSync(evidencia.path);

//         console.log('Evidencia subida y registrada en la base de datos');
//         res.send('Evidencia subida y registrada en la base de datos');
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).send('Error al subir la evidencia');
//     }
// });

app.post("/generar-reporte-grupal", async (req, res) => {
  const id_grupo = await conexionAsync(`SELECT grupo_id
        FROM PARTICIPACION
        WHERE usuario_id = ${usuarioActivo};`);

  const doc = new PDFDocument({ size: "letter" });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=archivo.pdf");

  doc.pipe(res);

  try {
    const connection = await pool.getConnection();

    const [rows, fields] = await connection.execute(
      `
            SELECT u.nombre, u.apellido, u.rol, pc.titulo, pc.objetivo, pc.descripcion
            FROM USUARIO u
            JOIN PARTICIPACION p ON u.identificacion = p.usuario_id
            JOIN PLANCARRERA pc ON u.identificacion = pc.id_usuario
            WHERE p.grupo_id = ?
        `,
      [id_grupo[0].grupo_id]
    );

    rows.forEach((row, index) => {
      if (index > 0) {
        doc.addPage();
      }

      const imagePath = "../Interface/images/Vortexbird.desarrolloSoftware.png";
      const imageOptions = {
        fit: [100, 50], // Tamaño de la imagen en puntos (ancho x alto)
        align: "right", // Alineación de la imagen
      };

      doc.fontSize(18).text("Plan Carrera", { align: "left" });
      doc
        .fontSize(12)
        .text("Trimestre Febrero-Abril de 2023", { align: "left" });

      // Obtener la anchura del texto "Plan Carrera"
      const textWidth = doc.widthOfString("Plan Carrera");

      // Calcular la posición x para la imagen
      const imageX = (doc.page.width - textWidth) / 2; // Centrar la imagen en la página

      doc.image(imagePath, imageX + textWidth + 100, doc.x, imageOptions);

      doc.moveDown(2);

      // Párrafo 1
      doc
        .fontSize(12)
        .text(`Nombre del Colaborador: ${row.nombre} ${row.apellido}`);
      // Espaciado con interlineado sencillo
      doc.moveDown(0.5);

      // Párrafo 2
      doc.fontSize(12).text(`Rol que desempeña: ${row.rol}`);
      // Espaciado con interlineado doble
      doc.moveDown(1);

      // Párrafo 3
      doc
        .fontSize(12)
        .text(
          "Recuerde distribuir 72 UDP en el trimestre. 7 unidades de Retorno a VortexBird. 7 unidades de crecimiento personal y 58 en formación técnica, con apoyo de su Coach.",
          { align: "justify" }
        );
      // Espaciado con interlineado sencillo
      doc.moveDown(1.5);

      // Párrafo 4
      // Información del Plan Carrera en una tabla
      const table = {
        headers: ["Título", "Objetivo", "Descripción"],
        rows: [[row.titulo, row.objetivo, row.descripcion]],
      };

      const tableTop = doc.y; // Guardar la posición actual

      doc.font("Helvetica-Bold").fontSize(12);

      table.headers.forEach((header, i) => {
        doc.text(header, 100 + i * 150, tableTop, {
          width: 150,
          align: "center",
        });
      });

      doc.font("Helvetica").fontSize(10);

      table.rows.forEach((row, i) => {
        row.forEach((cell, j) => {
          doc.text(cell, 100 + j * 150, tableTop + (i + 1) * 15, {
            width: 150,
            align: "center",
          });
        });
      });
      // Espaciado con interlineado doble
      doc.moveDown(3.5);

      // Párrafo 5
      // Líneas para las firmas
      doc.lineTo(250, doc.y).stroke();
      doc.text(
        "______________________                        _____________________",
        80,
        null,
        { align: "left" }
      );

      doc.moveDown(0.5);

      doc.lineTo(450, doc.y).stroke();
      doc.text(
        "Firma Colaborador                                      Firma Aval Coach",
        80,
        null,
        { align: "left" }
      );
      // Espaciado con interlineado sencillo
      doc.moveDown(2);

      // Párrafo 6
      // Espacio para la fecha de entrega
      doc.text(
        "Fecha de entrega del Plan Carrera:     ______________________",
        80,
        doc.y
      );
      doc.moveDown(1);
    });

    connection.release();
    connection.end();

    doc.end();
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al generar el PDF");
  }
});

app.post("/generar-reporte-global", async (req, res) => {
  const doc = new PDFDocument({ size: "letter" });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=archivo.pdf");

  doc.pipe(res);

  try {
    const connection = await pool.getConnection();

    const [rows, fields] = await connection.execute(`
            SELECT u.nombre, u.apellido, u.rol, pc.titulo, pc.objetivo, pc.descripcion
            FROM USUARIO u
            JOIN PARTICIPACION p ON u.identificacion = p.usuario_id
            JOIN PLANCARRERA pc ON u.identificacion = pc.id_usuario
            `);

    rows.forEach((row, index) => {
      if (index > 0) {
        doc.addPage();
      }

      const imagePath = "../Interface/images/Vortexbird.desarrolloSoftware.png";
      const imageOptions = {
        fit: [100, 50], // Tamaño de la imagen en puntos (ancho x alto)
        align: "right", // Alineación de la imagen
      };
      const fecha = new Date();
      const formattedDate = `${fecha.getDate()}/${
        fecha.getMonth() + 1
      }/${fecha.getFullYear()}`;

      doc.fontSize(18).text("Plan Carrera", { align: "left" });
      doc
        .fontSize(12)
        .text("Trimestre Febrero-Abril de 2023", { align: "left" });
      doc.text(`Fecha: ${formattedDate}`);

      // Obtener la anchura del texto "Plan Carrera"
      const textWidth = doc.widthOfString("Plan Carrera");

      // Calcular la posición x para la imagen
      const imageX = (doc.page.width - textWidth) / 2; // Centrar la imagen en la página

      doc.image(imagePath, imageX + textWidth + 100, doc.x, imageOptions);

      doc.moveDown(2);

      // Párrafo 1
      doc
        .fontSize(12)
        .text(`Nombre del Colaborador: ${row.nombre} ${row.apellido}`);
      // Espaciado con interlineado sencillo
      doc.moveDown(0.5);

      // Párrafo 2
      doc.fontSize(12).text(`Rol que desempeña: ${row.rol}`);
      // Espaciado con interlineado doble
      doc.moveDown(1);

      doc.moveDown(1.5);

      // Párrafo 4
      // Información del Plan Carrera en una tabla
      const table = {
        headers: ["Título", "Objetivo", "Descripción"],
        rows: [[row.titulo, row.objetivo, row.descripcion]],
      };

      const tableTop = doc.y; // Guardar la posición actual

      doc.font("Helvetica-Bold").fontSize(12);

      table.headers.forEach((header, i) => {
        doc.text(header, 100 + i * 150, tableTop, {
          width: 150,
          align: "center",
        });
      });

      doc.font("Helvetica").fontSize(10);

      table.rows.forEach((row, i) => {
        row.forEach((cell, j) => {
          doc.text(cell, 100 + j * 150, tableTop + (i + 1) * 15, {
            width: 150,
            align: "center",
          });
        });
      });
      // Espaciado con interlineado doble
      doc.moveDown(3.5);

      // Párrafo 5
      // Líneas para las firmas
      doc.lineTo(250, doc.y).stroke();
      doc.text(
        "______________________                        _____________________",
        80,
        null,
        { align: "left" }
      );

      doc.moveDown(0.5);

      doc.lineTo(450, doc.y).stroke();
      doc.text(
        "Firma Colaborador                                      Firma Aval Coach",
        80,
        null,
        { align: "left" }
      );
      // Espaciado con interlineado sencillo
      doc.moveDown(2);

      // Párrafo 6
      // Espacio para la fecha de entrega
      doc.text(
        "Fecha de entrega del Plan Carrera:     ______________________",
        80,
        doc.y
      );
      doc.moveDown(1);
    });

    connection.release();
    connection.end();

    doc.end();
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al generar el PDF");
  }
});

app.post("/generar-acta", async (req, res) => {
  const doc = new PDFDocument({ size: "letter" });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=archivo.pdf");

  doc.pipe(res);

  try {
    const connection = await pool.getConnection();

    const [rows, fields] = await connection.execute(
      `
            SELECT u.nombre, u.apellido, u.rol, pc.titulo, pc.objetivo, pc.descripcion
            FROM USUARIO u
            JOIN PARTICIPACION p ON u.identificacion = p.usuario_id
            JOIN PLANCARRERA pc ON u.identificacion = pc.id_usuario
            WHERE p.grupo_id = ?
        `,
      [id_grupo[0].grupo_id]
    );

    rows.forEach((row, index) => {
      if (index > 0) {
        doc.addPage();
      }

      const imagePath = "../Interface/images/Vortexbird.desarrolloSoftware.png";
      const imageOptions = {
        fit: [100, 50], // Tamaño de la imagen en puntos (ancho x alto)
        align: "right", // Alineación de la imagen
      };

      doc.fontSize(18).text("Plan Carrera", { align: "left" });
      doc
        .fontSize(12)
        .text("Trimestre Febrero-Abril de 2023", { align: "left" });

      // Obtener la anchura del texto "Plan Carrera"
      const textWidth = doc.widthOfString("Plan Carrera");

      // Calcular la posición x para la imagen
      const imageX = (doc.page.width - textWidth) / 2; // Centrar la imagen en la página

      doc.image(imagePath, imageX + textWidth + 100, doc.x, imageOptions);

      doc.moveDown(2);

      // Párrafo 1
      doc
        .fontSize(12)
        .text(`Nombre del Colaborador: ${row.nombre} ${row.apellido}`);
      // Espaciado con interlineado sencillo
      doc.moveDown(0.5);

      // Párrafo 2
      doc.fontSize(12).text(`Rol que desempeña: ${row.rol}`);
      // Espaciado con interlineado doble
      doc.moveDown(1);

      // Párrafo 3
      doc
        .fontSize(12)
        .text(
          "Recuerde distribuir 72 UDP en el trimestre. 7 unidades de Retorno a VortexBird. 7 unidades de crecimiento personal y 58 en formación técnica, con apoyo de su Coach.",
          { align: "justify" }
        );
      // Espaciado con interlineado sencillo
      doc.moveDown(1.5);

      // Párrafo 4
      // Información del Plan Carrera en una tabla
      const table = {
        headers: ["Título", "Objetivo", "Descripción"],
        rows: [[row.titulo, row.objetivo, row.descripcion]],
      };

      const tableTop = doc.y; // Guardar la posición actual

      doc.font("Helvetica-Bold").fontSize(12);

      table.headers.forEach((header, i) => {
        doc.text(header, 100 + i * 150, tableTop, {
          width: 150,
          align: "center",
        });
      });

      doc.font("Helvetica").fontSize(10);

      table.rows.forEach((row, i) => {
        row.forEach((cell, j) => {
          doc.text(cell, 100 + j * 150, tableTop + (i + 1) * 15, {
            width: 150,
            align: "center",
          });
        });
      });
      // Espaciado con interlineado doble
      doc.moveDown(3.5);

      // Párrafo 5
      // Líneas para las firmas
      doc.lineTo(250, doc.y).stroke();
      doc.text(
        "______________________                        _____________________",
        80,
        null,
        { align: "left" }
      );

      doc.moveDown(0.5);

      doc.lineTo(450, doc.y).stroke();
      doc.text(
        "Firma Colaborador                                      Firma Aval Coach",
        80,
        null,
        { align: "left" }
      );
      // Espaciado con interlineado sencillo
      doc.moveDown(2);

      // Párrafo 6
      // Espacio para la fecha de entrega
      doc.text(
        "Fecha de entrega del Plan Carrera:     ______________________",
        80,
        doc.y
      );
      doc.moveDown(1);
    });

    connection.release();
    connection.end();

    doc.end();
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al generar el PDF");
  }
});

// DIRECTIVO PDF

// app.post('/generar-pdf', (req, res) => {
//     const doc = new PDFDocument();

//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', 'inline; filename=archivo.pdf');

//     doc.pipe(res);

//     doc.fontSize(25).text('Hola, este es un PDF generado desde Node.js', 100, 100);

//     doc.end();
//   });



// generador de pagina de inicio
// app.get('/inicio', (req, res) => {
//     res.send(paginas.creadorDePaginaIndexhtml());
// });

// generador de pagina de inicio

app.get("", (req, res) => {
  res.redirect("/inicio");
});

app.get("/inicio", async (req, res) => {
  try {
    const top3Grupo =
      await conexionAsync(`SELECT G.nombre AS NombreGrupo, GROUP_CONCAT(DISTINCT CASE WHEN P.rol = 'P' THEN U.nombre ELSE NULL END) AS Padrino,
      (SUM(CASE WHEN P.rol = 'C' THEN A.unidades ELSE 0 END) / (COUNT(DISTINCT CASE WHEN P.rol = 'C' THEN P.usuario_id END)* 72)) * 100 AS PorcentajeCompletitud
      FROM GRUPO G
      INNER JOIN PARTICIPACION P ON G.id_grupo = P.grupo_id
      INNER JOIN USUARIO U ON P.usuario_id = U.identificacion
      LEFT JOIN PLANCARRERA PC ON U.identificacion = PC.id_usuario
      LEFT JOIN ACTIVIDAD A ON PC.id_plancarrera = A.id_plancarrera AND A.estado = true
      GROUP BY G.nombre ORDER BY PorcentajeCompletitud DESC limit 3;`);
    const top5Colab =
      await conexionAsync(`SELECT U.nombre AS NombreUsuario, U.apellido As ApellidoUsuario, SUM(M.puntos) AS SumaPuntosMedallas
      FROM USUARIO U
      LEFT JOIN PLANCARRERA PC ON U.identificacion = PC.id_usuario
      LEFT JOIN MEDALLA M ON PC.id_plancarrera = M.id_plancarrera
      GROUP BY U.nombre,U.apellido ORDER BY SumaPuntosMedallas DESC LIMIt 5;`);
    const usuario = await conexionAsync(
      `SELECT U.nombre AS NombreUsuario, ((
        SELECT COALESCE(SUM(A.unidades), 0)
        FROM ACTIVIDAD A JOIN PLANCARRERA PC ON A.id_plancarrera = PC.id_plancarrera
        WHERE PC.id_usuario = U.identificacion AND A.estado = true
        ) / 72 * 100 ) AS PorcentajeCompletitud FROM USUARIO U WHERE U.identificacion =` +
        usuarioActivo +
        `;`
    );
    const actividadesPendientes = await conexionAsync(
      `SELECT A.titulo, A.fecha_fin
      FROM ACTIVIDAD A
      JOIN PLANCARRERA PC ON A.id_plancarrera = PC.id_plancarrera
      WHERE PC.id_usuario = ` +
        usuarioActivo +
        ` AND A.estado = false;`
    );

    console.log(actividadesPendientes);

    res.send(
      interfazColaborador.creadorDePaginaIndexhtml(
        top3Grupo,
        top5Colab,
        usuario,
        actividadesPendientes
      )
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});


app.get("/grupos", async (req, res) => {
  try {
    const Miembrosgrupos =
      await conexionAsync(`SELECT U.nombre AS Nombre,U.identificacion AS Identificacion, U.apellido AS Apellido, U.rol AS RolUsuario, U.cargo AS Cargo, G.nombre AS NombreGrupo,G.id_grupo AS id_grupo, P.rol AS RolParticipacion,
        (
        SELECT COALESCE(SUM(M.puntos), 0)
        FROM MEDALLA M JOIN PLANCARRERA PC ON M.id_plancarrera = PC.id_plancarrera 
        WHERE PC.id_usuario = U.identificacion) AS PuntosLogroTotales,
        (
            (
            SELECT COALESCE(SUM(A.unidades), 0)
            FROM ACTIVIDAD A JOIN PLANCARRERA PC ON A.id_plancarrera = PC.id_plancarrera
            WHERE PC.id_usuario = U.identificacion AND A.estado = true
            ) / 72 * 100
        ) AS PorcentajeCompletitud
        FROM USUARIO U
        INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id
        INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
        ORDER BY PorcentajeCompletitud DESC`);

        const grupos = await conexionAsync(`SELECT * FROM GRUPO`);
        console.log(Miembrosgrupos)
    res.send(interfazColaborador.creadorDePaginasGrupos(Miembrosgrupos,grupos));
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.get("/empresa", async (req, res) => {
  try {
    const RolUsuario =
      await conexionAsync(`SELECT U.rol from USUARIO U WHERE U.identificacion = ${usuarioActivo}`);
    const usuarios =
      await conexionAsync(`SELECT U.nombre AS Nombre,U.apellido AS Apellido,U.rol AS Rol,U.cargo AS Cargo,U.identificacion AS Identificacion,G.nombre AS Grupo,P.rol AS CargoEnParticipacion
        FROM USUARIO U JOIN PARTICIPACION P ON U.identificacion = P.usuario_id JOIN GRUPO G ON P.grupo_id = G.id_grupo`);
      if (RolUsuario[0].rol == "directivo") {
        res.send(interfazDirectivo.creadorDePaginaEmpresa(usuarios));
      } else {
        res.send(interfazColaborador.creadorDePaginaEmpresa(usuarios));
      }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

// generador de pagina de mi grupo
app.get("/migrupo", async (req, res) => {
  try {
    const id_grupo = await conexionAsync(`SELECT grupo_id, rol
        FROM PARTICIPACION
        WHERE usuario_id = ${usuarioActivo};`);

    const migrupo =
      await conexionAsync(`SELECT U.nombre AS Nombre,U.identificacion AS Identificacion, U.apellido AS Apellido, U.rol AS RolUsuario, U.cargo AS Cargo, G.nombre AS NombreGrupo,G.id_grupo AS id_grupo, P.rol AS RolParticipacion,
        (
        SELECT COALESCE(SUM(M.puntos), 0)
        FROM MEDALLA M JOIN PLANCARRERA PC ON M.id_plancarrera = PC.id_plancarrera 
        WHERE PC.id_usuario = U.identificacion) AS PuntosLogroTotales,
        (
            (
            SELECT COALESCE(SUM(A.unidades), 0)
            FROM ACTIVIDAD A JOIN PLANCARRERA PC ON A.id_plancarrera = PC.id_plancarrera
            WHERE PC.id_usuario = U.identificacion AND A.estado = true
            ) / 72 * 100
        ) AS PorcentajeCompletitud
        FROM USUARIO U
        INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id
        INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
        ORDER BY PorcentajeCompletitud DESC`);
    // console.log(migrupo)
    // console.log(id_grupo) 
    let miGrupo = migrupo.filter((x) => x.id_grupo == id_grupo[0].grupo_id);
    if (id_grupo[0].rol == 'P') {
      res.send(interfazPadrino.creadorDePaginasMiGrupo(miGrupo));
    }else{
      res.send(interfazColaborador.creadorDePaginasMiGrupo(miGrupo));
    }
    
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.get("/grupo/:grupoId", async (req, res) => {
  try {
    let id_grupo = req.params.grupoId;
    const migrupo =
      await conexionAsync(`SELECT U.nombre AS Nombre,U.identificacion AS Identificacion, U.apellido AS Apellido, U.rol AS RolUsuario, U.cargo AS Cargo, G.nombre AS NombreGrupo,G.id_grupo AS id_grupo, P.rol AS RolParticipacion,
        (
        SELECT COALESCE(SUM(M.puntos), 0)
        FROM MEDALLA M JOIN PLANCARRERA PC ON M.id_plancarrera = PC.id_plancarrera 
        WHERE PC.id_usuario = U.identificacion) AS PuntosLogroTotales,
        (
            (
            SELECT COALESCE(SUM(A.unidades), 0)
            FROM ACTIVIDAD A JOIN PLANCARRERA PC ON A.id_plancarrera = PC.id_plancarrera
            WHERE PC.id_usuario = U.identificacion AND A.estado = true
            ) / 72 * 100
        ) AS PorcentajeCompletitud
        FROM USUARIO U
        INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id
        INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
        ORDER BY PorcentajeCompletitud DESC`);
    let miGrupo = migrupo.filter((x) => x.id_grupo == id_grupo);
    res.send(interfazColaborador.creadorDePaginasMiGrupo(miGrupo));
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});
// generador de pagina clasificaciones
 
app.get("/clasificaciones", async (req, res) => {
    try {
        const modoCompetitivo = await conexionAsync(`SELECT competitivo
        FROM USUARIO
        WHERE identificacion = ${usuarioActivo};
        `);
        console.log(modoCompetitivo);
        if (modoCompetitivo[0].competitivo == true) {
            try {
                const clasificacionGlobal =
                  await conexionAsync(`SELECT U.nombre AS Nombre, U.apellido AS Apellido, U.rol AS RolUsuario, U.cargo AS Cargo, G.nombre AS NombreGrupo, P.rol AS RolParticipacion,
                    (
                    SELECT COALESCE(SUM(M.puntos), 0)
                    FROM MEDALLA M JOIN PLANCARRERA PC ON M.id_plancarrera = PC.id_plancarrera 
                    WHERE PC.id_usuario = U.identificacion) AS PuntosLogroTotales,
                    (
                        (
                        SELECT COALESCE(SUM(A.unidades), 0)
                        FROM ACTIVIDAD A JOIN PLANCARRERA PC ON A.id_plancarrera = PC.id_plancarrera
                        WHERE PC.id_usuario = U.identificacion AND A.estado = true
                        ) / 72 * 100
                    ) AS PorcentajeCompletitud
                    FROM USUARIO U
                    INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id
                    INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
                    ORDER BY PorcentajeCompletitud DESC;`);
                res.send(interfazColaborador.creadorDePaginaClasificaciones(clasificacionGlobal));
              } catch (error) {
                console.error("Error:", error);
                res.status(500).send("Error en la consulta a la base de datos");
              }
        } else {
            res.send(interfazColaborador.creadorDePaginaSinClasificaciones());
        } 
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error en la consulta a la base de datos");
      }
        
});
 
app.get("/clasificacionesGrupos", async (req, res) => {
  try {
    const clasificacionesGrupos =
      await conexionAsync(`SELECT G.nombre AS NombreGrupo, GROUP_CONCAT(DISTINCT CASE WHEN P.rol = 'P' THEN U.nombre ELSE NULL END) AS Padrino, G.id_grupo,
          (SUM(CASE WHEN P.rol = 'C' THEN A.unidades ELSE 0 END) / (COUNT(DISTINCT CASE WHEN P.rol = 'C' THEN P.usuario_id END)* 72)) * 100 AS PorcentajeCompletitud
          FROM GRUPO G
          INNER JOIN PARTICIPACION P ON G.id_grupo = P.grupo_id
          INNER JOIN USUARIO U ON P.usuario_id = U.identificacion
          LEFT JOIN PLANCARRERA PC ON U.identificacion = PC.id_usuario
          LEFT JOIN ACTIVIDAD A ON PC.id_plancarrera = A.id_plancarrera AND A.estado = true
          GROUP BY G.nombre,G.id_grupo ORDER BY PorcentajeCompletitud DESC`);
    res.send(
      interfazColaborador.creadorDePaginasClasificacionesGrupos(
        clasificacionesGrupos
      )
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.get("/perfil/:userId", async (req, res) => {
  try {
    const userId = req.params.userId; // Obtén el userId desde la URL
    // Realiza una consulta para obtener la información del usuario con el ID especificado
    const usuario = await conexionAsync(
      `SELECT
      U.nombre AS Nombre,
      U.rol AS RolUsuario,
      U.cargo AS CargoUsuario,
      U.identificacion AS id,
      G.nombre AS NombreGrupo,
      P.rol AS RolEnGrupo,
      U.descripcion AS Descripcion,
      COALESCE(MS.SumaPuntosMedalla, 0) AS SumaPuntosMedalla,
      (COALESCE(SUM(A.unidades), 0) / 72) * 100 AS PorcentajeCompletacion
  FROM USUARIO U
  INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id
  INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
  LEFT JOIN PLANCARRERA PC ON U.identificacion = PC.id_usuario
  LEFT JOIN ACTIVIDAD A ON PC.id_plancarrera = A.id_plancarrera AND A.estado = true
  LEFT JOIN (
      SELECT PC.id_usuario, SUM(M.puntos) AS SumaPuntosMedalla
      FROM PLANCARRERA PC
      LEFT JOIN MEDALLA M ON PC.id_plancarrera = M.id_plancarrera
      GROUP BY PC.id_usuario
  ) AS MS ON U.identificacion = MS.id_usuario
  WHERE U.identificacion = ` +
        userId +
        `
  GROUP BY U.identificacion, U.nombre, U.rol, G.nombre, P.rol;`
    );

    // A continuación, puedes crear una página HTML con la información del usuario y enviarla como respuesta.
    // Puedes usar una plantilla HTML similar a la que usaste en "creadorDePaginaEmpresa" pero personalizada para el perfil del usuario.

    // Luego, envía la página como respuesta.
    res.send(interfazColaborador.creadorDePaginasPerfil(usuario));
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.get("/miperfil", async (req, res) => {
  try {
    const usuarioPerfil = await conexionAsync(
      `SELECT
        U.nombre AS Nombre,
        U.rol AS RolUsuario,
        U.identificacion AS id,
        U.cargo AS CargoUsuario,
        G.nombre AS NombreGrupo,
        P.rol AS RolEnGrupo,
        U.descripcion AS Descripcion,
        COALESCE(MS.SumaPuntosMedalla, 0) AS SumaPuntosMedalla,
        (COALESCE(SUM(A.unidades), 0) / 72) * 100 AS PorcentajeCompletacion
    FROM USUARIO U
    INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id
    INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
    LEFT JOIN PLANCARRERA PC ON U.identificacion = PC.id_usuario
    LEFT JOIN ACTIVIDAD A ON PC.id_plancarrera = A.id_plancarrera AND A.estado = true
    LEFT JOIN (
        SELECT PC.id_usuario, SUM(M.puntos) AS SumaPuntosMedalla
        FROM PLANCARRERA PC
        LEFT JOIN MEDALLA M ON PC.id_plancarrera = M.id_plancarrera
        GROUP BY PC.id_usuario
    ) AS MS ON U.identificacion = MS.id_usuario
    WHERE U.identificacion = ` +
        usuarioActivo +
        `
    GROUP BY U.identificacion, U.nombre, U.rol, G.nombre, P.rol;`
    );
    res.send(interfazColaborador.creadorDePaginasMiPerfil(usuarioPerfil));
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

 //      BUZON      //
//   COLABORADOR   //

app.get("/buzon", async (req, res) => {
  try {
    const id_grupo = await conexionAsync(`SELECT p.grupo_id, u.rol as rol_u, p.rol as rol_p
        FROM PARTICIPACION P
        INNER JOIN USUARIO U ON U.identificacion = P.usuario_id
        WHERE usuario_id = ${usuarioActivo};`);
    if (id_grupo[0].rol_u == 'directivo'){
        if (id_grupo[0].rol_p == 'P') {
          const propuestasPCT = await conexionAsync(`SELECT 
            U.nombre AS nombre, 
            PP.*,
            SUM(PA.presupuesto) AS presupuesto
        FROM 
            USUARIO U
            INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id
            INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
            INNER JOIN PLANCARRERA PC ON U.identificacion = PC.id_usuario
            INNER JOIN PROPUESTA_P PP ON PC.id_plancarrera = PP.id_plancarrera
            LEFT JOIN PROPUESTA_A PA ON PP.id_PP = PA.id_PP
        WHERE 
            PP.estado = 'D'
        GROUP BY
            PP.id_PP;`);
            const propuestasPC = await conexionAsync(`SELECT 
            U.nombre AS nombre, 
            PP.*,
            SUM(PA.presupuesto) AS presupuesto
        FROM 
            USUARIO U
            INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id AND P.rol = 'C'
            INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
            INNER JOIN PLANCARRERA PC ON U.identificacion = PC.id_usuario
            INNER JOIN PROPUESTA_P PP ON PC.id_plancarrera = PP.id_plancarrera
            LEFT JOIN PROPUESTA_A PA ON PP.id_PP = PA.id_PP
        WHERE 
            G.id_grupo = ${id_grupo[0].grupo_id}
            AND PP.estado = 'C'
        GROUP BY
            PP.id_PP;`);
            const evidencias = await conexionAsync(`SELECT U.nombre AS nombreUsuario, A.titulo AS nombreActividad, E.*
                FROM USUARIO U 
                INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id AND P.rol = 'C'
                INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
                INNER JOIN PLANCARRERA PC ON PC.id_usuario = U.identificacion
                INNER JOIN ACTIVIDAD A ON A.id_plancarrera = PC.id_plancarrera
                INNER JOIN EVIDENCIA E ON E.id_actividad = A.id_actividad
                WHERE G.id_grupo = ${id_grupo[0].grupo_id};`);
        
            res.send(interfazDirectivo.creadorDePaginaBuzonCoach(propuestasPC,evidencias,propuestasPCT));
        }else{
          const propuestasPCT = await conexionAsync(`SELECT 
              U.nombre AS nombre, 
              PP.*,
              SUM(PA.presupuesto) AS presupuesto
          FROM 
              USUARIO U
              INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id
              INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
              INNER JOIN PLANCARRERA PC ON U.identificacion = PC.id_usuario
              INNER JOIN PROPUESTA_P PP ON PC.id_plancarrera = PP.id_plancarrera
              LEFT JOIN PROPUESTA_A PA ON PP.id_PP = PA.id_PP
          WHERE 
              PP.estado = 'D' 
          GROUP BY
              PP.id_PP;`);
          res.send(interfazDirectivo.creadorDePaginaBuzon(propuestasPCT));
        }
  }else{
        if (id_grupo[0].rol_p == 'P') {
          const propuestasPC = await conexionAsync(`SELECT 
          U.nombre AS nombre, 
          PP.*,
          SUM(PA.presupuesto) AS presupuesto
      FROM 
          USUARIO U
          INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id AND P.rol = 'C'
          INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
          INNER JOIN PLANCARRERA PC ON U.identificacion = PC.id_usuario
          INNER JOIN PROPUESTA_P PP ON PC.id_plancarrera = PP.id_plancarrera
          LEFT JOIN PROPUESTA_A PA ON PP.id_PP = PA.id_PP
      WHERE 
          G.id_grupo = ${id_grupo[0].grupo_id}
          AND PP.estado = 'C'
      GROUP BY
          PP.id_PP;`);
          const evidencias = await conexionAsync(`SELECT U.nombre AS nombreUsuario, A.titulo AS nombreActividad, E.*
              FROM USUARIO U 
              INNER JOIN PARTICIPACION P ON U.identificacion = P.usuario_id AND P.rol = 'C'
              INNER JOIN GRUPO G ON P.grupo_id = G.id_grupo
              INNER JOIN PLANCARRERA PC ON PC.id_usuario = U.identificacion
              INNER JOIN ACTIVIDAD A ON A.id_plancarrera = PC.id_plancarrera
              INNER JOIN EVIDENCIA E ON E.id_actividad = A.id_actividad
              WHERE G.id_grupo = ${id_grupo[0].grupo_id};`);
      
          res.send(interfazPadrino.creadorDePaginaBuzon(propuestasPC,evidencias));
      }else{
        
        res.send(interfazColaborador.creadorDePaginaBuzon());
      }
  }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  } 
});

app.post("/buzon/Detalles/:id_PP", async (req, res) => {
  const id_PP = req.params.id_PP;
  try {
    const propuestaExistente = await conexionAsync(`SELECT *
        FROM PROPUESTA_P PP
        WHERE id_PP = ${id_PP};`);

    const actividadesPropuestas = await conexionAsync(`SELECT *
        FROM PROPUESTA_A
        WHERE id_PP = ${id_PP}`);

    res.send(interfazPadrino.creadorDePaginaVistaPropuestas(actividadesPropuestas, propuestaExistente));

  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/actualizarpropuesta/:id_PP", async (req, res) => {
  const id_PP = req.params.id_PP;
  const TituloPC = req.body.TituloPC;
  const ObjetivoPC = req.body.ObjetivoPC;
  const DescripcionPC = req.body.DescripcionPC;

  try {
    // Realiza la actualización en la base de datos
    await conexionAsync(`
          UPDATE PROPUESTA_P
          SET
            titulo = '${TituloPC}',
            objetivo = '${ObjetivoPC}',
            descripcion = '${DescripcionPC}'
            WHERE id_PP = ${id_PP};`);

    // Genera la página después de la actualización exitosa
    try {
      const propuestaExistente = await conexionAsync(`SELECT *
          FROM PROPUESTA_P PP
          WHERE id_PP = ${id_PP};`);
  
      const actividadesPropuestas = await conexionAsync(`SELECT *
          FROM PROPUESTA_A
          WHERE id_PP = ${id_PP}`);
  
      res.send(interfazPadrino.creadorDePaginaVistaPropuestas(actividadesPropuestas, propuestaExistente));
  
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error en la consulta a la base de datos");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/denegarPropuesta/:id_PP", async (req, res) => {
  let id_propuesta = req.params.id_PP

  try {
    // Realiza la actualización en la base de datos
    await conexionAsync(`
          UPDATE PROPUESTA_P
          SET
            estado = 'N'
            WHERE id_PP = ${id_propuesta};`);

    // Genera la página después de la actualización exitosa
    res.redirect("/buzon");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/aprobarPropuesta/:id_PP", async (req, res) => {
  let id_propuesta = req.params.id_PP

  try {
    // Realiza la actualización en la base de datos
    await conexionAsync(`
          UPDATE PROPUESTA_P
          SET
            estado = 'D'
            WHERE id_PP = ${id_propuesta};`);

    // Genera la página después de la actualización exitosa
    res.redirect("/buzon");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/eliminarActividadPropuesta/:id_PA", async (req, res) => {
  const id_PA = req.params.id_PA;

  try {
    // Realiza la actualización en la base de datos
    const actividadEliminada = await conexionAsync(`SELECT PA.id_PP
        FROM PROPUESTA_A PA
        WHERE id_PA = ${id_PA}`);
    await conexionAsync(`
        DELETE FROM PROPUESTA_A
        WHERE id_PA = ${id_PA};`);

    // Genera la página después de la actualización exitosa
    try {
      const propuestaExistente = await conexionAsync(`SELECT *
          FROM PROPUESTA_P PP
          WHERE id_PP = ${actividadEliminada[0].id_PP};`);
  
      const actividadesPropuestas = await conexionAsync(`SELECT *
          FROM PROPUESTA_A
          WHERE id_PP = ${actividadEliminada[0].id_PP}`);
  
      res.send(interfazPadrino.creadorDePaginaVistaPropuestas(actividadesPropuestas, propuestaExistente));
  
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error en la consulta a la base de datos");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/actualizarActividadPropuesta/:id_PA", async (req, res) => {
  const titulo = req.body.TituloActividad;
  const descripcion = req.body.DescripcionActividad;
  const unidades = req.body.UnidadesActividad;
  let tipo = req.body.TipoActividad;
  if (tipo == "Retorno A Vortex Bird") {
    tipo = 1;
  } else {
    tipo = 0;
  }
  const fecha_inicio = req.body.FechaInicio;
  const fecha_fin = req.body.FechaFinalizacion;
  const presupuesto = req.body.Presupuesto;
  const id_PA = req.params.id_PA;

  try {
    // Realiza la actualización en la base de datos
    const actividadActualizada = await conexionAsync(`SELECT PA.id_PP
    FROM PROPUESTA_A PA
    WHERE id_PA = ${id_PA}`);

    await conexionAsync(`
        UPDATE PROPUESTA_A
        SET
          titulo = '${titulo}',
          descripcion = '${descripcion}',
          unidades = '${unidades}',
          tipo = '${tipo}',
          presupuesto = '${presupuesto}',
          fecha_inicio = '${fecha_inicio}',
          fecha_fin = '${fecha_fin}'
          WHERE id_PA = ${id_PA};`);

    // Genera la página después de la actualización exitosa
    try {
      const propuestaExistente = await conexionAsync(`SELECT *
          FROM PROPUESTA_P PP
          WHERE id_PP = ${actividadActualizada[0].id_PP};`);
  
      const actividadesPropuestas = await conexionAsync(`SELECT *
          FROM PROPUESTA_A
          WHERE id_PP = ${actividadActualizada[0].id_PP}`);
  
      res.send(interfazPadrino.creadorDePaginaVistaPropuestas(actividadesPropuestas, propuestaExistente));
  
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error en la consulta a la base de datos");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/agregarActividadPropuesta/:id_PP", async (req, res) => {
  const titulo = req.body.TituloActividad;
  const descripcion = req.body.DescripcionActividad;
  const unidades = req.body.UnidadesActividad;
  let tipo = req.body.TipoActividad;
  if (tipo == "Retorno A Vortex Bird") {
    tipo = 1;
  } else {
    tipo = 0;
  }
  const fecha_inicio = req.body.FechaInicio;
  const fecha_fin = req.body.FechaFinalizacion;
  const presupuesto = req.body.Presupuesto;
  const id_PP = req.params.id_PP;

  try {
    // Realiza la actualización en la base de datos
    await conexionAsync(`
          INSERT INTO PROPUESTA_A(titulo,descripcion,unidades,estado,tipo,presupuesto,fecha_inicio,fecha_fin,id_PP) 
          values('${titulo}','${descripcion}',${unidades},False,${tipo},${presupuesto},'${fecha_inicio}','${fecha_fin}',${id_PP});`);

    // Genera la página después de la actualización exitosa
    try {
      const propuestaExistente = await conexionAsync(`SELECT *
          FROM PROPUESTA_P PP
          WHERE id_PP = ${id_PP};`);
  
      const actividadesPropuestas = await conexionAsync(`SELECT *
          FROM PROPUESTA_A
          WHERE id_PP = ${id_PP}`);
  
      res.send(interfazPadrino.creadorDePaginaVistaPropuestas(actividadesPropuestas, propuestaExistente));
  
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error en la consulta a la base de datos");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/denegarPropuestaDirectivo/:id_PP", async (req, res) => {
  let id_propuesta = req.params.id_PP

  try {
    // Realiza la actualización en la base de datos
    await conexionAsync(`
          UPDATE PROPUESTA_P
          SET
            estado = 'C'
            WHERE id_PP = ${id_propuesta};`);

    // Genera la página después de la actualización exitosa
    res.redirect("/buzon");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/aprobarPropuestaDirectivo/:id_PP", async (req, res) => {
  let id_propuesta = req.params.id_PP

  try {
    // Realiza la actualización en la base de datos
    let id_planCarrera = await conexionAsync(`
          SELECT PC.id_plancarrera
          FROM PLANCARRERA PC 
          INNER JOIN PROPUESTA_P PP ON PP.id_plancarrera = PC.id_plancarrera  
          WHERE id_PP = ${id_propuesta};`);

    let propuesta_p = await conexionAsync(`
          SELECT *
          FROM PROPUESTA_P PP   
          WHERE id_PP = ${id_propuesta};`);

    let propuesta_a = await conexionAsync(`
          SELECT *
          FROM PROPUESTA_A PA   
          WHERE id_PP = ${id_propuesta};`);
          
          await conexionAsync(`
          UPDATE PLANCARRERA PC 
          SET
            estado = 'C'
            WHERE id_PP = ${id_propuesta};`);
    
    // Genera la página después de la actualización exitosa
    res.redirect("/buzon");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
}); 

app.post("/buzon/Detalles/VistaDirectivo/:id_PP", async (req, res) => {
  const id_PP = req.params.id_PP;
  try {
    const propuestaExistente = await conexionAsync(`SELECT *
        FROM PROPUESTA_P PP
        WHERE id_PP = ${id_PP};`);

    const actividadesPropuestas = await conexionAsync(`SELECT *
        FROM PROPUESTA_A
        WHERE id_PP = ${id_PP}`);

    res.send(interfazDirectivo.creadorDePaginaVistaPropuestas(actividadesPropuestas, propuestaExistente));

  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});
//proximamente
// app.get("/descargarEvidencia/:idEvidencia", async(req,res)=>{

// });
// 
// /actualizarActividadPropuesta/:id_PA
// 

app.get("/propuesta", async (req, res) => {
  try {
    const propuestaExistente = await conexionAsync(`SELECT *
        FROM PROPUESTA_P PP
        WHERE PP.id_plancarrera = (
            SELECT PC.id_plancarrera
            FROM USUARIO U INNER JOIN PLANCARRERA PC 
            ON U.identificacion = PC.id_usuario
            WHERE identificacion = ${usuarioActivo}
        );`);

    if (propuestaExistente.length === 0) {
      res.send(interfazColaborador.sinPropuestas());
    } else {
      const actividadesPropuestas = await conexionAsync(`SELECT *
            FROM PROPUESTA_A
            WHERE id_PP = ${propuestaExistente[0].id_PP}`);
      res.send(interfazColaborador.propuestas(actividadesPropuestas, propuestaExistente));
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/propuesta-nueva", async (req, res) => {
  let id_planCarrera = await conexionAsync(`SELECT id_plancarrera
    FROM PLANCARRERA PC
    WHERE id_usuario = ${usuarioActivo};`);

  id_planCarrera = id_planCarrera[0].id_plancarrera;
  const TituloPC = req.body.TituloPC;
  const ObjetivoPC = req.body.ObjetivoPC;
  const DescripcionPC = req.body.DescripcionPC;

  try {
    // Realiza la actualización en la base de datos
    await conexionAsync(`
          INSERT INTO PROPUESTA_P(titulo,objetivo,descripcion,estado,id_plancarrera) 
          values('${TituloPC}','${ObjetivoPC}','${DescripcionPC}','N',${id_planCarrera});`);

    // Genera la página después de la actualización exitosa
    res.redirect("/propuesta");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/actualizacion", async (req, res) => {
  let id_planCarrera = await conexionAsync(`SELECT id_plancarrera
    FROM PLANCARRERA PC
    WHERE id_usuario = ${usuarioActivo};`);

  id_planCarrera = id_planCarrera[0].id_plancarrera;
  const TituloPC = req.body.TituloPC;
  const ObjetivoPC = req.body.ObjetivoPC;
  const DescripcionPC = req.body.DescripcionPC;

  try {
    // Realiza la actualización en la base de datos
    await conexionAsync(`
          UPDATE PROPUESTA_P
          SET
            titulo = '${TituloPC}',
            objetivo = '${ObjetivoPC}',
            descripcion = '${DescripcionPC}'
            WHERE id_plancarrera = ${id_planCarrera};`);

    // Genera la página después de la actualización exitosa
    res.redirect("/propuesta");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/enviarPropuesta", async (req, res) => {
  let id_planCarrera = await conexionAsync(`SELECT id_plancarrera
    FROM PLANCARRERA PC
    WHERE id_usuario = ${usuarioActivo};`);

  id_planCarrera = id_planCarrera[0].id_plancarrera;

  try {
    // Realiza la actualización en la base de datos
    await conexionAsync(`
          UPDATE PROPUESTA_P
          SET
            estado = 'C'
            WHERE id_plancarrera = ${id_planCarrera};`);

    // Genera la página después de la actualización exitosa
    res.redirect("/propuesta");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/cancelarPropuesta", async (req, res) => {
  let id_planCarrera = await conexionAsync(`SELECT id_plancarrera
    FROM PLANCARRERA PC
    WHERE id_usuario = ${usuarioActivo};`);

  id_planCarrera = id_planCarrera[0].id_plancarrera;

  try {
    // Realiza la actualización en la base de datos
    await conexionAsync(`
          UPDATE PROPUESTA_P
          SET
            estado = 'N'
            WHERE id_plancarrera = ${id_planCarrera};`);

    // Genera la página después de la actualización exitosa
    res.redirect("/propuesta");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/eliminarActividad/:id_PA", async (req, res) => {
  const id_PA = req.params.id_PA;

  try {
    // Realiza la actualización en la base de datos
    await conexionAsync(`
        DELETE FROM PROPUESTA_A
        WHERE id_PA = ${id_PA};`);

    // Genera la página después de la actualización exitosa
    res.redirect("/propuesta");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/actualizarActividad/:id_PA", async (req, res) => {
  const titulo = req.body.TituloActividad;
  const descripcion = req.body.DescripcionActividad;
  const unidades = req.body.UnidadesActividad;
  let tipo = req.body.TipoActividad;
  if (tipo == "Retorno A Vortex Bird") {
    tipo = 1;
  } else {
    tipo = 0;
  }
  const fecha_inicio = req.body.FechaInicio;
  const fecha_fin = req.body.FechaFinalizacion;
  const presupuesto = req.body.Presupuesto;
  const id_PA = req.params.id_PA;

  try {
    // Realiza la actualización en la base de datos
    await conexionAsync(`
        UPDATE PROPUESTA_A
        SET
          titulo = '${titulo}',
          descripcion = '${descripcion}',
          unidades = '${unidades}',
          tipo = '${tipo}',
          presupuesto = '${presupuesto}',
          fecha_inicio = '${fecha_inicio}',
          fecha_fin = '${fecha_fin}'
          WHERE id_PA = ${id_PA};`);

    // Genera la página después de la actualización exitosa
    res.redirect("/propuesta");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.post("/agregarActividad/:id_PP", async (req, res) => {
  const titulo = req.body.TituloActividad;
  const descripcion = req.body.DescripcionActividad;
  const unidades = req.body.UnidadesActividad;
  let tipo = req.body.TipoActividad;
  if (tipo == "Retorno A Vortex Bird") {
    tipo = 1;
  } else {
    tipo = 0;
  }
  const fecha_inicio = req.body.FechaInicio;
  const fecha_fin = req.body.FechaFinalizacion;
  const presupuesto = req.body.Presupuesto;
  const id_PP = req.params.id_PP;

  try {
    // Realiza la actualización en la base de datos
    await conexionAsync(`
          INSERT INTO PROPUESTA_A(titulo,descripcion,unidades,estado,tipo,presupuesto,fecha_inicio,fecha_fin,id_PP) 
          values('${titulo}','${descripcion}',${unidades},False,${tipo},${presupuesto},'${fecha_inicio}','${fecha_fin}',${id_PP});`);

    // Genera la página después de la actualización exitosa
    res.redirect("/propuesta");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});





app.get("/mi-plan-carrera", async (req, res) => {
  try {
    const usuarioPlanCarrera = await conexionAsync(
      `SELECT U.nombre AS NombreUsuario, ((
            SELECT COALESCE(SUM(A.unidades), 0)
            FROM ACTIVIDAD A JOIN PLANCARRERA PC ON A.id_plancarrera = PC.id_plancarrera
            WHERE PC.id_usuario = U.identificacion AND A.estado = true
            ) / 72 * 100 ) AS PorcentajeCompletitud FROM USUARIO U WHERE U.identificacion = ` +
        usuarioActivo +
        ` ;`
    );
    const planCarrera = await conexionAsync(
      `SELECT
            PC.titulo AS TituloPlanCarrera,
            PC.objetivo AS ObjetivoPlanCarrera,
            PC.descripcion AS DescripcionPlanCarrera
            FROM PLANCARRERA PC
            WHERE PC.id_usuario = ` +
        usuarioActivo +
        ` ;`
    );
    const actividades = await conexionAsync(
      `SELECT
            A.id_actividad AS IdActividad,
            A.titulo AS TituloActividad,
            A.tipo AS TipoActividad,
            A.unidades AS UnidadesActividad,
            A.descripcion AS DescripcionActividad,
            A.fecha_inicio AS FechaInicioActividad,
            A.fecha_fin AS FechaFinActividad,
            A.estado AS EstadoActividad
            FROM ACTIVIDAD A
            INNER JOIN PLANCARRERA PC ON A.id_plancarrera = PC.id_plancarrera
            WHERE PC.id_usuario = ` +
        usuarioActivo +
        `;`
    );

    res.send(
      interfazColaborador.miPlanCarrera(usuarioPlanCarrera, planCarrera, actividades)
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en la consulta a la base de datos");
  }
});

app.get("/ajustes", async (req, res) => {

  competitivo = await conexionAsync(
    `SELECT competitivo FROM USUARIO WHERE identificacion = ${usuarioActivo}`
  )
  console.log("Metodo get",competitivo)
  res.send(interfazColaborador.creadorDePaginasAjustes(competitivo));
});

// Ruta POST para manejar la actualización de los ajustes
app.post("/cambiar/ajustes", upload.single("imagen"), async (req, res) => {
  // Debes obtener el usuario activo aquí
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const descripcion = req.body.descripcion;
  const cargo = req.body.cargo;
  const file = req.file;
  const checkbox = req.body.clasificacion;
  const placeholders = [];
  const values = [];
  console.log(checkbox)
  if (nombre) {
    placeholders.push("nombre = ?");
    values.push(nombre);
  }
  if (checkbox){
    placeholders.push("competitivo = ?")
    values.push(checkbox)
    
  }
  if (!checkbox){
    placeholders.push("competitivo = ?")
    values.push(0)
    
  }

  if (apellido) {
    placeholders.push("apellido = ?");
    values.push(apellido);
  }

  if (descripcion) {
    placeholders.push("descripcion = ?");
    values.push(descripcion);
  }

  if (cargo) {
    placeholders.push("cargo = ?");
    values.push(cargo);
  }

  if (file) {
    fs.readFile(file.path, (err, data) => {
      if (err) {
        return res.status(500).send("Error al leer el archivo.");
      }

      const blob = data;

      placeholders.push("foto = ?");
      values.push(blob);

      const setClause = placeholders.join(", ");

      const sql = `UPDATE USUARIO
            SET ${setClause}
            WHERE identificacion = ?`;

      values.push(usuarioActivo);

      db.query(sql, values, (err, result) => {
        if (err) {
          return res.status(500).send("Error al insertar en la base de datos.");
        }

        fs.unlinkSync(file.path);

        console.log("Perfil actualizado en la base de datos");
        // Genera la página de ajustes después de la actualización exitosa
        res.redirect("/ajustes");
      });
    });
  } else {
    if (placeholders.length === 0) {
      return res
        .status(400)
        .send("No se proporcionaron campos para actualizar.");
    }

    const setClause = placeholders.join(", ");

    const sql = `UPDATE USUARIO
        SET ${setClause}
        WHERE identificacion = ?`;

    values.push(usuarioActivo);

    db.query(sql, values, (err, result) => {
      if (err) {
        return res.status(500).send("Error al insertar en la base de datos.");
      }

      console.log("Perfil actualizado en la base de datos");

      // Genera la página de ajustes después de la actualización exitosa
      res.redirect("/ajustes");
    });
  }
});

app.post("/generar_reporte", (req, res) => {
  const miGrupo = req.body; // Esto contendrá el grupo enviado desde el cliente

  // Tu código para generar el PDF aquí
  const doc = new PDFDocument();
  const outputStream = fs.createWriteStream("informe.pdf");

  // Agregar contenido al PDF
  doc
    .fontSize(20)
    .text("Información de Planes de Carrera por Grupo", { align: "center" })
    .moveDown();

  miGrupo.forEach((row) => {
    doc
      .fontSize(12)
      .text(`Nombre: ${row.nombre} ${row.apellido}`)
      .text(`Título del Plan de Carrera: ${row.titulo}`)
      .text(`Objetivo: ${row.objetivo}`)
      .text(`Descripción: ${row.descripcion}`)
      .moveDown();
  });

  doc.pipe(outputStream);
  doc.end();

  // Enviar el PDF como respuesta
  res.download("informe.pdf", "reporte.pdf");
});

// generador de paginas logros

app.get("/mislogros", async (req, res) => {
  const planCarrera = await conexionAsync(
    `SELECT
    PC.id_plancarrera AS id_planCarrera,
    PC.titulo AS TituloPlanCarrera,
    PC.objetivo AS ObjetivoPlanCarrera,
    PC.descripcion AS DescripcionPlanCarrera
    FROM PLANCARRERA PC
    WHERE PC.id_usuario = ` +
      usuarioActivo +
      ` ;`
  );
  let logros = await conexionAsync(
    `SELECT * FROM medalla WHERE id_plancarrera = '${planCarrera[0].id_planCarrera}';`
  );
  res.send(interfazColaborador.creadorDePaginasLogros(logros));
});

app.get("/logro/:nombre", async (req, res) => {
  const nombre = req.params.nombre;
  const planCarrera = await conexionAsync(
    `SELECT
    PC.id_plancarrera AS id_planCarrera,
    PC.titulo AS TituloPlanCarrera,
    PC.objetivo AS ObjetivoPlanCarrera,
    PC.descripcion AS DescripcionPlanCarrera
    FROM PLANCARRERA PC
    WHERE PC.id_usuario = ` +
      usuarioActivo +
      ` ;`
  );
  const logros = await conexionAsync(
    `SELECT * FROM medalla WHERE id_plancarrera = '${planCarrera[0].id_planCarrera}';`
  );



  res.send(interfazColaborador.creadorDePaginasMedallas(logros, nombre));
});

app.get("/agregarAlPefil/:idMedalla", async (req, res) => {
  const idMedalla = req.params.idMedalla;
  const medallas = await conexionAsync(`select medalla_1,medalla_2,medalla_3 from usuario where identificacion = ${usuarioActivo}`);
  
  await conexionAsync(`update Usuario set medalla_1 = ${idMedalla} , medalla_2 = ${medallas[0].medalla_1},medalla_3=${medallas[0].medalla_2} where identificacion = ${usuarioActivo}`);

  res.send("alo")
});


app.get("/logros-eliminar", (req, res) => {
  res.send(interfazColaborador.creadorDePaginasLogrosEliminar());
});

app.get("/logros-actuales", (req, res) => {
  res.send(interfazColaborador.creadorDePaginasLogrosActuales());
});

app.get("/logros-actuales-eliminar", (req, res) => {
  res.send(interfazColaborador.creadorDePaginasLogrosActualesEliminar());
});

app.get('/logros-custom', async (req, res) => {

  const medallas = await conexionAsync(`SELECT M.id_medalla,M.nombre,M.descripcion,M.tipo,M.id_plancarrera,U.medalla_1,U.medalla_2,U.medalla_3
  FROM USUARIO U
  JOIN PLANCARRERA PC ON U.identificacion = PC.id_usuario
  JOIN MEDALLA M ON PC.id_plancarrera = M.id_plancarrera
  WHERE U.identificacion =${usuarioActivo} AND M.tipo = 'C'`);
  res.send(interfazColaborador.creadorDePaginasLogrosCustom(medallas));

});

app.post('/CrearMedalla', upload.single('file'), async (req, res) => {
  const nombre = req.body.nombre;
  const descripcion = req.body.descripcion;
  const file = req.file;
  console.log(file)
  const planCarrera = await conexionAsync(
    `SELECT
    PC.id_plancarrera AS id_planCarrera,
    PC.titulo AS TituloPlanCarrera,
    PC.objetivo AS ObjetivoPlanCarrera,
    PC.descripcion AS DescripcionPlanCarrera
    FROM PLANCARRERA PC
    WHERE PC.id_usuario = ` +
      usuarioActivo +
      ` ;`
  );
  if (!file) {
    return res.status(400).send("No se ha proporcionado ningún archivo.");
  }
  // fs.readFile(file.path, (err, data) => {
  //   if (err) {
  //     return res.status(500).send("Error al leer el archivo.");
  //   }
  // });
  const nombreArchivo = file.originalname;

    fs.readFile(file.path, (err, data) => {
      if (err) {
        return res.status(500).send("Error al leer el archivo.");
      }

      const blob = data;
        const sql =
          "insert into medalla (nombre,foto,descripcion,tipo,puntos,id_plancarrera) values (?,?,?,'C',0,?)";
        db.query(sql, [nombre, blob, descripcion, planCarrera[0].id_planCarrera], (err, result) => {
          if (err) {
            return res
              .status(500)
              .send("Error al insertar en la base de datos."+err);
          }

          fs.unlinkSync(file.path);

          console.log("Evidencia subida y registrada en la base de datos");
          // res.send(interfazColaborador.creadorDePaginasMiGrupo(miGrupo));
        });
      res.redirect('/logros-custom');
    // await conexionAsync(`insert into medalla (nombre,foto,descripcion,tipo,puntos,id_plancarrera) values ('${nombre}',${blob},'${descripcion}','C',0,'${planCarrera[0].id_planCarrera}')`)
  });
 

});

app.get('/SeleccionLogro/:idMedalla', async (req, res) => {
  const idMedalla = req.params.idMedalla;
  console.log("Soy el parametro id de la medalla ",idMedalla);
  const medalla = await conexionAsync(`SELECT M.id_medalla,M.nombre,M.descripcion,M.tipo,M.id_plancarrera
  FROM USUARIO U
  JOIN PLANCARRERA PC ON U.identificacion = PC.id_usuario
  JOIN MEDALLA M ON PC.id_plancarrera = M.id_plancarrera
  WHERE M.id_medalla =${idMedalla}  AND M.tipo = 'C'`);
 
  const medallas = await conexionAsync(`SELECT M.id_medalla,M.nombre,M.descripcion,M.tipo,M.id_plancarrera
  FROM USUARIO U
  JOIN PLANCARRERA PC ON U.identificacion = PC .id_usuario
  JOIN MEDALLA M ON PC.id_plancarrera = M.id_plancarrera
  WHERE U.identificacion =${usuarioActivo} AND M.tipo = 'C'`);
  res.send(interfazColaborador.creadorDePaginasSelectorLogrosCustom(medallas,medalla));


});


app.get('/fotoMedalla/:idMedalla', async (req, res) => {
  const idMedalla = req.params.idMedalla
  const result = await conexionAsync(`SELECT foto FROM Medalla where id_medalla = ${idMedalla}`);
  if (result.length > 0) {
      // Asegúrate de que se encontró un resultado en la consulta.
      const imageBuffer = result[0].foto;
      res.set('Content-Type', 'image/jpeg'); // Cambia 'image/jpeg' según el tipo de imagen que estás almacenando.
      res.send(imageBuffer);
  } else {
      res.status(404).send('No se encontró la imagen.');
  }
});

app.get("/logros-custom-eliminar", (req, res) => {
  res.send(interfazColaborador.creadorDePaginasLogrosCustomEliminar());
});


app.get("/lecho", (req, res) => {
  res.send("Todo es culpa de Simon Colonia Mamador");
});


app.listen(3000, () => {
  console.log("El servidor está escuchando en http://localhost:3000");
});

// Se acabo

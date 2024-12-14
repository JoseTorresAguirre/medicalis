const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 8080;

// Configuración para multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Middleware para react
app.use(cors());

// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Crear un pool de conexiones MySQL2
const db = mysql.createConnection({
  host: "localhost", // Servidor de la base de datos
  user: "root", // Usuario (en tu caso, 'root')
  password: "root", // Contraseña (vacía si no tienes contraseña)
  database: "clinica", // Nombre de tu base de datos
});

// Intentar conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos:", err.message);
    process.exit(1); // Finaliza la aplicación si falla la conexión
  } else {
    console.log("Conexión exitosa a la base de datos.");
  }
});

// Ruta para obtener todos los doctores
app.get("/api/doctores", (req, res) => {
  const query = "SELECT * FROM doctores";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener los doctores:", err);
      return res.status(500).json({ message: "Error al obtener los doctores" });
    }
    res.json(results);
  });
});

// Ruta para crear un nuevo doctor
app.post("/api/crear-doctor", upload.single("imagen"), (req, res) => {
  const { nombres, paterno, materno, edad, genero, createID, email, celular } =
    req.body;
  const imagen = req.file ? req.file.filename : null;

  if (
    !nombres ||
    !paterno ||
    !materno ||
    !edad ||
    !genero ||
    !createID ||
    !email ||
    !celular
  ) {
    return res.status(400).json({ message: "Faltan datos en la solicitud" });
  }

  const query = `
        INSERT INTO doctores (
            nombres, paterno, materno, edad, genero, createID, email, celular, imagen
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  db.query(
    query,
    [nombres, paterno, materno, edad, genero, createID, email, celular, imagen],
    (err, results) => {
      if (err) {
        console.error("Error al crear el doctor:", err);
        return res
          .status(500)
          .json({ message: "Error al crear el doctor", error: err });
      }
      res.status(201).json({
        message: "Doctor creado con éxito",
        id_doctor: results.insertId,
      });
    }
  );
});

// Ruta para actualizar un doctor
app.put("/api/actualizar-doctor/:id", (req, res) => {
  const { id } = req.params;
  const { nombres, paterno, materno, edad, genero, email, celular } = req.body;

  const query = `
      UPDATE doctores 
      SET nombres = ?, paterno = ?, materno = ?, edad = ?, genero = ?, email = ?, celular = ? 
      WHERE id = ?
    `;

  db.query(
    query,
    [nombres, paterno, materno, edad, genero, email, celular, id],
    (err, results) => {
      if (err) {
        console.error("Error al actualizar el doctor:", err);
        return res
          .status(500)
          .json({ message: "Error al actualizar el doctor", error: err });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Doctor no encontrado" });
      }
      res.json({ message: "Doctor actualizado con éxito" });
    }
  );
});

// Ruta para eliminar un doctor
app.delete("/api/eliminar-doctor/:id", (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM doctores WHERE id = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error al eliminar el doctor:", err);
      return res
        .status(500)
        .json({ message: "Error al eliminar el doctor", error: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Doctor no encontrado" });
    }
    res.json({ message: "Doctor eliminado con éxito" });
  });
});

// Iniciar servidor en el puerto 8080
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});

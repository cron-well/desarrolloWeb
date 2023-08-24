const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware para parsear JSON en las solicitudes
app.use(bodyParser.json());

// Simulación de una base de datos temporal
const ciudadanos = {};

// API para crear nuevos ciudadanos
app.post('/api/registro/ciudadanos', (req, res) => {
  const { nombres, apellidos, DPI, fechaNacimiento, estadoCivil } = req.body;

  // Validaciones (aquí puedes agregar más validaciones según tus requisitos)
  if (!nombres || !apellidos || !DPI || !fechaNacimiento || !estadoCivil) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  // Guardar el ciudadano en la base de datos (aquí puedes usar una base de datos real)
  ciudadanos[DPI] = {
    nombres,
    apellidos,
    fechaNacimiento,
    estadoCivil,
  };

  return res.status(201).json({ message: 'Ciudadano registrado exitosamente' });
});

// API para actualizar los datos de un ciudadano
app.put('/api/registro/ciudadanos/:dpi', (req, res) => {
  const DPI = req.params.dpi;
  const { nombres, apellidos, fechaNacimiento, estadoCivil } = req.body;

  // Validaciones
  if (!ciudadanos[DPI]) {
    return res.status(404).json({ error: 'Ciudadano no encontrado' });
  }

  // Actualizar los datos
  ciudadanos[DPI] = {
    ...ciudadanos[DPI],
    nombres,
    apellidos,
    fechaNacimiento,
    estadoCivil,
  };

  return res.json({ message: 'Datos de ciudadano actualizados exitosamente' });
});

// API para eliminar un ciudadano por defunción
app.delete('/api/registro/ciudadanos/:dpi', (req, res) => {
  const DPI = req.params.dpi;

  // Validaciones
  if (!ciudadanos[DPI]) {
    return res.status(404).json({ error: 'Ciudadano no encontrado' });
  }

  // Eliminar al ciudadano
  delete ciudadanos[DPI];

  return res.json({ message: 'Ciudadano eliminado exitosamente' });
});

// API para obtener información de un ciudadano
app.get('/api/registro/ciudadanos/:dpi', (req, res) => {
  const DPI = req.params.dpi;

  // Validaciones
  if (!ciudadanos[DPI]) {
    return res.status(404).json({ error: 'Ciudadano no encontrado' });
  }

  return res.json(ciudadanos[DPI]);
});

// API para obtener el listado de ciudadanos
app.get('/api/registro/ciudadanos', (req, res) => {
  return res.json(ciudadanos);
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

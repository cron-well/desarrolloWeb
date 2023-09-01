const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://agodoylh:guate123@dbtarea6.iasmcyy.mongodb.net/cargadatosht6', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a la base de datos'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
});

app.use(express.json());

// Definir el esquema y modelo del tópico
const TopicoSchema = new mongoose.Schema({
  contryCode: String,
  region: String,
  incomeGroup: String,
  tableName: String,
});

const Topico = mongoose.model('cargadatosht6', TopicoSchema);

// Rutas CRUD para el tópico
app.post('/api/topicos', async (req, res) => {
  const { contryCode, region, incomeGroup, tableName } = req.body;
  try {
    const nuevoTopico = new Topico({ contryCode, region, incomeGroup, tableName });
    await nuevoTopico.save();
    res.status(201).json(nuevoTopico);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el tópico' });
  }
});

app.get('/api/topicos', async (req, res) => {
  try {
    const topicos = await Topico.find();
    res.json(topicos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los tópicos' });
  }
});

app.get('/api/topicos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const topico = await Topico.findById(id);
    if (!topico) {
      return res.status(404).json({ error: 'Tópico no encontrado' });
    }
    res.json(topico);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el tópico' });
  }
});

app.put('/api/topicos/:id', async (req, res) => {
  const id = req.params.id;
  const { titulo, contenido } = req.body;
  try {
    const topico = await Topico.findByIdAndUpdate(id, { titulo, contenido }, { new: true });
    if (!topico) {
      return res.status(404).json({ error: 'Tópico no encontrado' });
    }
    res.json(topico);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el tópico' });
  }
});

app.delete('/api/topicos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const topico = await Topico.findByIdAndDelete(id);
    if (!topico) {
      return res.status(404).json({ error: 'Tópico no encontrado' });
    }
    res.json({ message: 'Tópico eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el tópico' });
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
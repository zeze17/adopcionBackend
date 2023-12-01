const express = require('express');
const Mascota = require('../models/Mascota');
const MascotasRouter = express.Router();

MascotasRouter.get('/',(req, res) => {
    Mascota.find().then(datos => res.json({mascotas: datos}))
    .catch(error => res.json({mensaje: error}));
});

//consultar por Raza
MascotasRouter.get('/raza/:raza',(req, res) => {
  Mascota.find({ 'raza': req.params.raza }).then(datos => res.json({mascotas: datos}))
  .catch(error => res.json({mensaje: error}));
});

//buscar mascotas disponibles por disponibilidadMascota y tipoMascota
MascotasRouter.get("/buscar", (req, res) => {
    const { tipoMascota, disponibilidadMascota } = req.query;
    
    const consulta = {};
    if (tipoMascota) {
      consulta.tipoMascota = tipoMascota;
    }
    if (disponibilidadMascota !== undefined) {
      consulta.disponibilidadMascota = disponibilidadMascota === 'true'; 
    }
  
    Mascota.find(consulta)
      .then(resultados => res.json(resultados))
      .catch(error => res.json({ mensaje: error }));
  });

MascotasRouter.post('/', (req,res) => {
    const mascota = new Mascota(req.body);
    
    mascota.save().then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});

//consultar por fecha de nacimiento
MascotasRouter.post('/fecha', (req,res) => {
  const {fechaNacimientoMascota} =  req.body;
  
  Mascota.find({ 'fechaNacimientoMascota': fechaNacimientoMascota }).then(datos => res.json(datos))
      .catch(error => res.json({mensaje: error}));
});

MascotasRouter.patch('/', (req, res) => {
    const mascota = new Mascota(req.body);
    Mascota.updateOne({ _id: mascota._id }, mascota)
      .then(datos => res.json(datos))
      .catch(error => res.json({ mensaje: error }));
  });
  
  MascotasRouter.delete("/:id", (req, res) => {
    Mascota.deleteOne({ _id: req.params.id })
      .then(datos => res.json(datos))
      .catch(error => res.json({ mensaje: error }));
  });

  module.exports = MascotasRouter;
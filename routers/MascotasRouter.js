const express = require('express');
const Mascotas = require('../models/Mascotas');
const MascotasRouter = express.Router();

MascotasRouter.get('/',(req, res) => {
    Mascotas.find().then(datos => res.json({mascotas: datos}))
    .catch(error => res.json({mensaje: error}));
});

//buscar mascotas disponibles por disponibilidadMascota y tipoMascota
MascotasRouter.get("/buscar", (req, res) => {
    const { tipoMascota, disponibilidadMascota } = req.query;

    console.log(tipoMascota);
    console.log(disponibilidadMascota);

  
    const consulta = {};
    if (tipoMascota) {
      consulta.tipoMascota = tipoMascota;
    }
    if (disponibilidadMascota !== undefined) {
      consulta.disponibilidadMascota = disponibilidadMascota === 'true'; 
    }

    console.log(consulta);

  
    Mascotas.find(consulta)
      .then(resultados => res.json(resultados))
      .catch(error => res.json({ mensaje: error }));
  });

MascotasRouter.post('/', (req,res) => {
    const mascotas = Mascotas(req.body);
    
    mascotas.save().then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});

MascotasRouter.patch('/', (req, res) => {
    const mascotas = new Mascotas(req.body);
    Mascotas.updateOne({ _id: mascotas.id }, mascotas)
      .then(datos => res.json(datos))
      .catch(error => res.json({ mensaje: error }));
  });
  
  MascotasRouter.delete("/:id", (req, res) => {
    Mascotas.deleteOne({ _id: req.params.id })
      .then(datos => res.json(datos))
      .catch(error => res.json({ mensaje: error }));
  });

  module.exports = MascotasRouter;
const express = require("express");
const Adopcion = require("../models/Adopcion");
const AdopcionRouter = express.Router();

AdopcionRouter.get('/', (req, res) => {
    Adopcion.find().then(datos => res.json({ adopcion: datos }))
      .catch(error => res.json({ mensaje: error }));
  });

  //buscar por Id de adoptante
AdopcionRouter.get('/buscaradoptante/:idAdoptante', (req, res) => {
  
    Adopcion.find({ 'usuario._id': req.params.idAdoptante }).then(datos => res.json({ adopcion: datos }))
      .catch(error => res.json({ mensaje: error }));
  });

  //buscar por Cedula de adoptante
  AdopcionRouter.get('/buscaradoptante', (req, res) => {
       const {cedula} = req.query
    Adopcion.find({ 'usuario.cedula': cedula }).then(datos => res.json({ adopcion: datos }))
      .catch(error => res.json({ mensaje: error }));
  });

AdopcionRouter.post("/", (req, res) => {
    const adopcion = new Adopcion(req.body);

    adopcion.save().then((datos) => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});

AdopcionRouter.patch("/", (req, res) => {
    const adopcion = new Adopcion(req.body);
    Adopcion.updateOne({ _id: adopcion.id }, adopcion)
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});

AdopcionRouter.delete("/:id", (req, res) => {
    Adopcion.deleteOne({ _id: req.params.id })
        .then(datos => res.json(datos))
        .catch(error => res.json({ mensaje: error }));
});

module.exports = AdopcionRouter;
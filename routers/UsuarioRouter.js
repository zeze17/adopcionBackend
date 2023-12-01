const express = require('express');
const Usuario = require('../models/Usuario');
const UsuarioRouter = express.Router();

UsuarioRouter.get('/', (req, res) => {
  Usuario.find().then(datos => res.json({ usuarios: datos }))
    .catch(error => res.json({ mensaje: error }));
});

//Consultar usuario por cedula
UsuarioRouter.get('/adoptante/:cedula', (req, res) => {
  Usuario.findOne({ cedula: req.params.cedula }).then(datos => res.json({ usuario: datos }))
    .catch(error => res.json({ mensaje: error }));
});

UsuarioRouter.post('/', (req, res) => {
  const usuario = new Usuario(req.body);

  usuario.save().then(datos => res.json(datos))
    .catch(error => res.json({ mensaje: error }));
});

UsuarioRouter.patch('/', (req, res) => {
  const usuario = new Usuario(req.body);
  Usuario.updateOne({ _id: usuario.id }, usuario)
    .then(datos => res.json(datos))
    .catch(error => res.json({ mensaje: error }));
});

UsuarioRouter.delete("/:id", (req, res) => {
  Usuario.deleteOne({ _id: req.params.id })
    .then(datos => res.json(datos))
    .catch(error => res.json({ mensaje: error }));
});

module.exports = UsuarioRouter;
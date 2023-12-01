const express = require('express');
const Vacuna = require('../models/Vacuna');
const VacunaRouter = express.Router();

VacunaRouter.get('/', (req, res) => {
    Vacuna.find().then(datos => res.json({vacuna: datos}))
    .catch(error => res.json({mensaje: error}));
});

VacunaRouter.post('/', (req, res) => {
    const vacuna= new Vacuna(req.body);

    vacuna.save().then(datos => res.json({datos}))
    .catch(error => res.json({mensaje: error}));
});

VacunaRouter.patch('/', (req, res) => {
    const vacuna = new Vacuna(req.body);
    Vacuna.updateOne({_id: vacuna.id}, vacuna)
    .then(datos => res.json(datos))
    .catch(error => res.json({mensaje: error}));
});

VacunaRouter.delete('/:id', (req, res) => {
    Vacuna.deleteOne({_id: req.params.id})
    .then(datos => res.json(datos))
    .catch(error => res.json({mensaje: error}));
});

module.exports = VacunaRouter;
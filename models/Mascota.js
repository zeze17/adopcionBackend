const mongoose = require('../db/Connection');

const MascotasSchema = new mongoose.Schema({
    raza: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: false
    },
    foto: {
        type: String,
        require: true
    },
    estadoSalud: {
        type: String,
        require: false
    },
    tipoMascota: {
        type: String,
        require: true
    },
    fechaNacimientoMascota: {
        type: String,
        require: false
    },
    fechaIngresoMascota: {
        type: String,
        require: false
    },
    disponibilidadMascota: {
        type: Boolean,
        require: true
    },
    nombreMascota: {
        type: String,
        require: false
    },
    vacunas : [
        {
            _id:{
                type: String,
                required: false,
              }, 
              nombreVacuna:{
                type: String,
                required: false,
              }, 
              tipo:{
                type: String,
                required: false,
              },   
        }
    ]
}, 
{
    collection: 'Mascotas',
    versionKey: false
});

const Mascotas = mongoose.model('Mascotas', MascotasSchema);

module.exports = Mascotas;
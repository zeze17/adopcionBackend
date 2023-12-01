const mongoose = require('../db/Connection');

const AdopcionSchema = new mongoose.Schema({
        razonAdopcion: {
            type: String,
            require: true,
        },
        ingresoRango: {
            type: String,
            require: true
        },
        fechaAdopcion: {
            type: String,
            require: true
        },
        respuesta: {
            type: String,
            require: true
        },
        fechaRespuesta: {
            type: String,
            require: true
        },
        observaciones: {
            type: String,
            require: true
        },
        estado: {
            type: Boolean,
            require: true
        },
        poseeMascota: {
            type: Boolean,
            require: true
        },
        motivoMascota: {
            type: String,
            require: true
        },
        procAdopPost: {
            type: Boolean,
            require: true
        },
        usuario: {
            _id:{
                type: String,
                required: false,
              }, 
              nombreUsuario:{
                type: String,
                required: false,
              }, 
              correo:{
                type: String,
                required: false,
              },   
              cedula: {
                type: String,
                required: true,
              },
              direccion: {
                type: String,
                required: true,
              },
              numeroCelular: {
                type: String,
                required: true,
              }
        },
        mascota:{
            _id:{
              type: String,
              required: false,
            }, 
            nombreMascota:{
              type: String,
              required: false,
            }, 
            raza:{
              type: String,
              required: false,
            }
          }
      },
        {
          collection: 'Adopcion',
          versionKey: false
        });
      

const Adopcion = mongoose.model('Adopcion', AdopcionSchema);

module.exports = Adopcion;

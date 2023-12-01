const mongoose = require('../db/Connection');

const UsuarioSchema = new mongoose.Schema({
  correo: {
    type: String,
    required: true,
    unique: true
  },
  nombreUsuario: {
    type: String,
    required: true,
  },
  cedula: {
    type: String,
    required: true,
    unique: true
  },
  direccion: {
    type: String,
    required: true,
  },
  numeroCelular: {
    type: String,
    required: true,
  },
  numeroTelefono: {
    type: String,
    required: false,
  },
  fechaNacimiento: {
    type: String,
    required: true,
  },
  fechaCreacion: {
    type: String,
    required: true,
  },
  tipoUsuario: {
    type: String,
    required: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  mascotas:[{
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
  }] 
},
  {
    collection: 'Usuario',
    versionKey: false
  });

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;




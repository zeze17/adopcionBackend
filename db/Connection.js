const mongoose = require('mongoose');

let conexion = "mongodb+srv://adoptautsapp:-UTS1234-@cluster0.q8s9wcf.mongodb.net/adoptapet?retryWrites=true&w=majority";

mongoose.connect(conexion)
.then(event => console.log("conectado a mongo"))
.catch(error => console.log(error)); 

module.exports = mongoose;     
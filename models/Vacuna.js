const mongoose = require('../db/Connection');

const VacunaSchema = new mongoose.Schema({
    nombreVacuna: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true,
        unique: true
    }
},
{
    collection: 'Vacuna',
    versionKey: false
});

const Vacuna = mongoose.model('Vacuna', VacunaSchema);

module.exports = Vacuna;
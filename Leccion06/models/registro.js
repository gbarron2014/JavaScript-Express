var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegistroSchema = new Schema({
    Qr: { type: Number },
    Roles: { type: String, require: true },
    Genero: { type: String, require: true },
    Turno: { type: String, require: true },
    Carrera_Tecnica: { type: String, default: 'Programación' },
    Fecha_Registro: { type: Date, default: Date.now },
    Servicio: { type: String, default: 'Equipo Computo' }
});


module.exports = mongoose.model('registros', RegistroSchema);
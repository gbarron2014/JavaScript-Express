const Registro = require('../models/registro');

/*
 * Método que obtiene todos los registros de lectura de Scanner
 */
exports.estadisticas = function(req, res, next) {
    Registro.find({}).exec((err, results) => {
        if (err) {
            console.log("Error: ", err);
            return;
        }
        return res.render("estadisticas", { //Envia registros a la vista
            registros: results,
        });
    });
};
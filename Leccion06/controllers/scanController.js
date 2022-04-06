const { deflateStrategy } = require('jimp');
const User = require('../models/usuario');
const Registro = require('../models/registro');
const qr = require('qrcode');

exports.verifyCode = function(req, res) {

    let code = req.body.code;
    let servicio = req.body.servicio;
    let estudiante;
    let data;
    let isSave = true;

    console.log('Controller Código QR: ' + code + ' Servicio: ' + servicio);

    if (code && servicio) {
        resUser = User.find({ 'Qr': code }, function(error, results) {
            if (error) {
                data = {
                    title: 'Lectura de QR',
                    message: 'No Encontrado',
                    code: 300,
                    estudiante: 'Hubo un error consultar Administrador'
                }
                console.log("Datos: " + JSON.stringify(data));
                res.json(data);
                return;
            }
            if (results.length > 0) {
                console.log('Se ha encontrado el código ' + code);
                estudiante = results[0].Nombre_s + ' ' + results[0].Apellido_Paterno + ' ' + results[0].Apellido_Materno
                data = {
                    title: 'Lectura de código QR',
                    message: 'Encontrado',
                    code: 200,
                    estudiante: estudiante
                }

                const fecha = new Date();
                let registroinstance = new Registro({
                    Qr: code,
                    Roles: results[0].Roles,
                    Genero: results[0].Genero,
                    Carrera_Tecnica: results[0].Carrera_Tecnica,
                    Turno: results[0].Turno,
                    Servicio: servicio,
                    Fecha_Registro: fecha.toISOString()
                });

                let today = new Date();
                let dateOnly = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                console.log('OnlyDate ' + dateOnly)
                regUser = Registro.find({ 'Qr': code }, null, { sort: { "Fecha_registro": -1 } }, function(error, results) {
                    console.log('Verificando si existe registro');
                    isSave = false;
                    console.log("Registro Hoy " + results.length);
                    if (results.length > 0) {
                        let date1 = new Date();
                        let date2 = results[results.length - 1].Fecha_Registro;
                        let timeDiff = Math.abs(date2.getTime() - date1.getTime());

                        console.log('Hay diferencia ' + timeDiff);
                        if (timeDiff >= 60000) { //1 minuto
                            console.log('Ya se ha transcurrio el minuto');
                            isSave = true;
                            data = {
                                title: 'Lectura de código QR',
                                message: 'Encontrado',
                                code: 200,
                                estudiante: estudiante
                            }
                            regSave = registroinstance.save(function(err) {
                                if (err) { return next(err); }
                                console.log('Salvando el registro ');
                                data = {
                                    title: 'Lectura de código QR',
                                    message: 'Encontrado',
                                    code: 200,
                                    estudiante: estudiante
                                }
                            });
                            res.json(data);
                            return;

                        } else {
                            console.log('No ha transcurrido el minuto');
                            data = {
                                title: 'Lectura de código QR',
                                message: 'Encontrado',
                                code: 300,
                                estudiante: estudiante
                            }
                            res.json(data);
                            return;
                        }

                    } else { // No hay registro de QR Hoy
                        regSave = registroinstance.save(function(err) {
                            if (err) { return next(err); }
                            console.log('Salvando el registro ');
                            data = {
                                title: 'Lectura de código QR',
                                message: 'Encontrado',
                                code: 200,
                                estudiante: estudiante
                            }
                        });
                        res.json(data);
                        return;
                    }
                });


            } else {
                let data = {
                    title: 'Lectura de código QR',
                    message: 'No Encontrado',
                    code: 404,
                    estudiante: ''
                }
                console.log("El código " + code + " No fue enccontrado")
                res.json(data);
                return;
            }
        });

    } else {
        data = {
            title: 'Lectura de QR',
            message: 'No se envía ningún código',
            code: 300,
            usuario: ''
        }
        res.json(data);
        return;
    }

}

exports.index = function(req, res, next) {
    res.render('index', { title: 'Lectura Código QR' });
};


exports.generate = function(req, res, next) {
    let qrcode = 0;
    Registro.find({}).sort({ 'qr': -1 }).limit(1).exec((err, results) => {
        if (err) {
            console.log("Error: ", err);
            return;
        }
        qrcode = parseInt(results[0].Qr) + 1;
        console.log('Generate QRCode' + qrcode);

        let data = {
            qr: qrcode
        }

        let strData = JSON.stringify(data);
        console.log(strData);
        qr.toDataURL(strData, (err, code) => {
            if (err) res.send("Error occured");

            let data = {
                qr: qrcode,
                code: code
            }
            res.render('generate', data);
        });
    });
}

exports.estadisticas = function(req, res, next) {
    Registro.find({}).exec((err, results) => {
        if (err) {
            console.log("Error: ", err);
            return;
        }
        console.log(results);
        return res.render("estadisticas", {
            registros: results,
        });
    });
};

exports.queryDates = function(req, res, next) {
    let start = req.body.start;
    let end = req.body.end;
    console.log('Start: ' + start + ' End: ' + end);

    if (!(start && end)) {
        Registro.find({}).exec((err, results) => {
            if (err) {
                console.log("Error: ", err);
                return;
            }
            console.log(results);
            return res.json(results);
        });
    } else {
        Registro.find({ "Fecha_Registro": { "$gte": start } })
            .exec((err, results) => {
                if (err) {
                    console.log("Error: ", err);
                    return;
                }
                console.log(results);
                return res.json(results);
            });
    }


}
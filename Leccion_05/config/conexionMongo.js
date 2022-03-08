

function connMongo() {
    require('dotenv').config();
    var mongoose = require('mongoose');
    var mongoDB = process.env.DB_URL;
    console.log(process.env.DB_URL);
    mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de Conexion a MongoDB'));
}

module.exports = connMongo
function connMongo() {
    var mongoose = require('mongoose');
    var mongoDB = 'mongodb+srv://gds0351:gds0351@cluster0.jnmbt.mongodb.net/login?retryWrites=true&w=majority';
    mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de Conexion a MongoDB'));
}

module.exports = connMongo
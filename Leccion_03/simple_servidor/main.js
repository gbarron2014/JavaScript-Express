const http = require('http');
const httpStatus = require('http-status-codes');
const puerto = 8000;

const app = http.createServer(function(request, response) {
    console.log('Atendiendo Peticion');

    response.status(404).send();
    response.setHeader('Content-Type', 'text/json');
    response.write('<h1>Hello World </h1>');
    response.end();
});

app.listen(puerto);
console.log("Iniciando servidor sobre puerto " + puerto);
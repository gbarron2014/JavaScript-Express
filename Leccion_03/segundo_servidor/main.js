const http= require('http');

const app = http.createServer();

app.on("request", (req, res)=>{
    console.log("Recibiendo peticiones");

    var arrDatos = [];

    req.on("data", (bodyData) => {
        arrDatos.push(bodyData);
    });

    req.on("end", () => {
        arrDatos = Buffer.concat(arrDatos).toString();
        console.log("Contenido de los datos " + arrDatos);
    });

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Programando request');
    console.log("Método peticion " + req.method);
    console.log("URL " + req.url);
    console.log("Headers " + JSON.stringify(req.headers, null, 2));

    let mensaje = "<h1>Welcome back</h1>";
    res.end(mensaje);
});

app.listen(3000);
console.log("Se ha iniciado el servidor");
# Login and registro con Express and MongoDb Atlas

_El presente proyecto tiene como objetivo hacer uso del framework <b>Express</b> utilizando el patrón <b>MVC</b> (Modelo Vista Controlador) emplearemos
la conexión con MongoDB Atlas.
_

## Comenzando 🚀

_Para iniciar y darnos una idea de lo que consta el proyecto ._

**Pasos para instala la aplicación** para conocer como desplegar el proyecto.
  * Descarga la aplicación de ejemplo <b><a href="https://github.com/gbarron2014/JavaScript-Express/archive/refs/heads/main.zip">Descargala AQUI</a></b>
  * Descomprimir el archivo recien creado
  * Navegar hasta la carpeta JavaScript & Express
  ```
    cd JavaScript-Express-main
    cd Leccion_04
  ```
  * Instalar los módulos con la siguiente instrucción.
  ```
    npm install
  ```

  * Ejecutar la aplicación con el siguiente comando
  ```
    npm start
  ```

### Pre-requisitos 📋

* Instalar <b><a href="https://nodejs.org/es/download/">NodeJS</a></b>
* Instalar <b><a href="https://code.visualstudio.com/download">Visual Studio Code </a></b>

## Creación desde el Scratch Aplicación 🔧
_Conocer la versión de node & npm ingresa el siguiente comando en la consola de Windows_
```
npm -version
node --version
```
_Instalar el generador de express Generator de manera global no solo para éste proyecto_
```
npm install express-generator -g
```
## Generación y configuración de proyecto en Express
_Crear el proyecto con el framework express_
```
express ejemplo --view=hbs
```
_Instalar todos los módulos requeridos con el siguiente comando_
```
npm install express-session express-validator express-handlebars mongoose nodemon --save
```
## Configurando Base de datos MongoDB Atlas y módulo Mongoose
_Acceder a MongoDB Atlas_
_Ir a referencia de <a href="https://mongoosejs.com/docs/populate.html">Mongoose</a> _
Ir a <a href="https://cloud.mongodb.com/">MongoDB</a>

_Instalar la dependencia de módulo Mongoose para uso en Express_
```
npm install mongoose --save
```
_Configurar conexión a base de datos MongoDB Atlas, solo es necesario agregar la URL_
<pre>
    var mongoose = require('mongoose');
    var mongoDB = ''; //Agrega URL AQUI
    mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de Conexion a MongoDB'));
</pre>

_Abrir archivo app.js y agregar referencia donde se encuentra funcion_
```
const mongo = require('./config/conexionMongo');
```
_Invocar la conexión a MongoDB_
```
mongo();
```
### Definición de Esquema Usuario
_Crear archivo user.js en carpeta <b>models</b>_
_Agregar referencia de <b>Mongoose y Schema </a>_
```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
```
_Definir esquema User_
```
var UserSchema = new Schema({
    //Define los atributos username, password e email
});
```
_Una vez terminado exportar módulo_
```
module.exports = mongoose.model('User', UserSchema);
```
## Definiendo rutas
_Referencia de tutorial <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes">Mozilla</a>_<p>
_Referencia de documentación <a href="https://expressjs.com/es/api.html#router">Express</a>_<p>

_Definiendo las rutas para la funcionalidad de Ingreso y registro de usuario_
```
router.get('/', function(req, res, next) {
  res.send('Ruta login');
});
router.get('/home', function(req, res, next) {
  res.send('Ruta de Home');
});

router.get('/register', function(req, res, next) {
  res.send('Ruta Registro de Usuario');
});

router.get('/logout', function(req, res, next) {
  res.send('Ruta Logout ');
});
 
router.post('/verify', function(req, res, next) {
  res.send('Ruta Verifica si Usuario puede ingresar');
});

router.post('/addUser', function(req, res, next) {
  res.send('Agrega Usuario a Mongo');
});
```
_Prueba las URL´s con Postman_
```
http://localhost:3000
http://localhost:3000/home
http://localhost:3000/register
http://localhost:3000/logout

 ** Métodos POST **
http://localhost:3000/verify
http://localhost:3000/addUser
 
```

## Definiendo los controladores de las respectivas rutas
_ Crea un nuevo archivo llamado userController.js dentro de la carpeta Controllers_
_ Agregar las funciones que manejaran cada petición en las rutas_
 <pre>
 exports.user_login = function(req, res) {
    res.send("Ruta Login controlada por el controlador");    
}

exports.user_home = function(req, res) {
    res.send("Ruta Home controlada por el controlador");    
}

exports.user_logout = function(req, res) {
    res.send("Ruta Logout controlada por el controlador");    
}

exports.user_registro = function(req, res) {
    res.send("Ruta Registro controlada por el controlador");    
}

exports.user_verify = function(req, res) {
    res.send("Ruta verifica User controlada por el controlador");    
}

exports.user_addUser = function(req, res) {
    res.send("Ruta Add User controlada por el controlador");    
}
 </pre>

### Modifica las rutas agregando el controlador que lo manejara
_Agrega la referencia del controlador en archivo routes/index.js_
```
var controller = require('../controllers/userController');
```

_ Modifica el nombre de la función en las rutas_
<pre>
router.get('/', controller.user_login);
router.get('/home', controller.user_home);
router.get('/logout', controller.user_logout);
router.get('/register', controller.user_register);
router.post('/verify', controller.user_verify);
router.post('/addUser', controller.user_addUser); 
</pre>

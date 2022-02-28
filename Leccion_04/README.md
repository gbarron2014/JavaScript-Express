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


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

### Creación desde el Scratch Aplicación 🔧
_Conocer la versión de node & npm ingresa el siguiente comando en la consola de Windows_
```
npm -version
node -version
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


# Login and registro con Express and MongoDb Atlas

_El presente proyecto tiene como objetivo hacer uso del framework <b>Express</b> utilizando el patrón <b>MVC</b> (Modelo Vista Controlador) emplearemos
la conexión con MongoDB Atlas. A través de una serie de Vídeos se irá guiando en el desarrollo de la aplicación._
* <a href="">Video 01</a> 
* <a href="https://drive.google.com/file/d/1iAwPTWXNoc-GErwhkiU_sO1xayTAgiyh/view?usp=sharing">Video 02</a> Instalación y configuración del proyecto con **Express Generator**.
* <a href="https://drive.google.com/file/d/1UsbBcEkc-_n8XZyVki8TwVztdIXf0IDm/view?usp=sharing">Video 03</a> Creación de **base de datos** y collección **users** en **MongoDB**, configuración de conexión de MongoDB en la aplicación y definición de esquema **user**.
* <a href="https://drive.google.com/file/d/1IvM0oHc5i3X3YrftKPePbFlpcXy2i_Eq/view?usp=sharing">Video 04</a> Definición de **rutas** en la aplicación
* <a href="https://drive.google.com/file/d/1t9dyM-PUK5Ux2crtOpCmTp60pDPi0LgF/view?usp=sharing">Video 05</a> Definición de **controlador** asociadas a las **rutas**.
* <a href="https://drive.google.com/file/d/1og70i12FBb6gnTNggd90UsdlHwMMpJiJ/view?usp=sharing">Video 06</a> Creación de vistas **Login** y **Registro**.
* <a href="">Video 07</a>

## Comenzando 🚀

_Para iniciar y darnos una idea de lo que consta el proyecto ._

**Pasos para instalar la aplicación** y conocer como ejecutar el proyecto.
  * Descarga la aplicación de ejemplo <b><a href="https://github.com/gbarron2014/JavaScript-Express/archive/refs/heads/main.zip">Descargala AQUI</a></b>
  * Descomprimir el archivo recien creado
  * Navegar hasta la carpeta JavaScript & Express y ejecutar los siguientes comandos
  ```
    cd JavaScript-Express-main
    cd Leccion_04
  ```
  * Instalar los módulos requeridos para la aplicación y definidos en archivo package.json con la siguiente instrucción.
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
* Instalar <b><a href="https://www.postman.com/downloads/">Postman</a></b> para escritorio.

# Creación desde el Scratch Aplicación de Express 🔧
_Abrir consola de Windows **Windows + R**, ingresar comando **cmd** y dar **Enter**_
_Primeramente, debemos conocer la versión actualmemnte instaladas de **node** & **npm** ingresa el siguiente comando en la consola _
```
npm -version
node --version
```
_Instalar el generador de **Express Generator** de manera global no solo para éste proyecto sino para todos los que se ejecuten en la máquina_
```
npm install express-generator -g
```
## Vide 02 Generación y configuración de proyecto en Express
_Crear el proyecto con el framework **express**, tome en cuenta el nombre del proyecto y la plantilla con HandleBars_
```
express ejemplo --view=hbs
```
_Instalar todos los módulos requeridos con el siguiente comando_
```
npm install express-session express-validator express-handlebars mongoose nodemon --save
```
## Video 03 Configurando Base de datos MongoDB Atlas y módulo Mongoose
_Acceder a MongoDB Atlas_
_Ir a la referencia de <a href="https://mongoosejs.com/docs/populate.html">Mongoose</a> para consulta más precisa. _
_Ir a la referencia<a href="https://cloud.mongodb.com/">MongoDB</a> para dar de alta **base de datos** y **collección**._
_Instalar la dependencia de módulo Mongoose para uso en Express (Claro está que la hicimos al inicio)_
```
npm install mongoose --save
```
_Configurar conexión a base de datos con MongoDB Atlas en Express, solo es necesario agregar la URL que indica MongoDB en la nube_
<pre>
    var mongoose = require('mongoose');
    var mongoDB = ''; //Agrega URL AQUI
    mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de Conexion a MongoDB'));
</pre>

_Abrir archivo **app.js** y agregar referencia donde se encuentra funcion de conexión_
```
const mongo = require('./config/conexionMongo');
```
_Invocar la conexión a MongoDB_
```
mongo(); //Invocación a función de conexión.
```
### Definición de esquema Usuario
_Crear archivo **user.js** en carpeta <b>models</b>_
_Agregar primeramente referencia de clases<b>Mongoose y Schema </a>_
```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
```
_Definir esquema **User** vamos a agregar campos como **username, password y correo electrónico**_
```
var UserSchema = new Schema({
    //Define los atributos username, password e email
});
```
_Una vez terminado de definir el esquema al final exportar módulo_
```
module.exports = mongoose.model('User', UserSchema);
```
## Definiendo rutas
_Referencia de tutorial <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes">Mozilla</a>_<p>
_Referencia de documentación <a href="https://expressjs.com/es/api.html#router">Express</a>_<p>

_Definir las rutas para las funcionalidades:_
* Mostrar pantalla de Login & Registro de Usuario.
* Mostrar pantalla de bienvenida una vez ingresado con las credenciales.
* Salir de la aplicación con Logout.
* Verificar si el usuario existe en el base de datos.
* Agregar un nuevo usuario a la base de datos.
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
_Prueba las URL´s con Postman y verifica que los mensajes sean correctos_
```
http://localhost:3000
http://localhost:3000/home
http://localhost:3000/register
http://localhost:3000/logout
http://localhost:3000/verify
http://localhost:3000/addUser
```

## Definiendo funciones de controlador de las respectivas rutas
_Crea un nuevo archivo llamado userController.js dentro de la carpeta Controllers._
_Agregar las funciones que manejaran cada petición en las rutas_
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

### Modificar las rutas agregando el controlador que lo manejara
_Agrega la referencia del controlador en archivo **routes/index.js**_
```
var controller = require('../controllers/userController');
```

_Cambiar la función anónima por nombre de función de controlador en las rutas._
<pre>
router.get('/', controller.user_login);
router.get('/home', controller.user_home);
router.get('/logout', controller.user_logout);
router.get('/register', controller.user_register);
router.post('/verify', controller.user_verify);
router.post('/addUser', controller.user_addUser); 
</pre>

# Definiendo estructura de carpetas para la vista
_Para una mayor referencia de template <a href="https://handlebarsjs.com/guide/">HBS</a>_ 
_Crear archivo **login.css** para hoja de estilo en la ruta **public/stylesheets/login.css**_
```
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #e7e6ee;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #a790e7, #9871f3, #4533e9, #0e0beb);

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right,#a790e7, #9871f3, #4533e9, #0e0beb);
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}
@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
  }
}
```

_Hacer modificaciones en archivo **views/layout.hbs** para agregar referencias de hojas de estilo._
```
<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous">
<link rel='stylesheet' href='/stylesheets/login.css' />
```

_Agregar **Script** bootstrap al final del archivo **views/layout.hbs**_
```
<script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"></script>
  </body>
```

_Crear archivo **views/login.hbs** para captura de username y contraseña ()_
```
<!DOCTYPE html>
<html>
  <head>
    <title>{{title}}</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous">
    <link rel='stylesheet' href='/stylesheets/login.css' />
  </head>
  <body>

    <section class="h-100 gradient-form" style="background-color: #eee;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">

                    <div class="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style="width: 185px;" alt="logo">
                    </div>

                    <form action="/verify" method="post">
                      <p>Por favor ingresa con tu cuenta</p>
                      {{#if message}}
                        <p style="color:red">{{message}}</p>
                      {{/if}}
                      <div class="form-outline mb-4">
                        <input type="text" id="username" name="username" class="form-control"
                          placeholder="Usuario" />
                        <label class="form-label" for="form2Example11">Usuario</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="password" name="password"
                          class="form-control" />
                        <label class="form-label" for="password">Contraseña</label>
                      </div>

                      <div class="text-right pt-1 mb-5 pb-1">
                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onclick="submit();">Ingresar</button>
                        <p><a class="text-muted" href="#!">¿Olvidaste Contraseña?</a> </p>
                      </div>

                      <div class="d-flex align-items-center
                        justify-content-center pb-4">
                        <a href="/register"><button type="button" class="btn btn-outline-danger">Registrate</button></a>
                      </div>

                    </form>

                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center
                  gradient-custom-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"></script>
  </body>
</html>
```

_crear archivo **views/register.hbs** para captura de usuario: username, contraseña y correo electrónico._
```
<!DOCTYPE html>
<html>
  <head>
    <title>{{title}}</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous">
    <link rel='stylesheet' href='/stylesheets/login.css' />
  </head>
  <body>

    <section class="h-100 gradient-form" style="background-color: #eee;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">

                    <div class="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style="width: 185px;" alt="logo">
                    </div>

                    <form action="/addUser" method="post">
                      <p>Registro de Usuario</p>
                      {{#each messages}}
                        <p style="color:red">{{this.msg}}</p>
                      {{/each}}
                      <div class="form-outline mb-4">
                        <input type="text" id="username" name="username" class="form-control"
                          placeholder="Usuario" />
                        <label class="form-label" for="username">Usuario</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="text" id="email" name="email" class="form-control"
                          placeholder="Email" />
                        <label class="form-label" for="email">Correo Electrónico</label>
                      </div>


                      <div class="form-outline mb-4">
                        <input type="password" id="password" name="password"
                          class="form-control" />
                        <label class="form-label" for="password">Contraseña</label>
                      </div>

                      <div class="text-center pt-1 mb-5 pb-1">

                        <button class="btn btn-primary btn-block fa-lg
                          gradient-custom-2 mb-3" type="button" onclick="submit();">Registrar</button>
                        <p><a class="text-muted" href="/login">Ingresar</a></p>
                      </div>
                    </form>

                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center
                  gradient-custom-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"></script>
  </body>
</html>
```

_Modificar archivo **views/layout.hbs** para que tenga su propio layout_
```
<!DOCTYPE html>
<html>
  <head>
    <title>{{title}}</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous">
    <link rel='stylesheet' href='/stylesheets/login.css' />
  </head>
  <body>
    <div class="container">
      <!-- header -->
      <div class="row">
        <div class="col">
          {{> header}}
        </div>
      </div>

      <!-- contenido login -->
      <div class="row">
        <div class="col">
          {{{body}}}
        </div>
      </div>  

      <!-- footer -->
      <div class="row">
        <div class="col">
          {{> footer}}
        </div>
      </div>
</div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"></script>
  </body>
</html>

```
_Crear carpeta **views/partials**_
_Crear archivo **views/partials/header.hbs** para desplegarlo en pantalla Home de bienvenida y todas las demás pantallas (excepto Login y registro)._
```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  ml-auto" >
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Salir
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="/logout">Salir</a></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>
```

_Crear archivo **views/partials/footer.hbs** para el pie de página_
```
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">Footer</span>
            </div>
          </nav>
```
_configurar **partials** en archivo **app.js**_
```
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");
```

_Modificar funcionalidad en rutas **login**_
```
router.get('/', function(req, res, next) {
  let data = {
    title: 'Ingresar al Sistema',
    layout:false //Indica que no se tome en cuenta layout.hbs
  }

  res.render('login', data);
});
```

_Modificar rutas para **registro**_
```
router.get('/register', function(req, res, next){
  let data = {
      title: 'Registrar Usuario',
      layout:false 
    }

  res.render('register', data);
});

```
### Logica de negocio para Login en userController.js
_Agregar referencia de **Express Validator** en datos que llegan desde la vista_
```
const { body,validationResult } = require('express-validator');
```

_Definir la función verify en el controlador que obtiene los datos y verifica si hay vacíos_
```
exports.user_login_verify = function(req, res) {
    let usuario = req.body.username;
    let pass = req.body.password;

    console.log('Usuario: ' + usuario + " Pass: " + pass);
    
    if (usuario && pass) {//Hay datos en parámetros enviados
    } else {
    }


};
```
_Busca y si encuentra usuario en la Base de datos_
```
        User.find({'username': usuario, 'password':pass}, function(error, results){
            if (error) {
                let data = {
                    title: 'Ingresar al Sistema',
                    message: 'Hubo un error contacte a soporte',
                    layout:false
                }
                res.render('login', data);                
            }

            if (results.length > 0) {
                res.render('index', {title:'Bienvenido'});
            } else {
                let data = {
                    title: 'Ingresar al Sistema',
                    message: 'Usuario o contraseña incorrecto',
                    layout:false
                }
                res.render('login', data);   
            }
```
__Modificar código en caso de que haya errores
```
        let data = {
            title: 'Ingresar al Sistema',
            message: 'Usuario o Contraseña vacío',
            layout:false
        }
        res.render('/', data);
```

_Modificar archivo de vista **index.hbs** para dar bienvenida_
```
<div class="container">
    <h1>Bienvenido {{message}}</h1>
</div>
```

_Agregar funcionalidad de **Logout**_
```
exports.user_logout = function(req, res) {
    let data = {
        title: 'Ingresar al Sistema',
        layout:false
    }
    res.render('login', data);   

};
```

### Creando la funcionalidad de Logout
_Modificar el método user de logout_
```
exports.user_logout = function(req, res) {
    let data = {
        title: 'Ingresar al Sistema',
        layout:false
    }
    res.render('login', data);   

};
```


### Implementar funcionalidad registro
_Modificar funcionalidad de registro en controlador_
```
exports.user_addUser = [];
```
_Agrear el siguiente código para modificar extraer datos y sanitzarlos_
```
    body('username','Usuario es requerido').trim().isLength({min:8, max:15}).escape(),
    body('email','Email es requerido').trim().isEmail().escape(), 
    body('password','Contraseña es requerida').trim().isLength({min:8, max:15}).escape(),

    (req, res, next) => {
    }
```
_agregar referencia a Express validator_
```
const { body,validationResult } = require('express-validator');
```
_Verificar que no haya errores_
```
(req, res, next) => {
        console.log('Ingresando a la validación');
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
        } else {
        }
```
_Implementar cuando hay errores_
```
        if (!errors.isEmpty()) {
            let data = {
                title: 'Registro de Usuario',
                messages: errors.array()
            };
            res.render('register', data);
            return;
```
_Implementar registro en la base de datos_
```
        } else {
            console.log('Registrando Usuario');
            let user = new User({ //Creando objeto User
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            });

            user.save(function(error){
                if (error) { return next(error); }

                let data= {title: 'Ingresar Sistema', message:'Bienvenido ' + req.body.username}
                res.render('index', data);
            });
```

_verificar en archivo routes/index.js el método_
```
router.post('/addUser', controller.user_addUser); 
```

Agregar código Handlebars para desplegar mensajes_
```
                    <form action="/addUser" method="post">
                      <p>Registro de Usuario</p>
                      {{#each messages}}
                        <p style="color:red">{{this.msg}}</p>
                      {{/each}}
```

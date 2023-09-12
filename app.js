// Importación de todas las Librerías 
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path'); /* Nos permite resolver y corregir directorios */
require('dotenv').config();
require('ejs');

const helmet = require('helmet');
const { request } = require('http');

const app = express()
const port = process.env.PORT || 3000;

// Middlewares 
app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) /* Se utiliza para que el servidor pueda comprender el formato JSON */

// Archivos Estáticos 
app.use( express.static(path.join(__dirname, 'public')) )

//Motor de plantilla EJS
app.set('view engine', 'ejs');

//Importación de Rutas
app.use(require ('./routes/foro.routes'));


app.listen(port, () => console.log(`Bienvenido al servidor en http://localhost:${port}`))
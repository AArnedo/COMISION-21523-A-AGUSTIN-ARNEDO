/* Importación de todas las Librerías */
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config()
const helmet = require('helmet');
const ejs = require('ejs');
const app = express()


const port = process.env.PORT || 3000;

/* Middlewares */
app.use(cors())
app.use(morgan('combined'))
app.use(express.json()) /* Se utiliza para que el servidor pueda comprender el formato JSON */



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/user' , function (req, res) {

    /* Recibimos los datos por el body */
    const { name, lastname } = req.body

    res.send(`¡Bienvenido ${name} ${lastname}!`)

})

app.listen(port, () => console.log(`Servidor en http://localhost:${port}`))
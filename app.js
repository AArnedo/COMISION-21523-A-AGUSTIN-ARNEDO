/* Importación de todas las Librerías */
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const app = express()
const port = 4000;

/* Middlewares */
app.use(cors())
app.use(morgan('dev'))


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => console.log(`Servidor en http://localhost:${port}`))
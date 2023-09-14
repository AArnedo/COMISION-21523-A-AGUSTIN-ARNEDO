const ctrl = {}
const Publicaciones = require('../models/Publicaciones')


ctrl.crearPublicacion = async (req, res) => {
//Creando una nueva publicación
  const publicacion = await Publicaciones.create(req.body);
  res.send({
    msg: '¡Publicación creada con Éxito!',
    publicacion
  })
}

//Se consultan todas las publicaciones
ctrl.obtenerPublicaciones = async (req, res) => {
    const publicaciones = await Publicaciones.findAll();
    res.json(publicaciones)
}
ctrl.actualizarPublicacion = async (req, res) => {

}
ctrl.eliminarPublicacion = async (req, res) => {

}

module.exports = ctrl;
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

  const { id } = req.params;
  
  const publicacion = await Publicaciones.findByPk(id)
  publicacion.set(req.body)
  await publicacion.save() //Esta instrucción se guarda en la base de datos.
  res.json({
    msg:"¡Publicacion actualizada correctamente!"
})
};
ctrl.eliminarPublicacion = async (req, res) => {

  const { id } = req.params;

  await Publicaciones.destroy({
    where: {
      id
    }
  })

  res.json({
    msg:"¡Publicacion Eliminada correctamente!"
  })



}

module.exports = ctrl;
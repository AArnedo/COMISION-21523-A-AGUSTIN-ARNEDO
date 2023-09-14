/* Incorporaremos el erutado de Express */
const router = require ('express').Router();
const {
      actualizarPublicacion, 
      crearPublicacion, 
      eliminarPublicacion,
      obtenerPublicaciones,
      obtenerPublicacion
} = require('../controllers/foro.controllers');


//RUTAS PARA RENDERIZAS VISTAS
router.get('/', (req, res) =>{
      res.render ('home');
  })

  router.get('/main', (req, res) =>{
      res.render('main')
  })
  router.get('/main/:id', (req, res) =>{
      res.render('editar', { id: req.params.id })
  })


//RUTAS PARA CRUD DE PUBLICACIONES--
//Creando una nueva publicación
router.post('/publicacion' , crearPublicacion);
//Obtener todas las publicaciones
router.get('/publicaciones/', obtenerPublicaciones)
//Obtener UNA publicacion
router.get('/publicacion/:id', obtenerPublicacion)
//Actualizar una publicación
router.put('/publicacion/:id', actualizarPublicacion)
//Eliminar una publicación
router.delete('/publicacion/:id', eliminarPublicacion)

  module.exports = router;


/* Incorporaremos el erutado de Express */
const router = require ('express').Router();

const {
      actualizarPublicacion, 
      crearPublicacion, 
      eliminarPublicacion,
      obtenerPublicaciones
} = require('../controllers/foro.controllers');


//RUTAS PARA RENDERIZAS VISTAS
router.get('/', (req, res) =>{
      res.render ('home');
  })

  router.get('/main', (req, res) =>{
      res.render('main')
  })



  
//RUTAS PARA CRUD DE PUBLICACIONES
//Creando una nueva publicación
router.post('/publicacion' , crearPublicacion);
//Obtener todas las publicaciones
router.get('/publicaciones/', obtenerPublicaciones)
//Actualizar una publicación
router.put('/publicacion/:id', actualizarPublicacion)
//Eliminar una publicación
router.delete('/publicacion/:id', eliminarPublicacion)




  module.exports = router;
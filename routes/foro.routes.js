

/* Incorporaremos el erutado de Express */
const router = require ('express').Router();

const {
      actualizarPublicacion, 
      crearPublicacion, 
      eliminarPublicacion,
      obtenerPublicaciones
} = require('../controllers/foro.controllers');

router.get('/', (req, res) =>{
        res.render ('home');
  })
  
//Creando una nueva publicación
router.post('/publicacion' , crearPublicacion);
//Obtener todas las publicaciones
router.get('/publicaciones/', obtenerPublicaciones)
//Actualizar una publicación
router.put('/publicacion/:id', actualizarPublicacion)
//Eliminar una publicación
router.delete('/publicacion/:id', eliminarPublicacion)




  module.exports = router;
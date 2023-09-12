/* Incorporaremos el erutado de Express */
const router = require ('express').Router();


router.get('/', (req, res) =>{
        res.render ('home');
  })
  
router.post('/new-publication' , (req, res) => {
  
      /* Recibimos los datos por el body */
      const { titulo, comentario } = req.body

      // Se guardan los datos en una DB
      console.log(titulo, comentario);


      //Mensaje retornado
      return res.send( {msg: 'Publicación guardada con Éxito!'} );
      
  })

  module.exports = router;
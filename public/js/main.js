//Referencia al elemento de formulario HTML
const formGuardar = document.querySelector("#form-guardar")

formGuardar.addEventListener('submit' , async (e) => {

    e.preventDefault();

    //Capturar datos de los INPUT
    const titulo = document.querySelector('#titulo-post').value;
    const comentarios = document.querySelector('#comentario-post').value;
    const url_imagen =  document.querySelector('#url-img').value;
    const fecha =  document.querySelector('#fecha').value;

    //Enviar los datos al Servidor:
    const response = await fetch('/publicacion', {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({titulo,comentarios,url_imagen,fecha}),
    })
    const data = await response.json ();
    console.log(data.msg);
    

})
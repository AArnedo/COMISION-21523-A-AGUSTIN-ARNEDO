//Referencia al elemento de formulario HTML
const formGuardar = document.querySelector("#form-guardar")

const obtenerPublicacion = async (id) =>{
    const response = await fetch(`/publicacion/${id}`)
    const data = await response.json()
    return data;
}

    document.addEventListener('DOMContentLoaded', async () =>{
        const id = formGuardar.dataset.id 
        const publicacion = await obtenerPublicacion(id)
        
        const titulo = document.querySelector('#titulo-post')
        const comentarios = document.querySelector('#comentario-post')
        const url_imagen =  document.querySelector('#url-img')
        const fecha =  document.querySelector('#fecha')

        titulo.value = publicacion.titulo;
        comentarios.value = publicacion.comentarios;
        url_imagen.value = publicacion.url_imagen;
        fecha.value = publicacion.fecha;
    })

formGuardar.addEventListener('submit' , async (e) => {
    e.preventDefault();


    //Capturar datos de los INPUT
    const titulo = document.querySelector('#titulo-post').value;
    const comentarios = document.querySelector('#comentario-post').value;
    const url_imagen =  document.querySelector('#url-img').value;
    const fecha =  document.querySelector('#fecha').value;

    //Enviar los datos al Servidor:
    const response = await fetch(`/publicacion/${id}`, {
        method: 'put',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({titulo,comentarios,url_imagen,fecha}),
    })
    const data = await response.json ();
    alert(data.msg);
    location.href = "/"
})
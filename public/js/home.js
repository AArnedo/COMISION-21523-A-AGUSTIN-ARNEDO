
//Referencia al elemento de formulario HTML
const formGuardar = document.querySelector("#form-guardar")

formGuardar.addEventListener('submit' , async (e) => {

    e.preventDefault();

    //Capturar datos de los INPUT
    const titulo = document.querySelector('#titulo-post').value;
    const comentario = document.querySelector('#comentario-post').value;

    //Enviar los datos al Servidor:
    const response = await fetch('/new-publication', {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({titulo,comentario}),
    })
    const data = await response.json ();
    console.log(data.msg);
    

})
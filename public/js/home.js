const obtenerPublicaciones = async () =>{
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}

const mostrarPublicaciones = (publicaciones, elementoHTML) =>{
    let secciones = "";
    //método para recorrer todos los registros
    publicaciones.forEach(publicacion => {
        secciones += `
        
        <section class="">
            <div class="card border-warning border-3" style="width: 18rem;">
                    <img src="${publicacion.url_imagen}" class="card-img-top" alt="imagen">
                <div class="card-body">
                    <h5 class="card-title">${publicacion.titulo}</h5>
                    <p class="card-text">${publicacion.comentarios}</p>
                    <p>${publicacion.fecha}</p>
                </div>
            </div>
        </section>
        `
    });

    //Se crea la vista
    elementoHTML.innerHTML = secciones;
}

document.addEventListener('DOMContentLoaded', async ()=>{

const publicaciones = await obtenerPublicaciones()
console.log(publicaciones);

//Modificar el DOM para ver las publicaciones:
    const main = document.querySelector('#lista-publicaciones')
    mostrarPublicaciones(publicaciones, main)
})
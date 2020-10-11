function crearElementos() {

    // creo un div y le agrego las propiedades de pixel
    let nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("pixel");

    // obtengo el div existente de mi HTML y le agrego el nuevo div creado en JS
    let contenedor = document.querySelector("#contenedor");
    contenedor.appendChild(nuevoDiv);
        
}

// ejecuto la funcion crearElementos al cargar la pagina
window.addEventListener("load", 

    function agregarElementos() {
        // multiplico los pixeles x2000
        for (let index = 0; index < 2000; index++) {
            crearElementos();
        }
    }
)

// al pasar el mouse por encima se activa la propiedad "pintura"

let pixeles = document.querySelectorAll("pixel");

pixeles.addEventListener("mouseenter", function(){
    nuevoDiv.classList.toggle("pintura");
})


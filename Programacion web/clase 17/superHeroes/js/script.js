// datos super heroes externo

function peticionSuperHeroes() {
    fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then (function(response) {
        return response.json();
    })
    .then (function (respuesta){
        mostrarSuperHeroes(respuesta);
        console.log(respuesta);
    })
    }

// boton para ingresar datos

let btnEnviar = document.querySelector(".btn-warning");
btnEnviar.addEventListener("click",peticionSuperHeroes);

// ingresa datos super heroes en navegador

function mostrarSuperHeroes(respuesta) {
    
    // accedo al HTML
        // HEROE 1
        const heroe1Is = document.querySelector("#heroe1-is");
        const heroe1E = document.querySelector("#heroe1-e");
        const heroe1S = document.querySelector("#heroe1-s");

        // HEROE 2
        const heroe2Is = document.querySelector("#heroe2-is");
        const heroe2E = document.querySelector("#heroe2-e");
        const heroe2S = document.querySelector("#heroe2-s");

        // HEROE 3
        const heroe3Is = document.querySelector("#heroe3-is");
        const heroe3E = document.querySelector("#heroe3-e");
        const heroe3S = document.querySelector("#heroe3-s");

    // modifico el HTML
        // HEROE 1
        heroe1Is.textContent = respuesta.members[0].secretIdentity;
        heroe1E.textContent = respuesta.members[0].age;
        heroe1S.textContent = respuesta.members[0].powers[0] +' / '+ respuesta.members[0].powers[1] +' / '+ respuesta.members[0].powers[2];

        // HEROE 2
        heroe2Is.textContent = respuesta.members[1].secretIdentity;
        heroe2E.textContent = respuesta.members[1].age;
        heroe2S.textContent = respuesta.members[1].powers[0] +' / '+ respuesta.members[1].powers[1] +' / '+ respuesta.members[1].powers[2];

        // HEROE 3

        // definiendo datos faltantes
        respuesta.members[2].secretIdentity = "El guason"
        respuesta.members[2].age = 25;

        heroe3Is.textContent = respuesta.members[2].secretIdentity;
        heroe3E.textContent = respuesta.members[2].age;
        heroe3S.textContent = respuesta.members[2].powers[0] +' / '+ respuesta.members[2].powers[1] +' / '+ respuesta.members[2].powers[2];

}


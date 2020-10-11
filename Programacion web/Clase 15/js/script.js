// EJERCICIO 3

// let btn = document.querySelector(".btn");

// let click = 0;
// btn.addEventListener("click", function() {
//     click++;
//     if (click%2===0) {
//         btn.textContent = "Desactivado";
//     } else {
//         btn.textContent = "ACTIVAR";
//     }
// })

// btn.addEventListener("mouseenter", function() {
//     btn.classList.toggle("btn-seleccionado");
// })

// btn.addEventListener("mouseleave", function() {
//     btn.classList.toggle("btn-seleccionado");
// })

// EJERCICIO 4

// function obtenerDatos (e) {
//     e.preventDefault()
    
//     let inputUsuario = document.querySelector('#usuario');
//     let inputNombre = document.querySelector('#nombre');
//     let inputEmail = document.querySelector('#email');

//     alert(`Estos fueron los datos ingresados:
//     Usuario: ` + inputUsuario.value + `
//     Nombre: ` + inputNombre.value + `
//     Email: ` + inputEmail.value);
// }

// let btnEnviar = document.querySelector('#btn-enviar');
// btnEnviar.addEventListener('click',obtenerDatos);
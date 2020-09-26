// EJERCICIO 1

// let nombre = prompt("Ingrese su nombre");

// if (!nombre) {
//     alert ("No ha introducido ningún nombre");
//     nombre = prompt("Ingrese su nombre por favor");
//     alert("Bienvenido "+nombre);
// } else {
//     alert("Bienvenido "+nombre);
// }

// EJERCICIO 2

// let numero = parseInt(prompt("Ingrese un número"));

// if (numero%2 === 0) {
//     alert("El número " + numero + " es par");
// } else {
//     alert("El número " + numero + " es impar");
// }

// EJERCICIO 3

// let contraseñaCorrecta = "pedro123";

// let contraseñaIngresada = prompt("Ingrese una contraseña");

// if (contraseñaCorrecta === contraseñaIngresada) {
//     alert("Bienvenido a la página");
// } else {
//     document.write(`<p>Su ticket ha sido emitido</p><img scr="https://media.gettyimages.com/vectors/admit-one-event-ticket-vector-id1090533854?s=2048x2048">`)
// }

// EJERCICIO 4

// let estado = prompt("¿Cómo está?");

// if (estado.toLocaleLowerCase() === "triste") {
//     alert ("No pasa nada, las buenas ya van a venir");
// } else {
//     alert("Que bueno que no estes triste");
// }

// EJERCICIO 5 

// let peliculaElegida = prompt("Elegí tu pelicula favorita: Bambi, El rey leon, Tarzan, Bichos");

// switch (peliculaElegida.toLowerCase()) {
//     case "bambi":
//         document.write(`<p>Su pelicula elegida es ${peliculaElegida.toLowerCase()}</p>`);
//         break;
    
//     case "el rey leon":
//         document.write(`<p>Su pelicula elegida es ${peliculaElegida.toLowerCase()}</p>`);
//         break;

//     case "tarzan":
//         document.write(`<p>Su pelicula elegida es ${peliculaElegida.toLowerCase()}</p>`);
//         break;

//     case "bichos":
//         document.write(`<p>Su pelicula elegida es ${peliculaElegida.toLowerCase()}</p>`);
//         break;

//     default:
//         alert("Disculpa pero esa pelicula no es valida");
//         break;
// }

// EJERCICIO 6

// let numeroSecreto = 4;
// let numeroUsuario = prompt("Elegí un número del 1 al 10");

// if (numeroSecreto === parseInt(numeroUsuario)) {
//     alert("Felicidades! Adivinaste!!");
// } else {
//     if (parseInt(numeroUsuario) > numeroSecreto) {
//         alert("El número que elegiste es mas alto que el número secreto");
//     } else {
//         alert("El número que elegiste es mas bajo que el número secreto");
//     }
// }

// EJERCICIO 7

// let numeroTragos = prompt("Cuantos tragos tomaste?")

// if (parseInt(numeroTragos) > 0) {
//     alert("No podes manejar en ese estado, pedite un taxi")
// } else {
//     alert("Nos alegra que seas un conductor responsable")
// }

// let respuesta = prompt("Ingresa algo..");

// while (!respuesta) {
//     alert("Respuesta incorrecta");
//     respuesta = prompt("Ingresa algo la puta madre");
// }

// alert(`Gracias por ingresar ${respuesta}`);
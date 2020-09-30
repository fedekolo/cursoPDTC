// EJERCICIO 1

// let operacion = prompt("Que operación quieres realizar? Suma / resta / multipliación / division");

// while (!operacion) {
//     alert("Por favor, ingresar una operacion");
//     operacion = prompt("Que operación quieres realizar? Suma / resta / multipliación / division");
// }

// let numero1 = prompt("Ingrese un número");

// while (!numero1) {
//     alert("Por favor, ingresar el primer número");
//     numero1 = prompt("Ingrese el primer número número");
// }

// let numero2 = prompt("Ingrese otro número");

// while (!numero2) {
//     alert("Por favor, ingresar el segundo número");
//     numero2 = prompt("Ingrese el segundo número");
// }

// let resultado;

// switch (operacion.toLowerCase()) {
//     case "suma":
//         resultado = parseInt(numero1) + parseInt(numero2);
//         document.write(`<p>Su respuesta es ${resultado}</p>`);
//         break;
    
//     case "resta":
//         resultado = parseInt(numero1) - parseInt(numero2);
//         document.write(`<p>Su respuesta es ${resultado}</p>`);
//         break;

//     case "multiplicacion":
//         resultado = parseInt(numero1) * parseInt(numero2);
//         document.write(`<p>Su respuesta es ${resultado}</p>`);
//         break;

//     case "division":
//         resultado = parseInt(numero1) / parseInt(numero2);
//         document.write(`<p>Su respuesta es ${resultado}</p>`);
//         break;
// }

// EJERCICIO 2

// let numeroA = -20;

// while (numeroA <= 30) {
//     console.log(numeroA)
//     numeroA++;
// }

// let numeroB = 20;

// while (numeroB <= 60) {
//     console.log(numeroB)
//     numeroB = numeroB + 2;
// }

// let numeroC = 601;

// while (numeroC <= 665) {
//     console.log(numeroC);
//     numeroC = numeroC+2;
// }

// let divisor;
// let primo = 1;
// let restos = 0;

// while (primo <= 150) {
//     divisor = 2;

//     while (divisor < primo) {

//         if (primo%divisor===0) {
//             restos++;
//         }
//         divisor++;
//     }

//     if (restos===0) {
//         console.log(primo)
//     }

//     restos=0;
//     primo++;
// }

// EJERCICIO 3

// let edad;
// let sexo;

// edad = prompt("Cual es su edad?");

// while (1 > edad || edad > 110 || !edad) {
//     alert("Por favor, ingresar una edad entre 1 y 110 años.");
//     edad = prompt("Cual es su edad?");
// }

// sexo = prompt("Ingrese su sexo (M/F)").toLocaleUpperCase();

// while (sexo!=="M" && sexo!=="F") {
//     alert("Por favor, ingresar su sexo correctamente.");
//     sexo = prompt("Ingrese su sexo (M/F)").toLocaleUpperCase();
// }

// if (sexo==="M" && edad >= 65) {
//     alert("Usted se puede jubilar.");
// } else {
//     alert("Usted no se puede jubilar.");
// }

// if (sexo==="F" && edad >= 60) {
//     alert("Usted se puede jubilar.");
// } else {
//     alert("Usted no se puede jubilar.");
// }

// EJERCICIO 4

// let contraseñaGuardada = "123";
// let intentos;
// let contraseñaUsuario = prompt("Ingrese una contraseña");

// if (contraseñaUsuario === contraseñaGuardada) {
//     alert("Bienvenido!");
// } else {
//     alert("Contraseña incorrecta, vuelve a intentarlo.");
//     intentos = 1;

//     while (contraseñaUsuario !== contraseñaGuardada && intentos < 3) {
        
//         contraseñaUsuario = prompt("Ingrese una contraseña");
        
//         if (contraseñaUsuario === contraseñaGuardada) {
//             alert("Bienvenido!");
//         } else {
//             alert("Contraseña incorrecta, vuelve a intentarlo.");
//             intentos++;
//         }
        
//     }
// }

// if (intentos===3) {
//     alert("Lo siento, ya has intentando demasiadas veces.")
// }

// EJERCICIO 6

// let numero = prompt("Ingrese un numero entre 1 y 10");
// let multiplicador = 1;
// let resultado;

// while (1 > numero || numero > 10 || !numero) {
//     alert("Ingrese un número del 1 al 10 por favor");
//     numero = prompt("Ingrese un numero");
// }

// while (multiplicador <= 10 && 1 <= numero && numero <= 10) {
//     resultado = parseInt(numero)*multiplicador;
//     document.write(`<p>${numero} x ${multiplicador} = ${resultado}</p>`);
//     multiplicador++;
// }


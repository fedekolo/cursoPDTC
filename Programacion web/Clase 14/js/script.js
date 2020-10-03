// EJERCICIO 1

// function saludo() {
//     alert("Bienvenido");
// }

// EJERCICIO 2

// function calculoMayor(num1,num2) {
//     if (num1 > num2) {
//         alert(`El número ${num1} es mayor que ${num2}`)
//     } else if (num1 < num2) {
//         alert(`El número ${num2} es mayor que ${num1}`)
//     } else {
//         alert(`El número ${num1} es igual que ${num2}`)
//     }
// }

// calculoMayor(prompt("Ingrese un número"), prompt("Ingrese otro número"));

// EJERCICIO 3

// function facturacion(monto,medio) {

//     if (monto < 200) {
//         alert(`El valor a abonar es $${monto}`);
//     } else if (200 < monto < 400 ) {
//         if (medio==="E") {
//             monto = monto*0.7
//             alert(`El valor a abonar es $${monto}`);
//         } else if (medio==="D") {
//             monto = monto*0.8
//             alert(`El valor a abonar es $${monto}`);
//         } else if (medio==="C") {
//             monto = monto*0.9
//             alert(`El valor a abonar es $${monto}`);
//         }
//     } else if (monto > 400) {
//         monto = monto*0.6
//         alert(`El valor a abonar es $${monto}`);
//     }
// }

// facturacion(parseInt(prompt("Ingrese el monto a abonar")), prompt("Ingrese el medio de pago").toUpperCase());

// EJERCICIO 4

// function iterarArray(array) {
   
//     // for (let i = 0; i < array.length; i++) {
//     //     console.log(array[i]);
//     // }

//     array.forEach(element => {
//         console.log(element);
//     });

// }

// iterarArray(["Fede","Lu","Gal"]);

// EJERCICIO 5

// function tirarDados(min,max) {
//     min=1;
//     max=7;
//     let random = Math.floor(Math.random() * (max - min)) + min;
//     alert("Tu número es "+random);
// }

// EJERCICIO 6

// let clicks = 0;
// function contadorDeClick() {
//     clicks++;
//     console.log(clicks);
// }
// EJERCICIO 2

class Mueble {
    constructor (material, patas, peso) {
        this.material = material;
        this.patas = patas;
        this.peso = peso;
    }

    get cantPatas () {
        return this.tienePatas();
    }

    tienePatas() {
        if (this.patas >= 1) {
            return `Tiene ${this.patas} patas`;
        } else {
            return `No tiene patas`;
        }
    }

    get flete () {
        return this.calculoPeso();
    }

    calculoPeso() {
        this.peso = parseInt(prompt("Cuanto pesa la mesa?"))
        
        if (this.peso > 15) {
            return "Necesitas un flete";
        } else {
            return "Podes llevarlo a mano";
        }
    }

}

// let mesa = new Mueble("vidrio",0,25);
// console.log(mesa.cantPatas);

// let mesa2 = new Mueble();
// console.log(mesa2.flete);

// EJERCICIO 3

class Mesa extends Mueble {
    constructor (espacio) {
        super(espacio);
        this.espacio = espacio;
    }

    get espacialidad() {
        return this.consultaEspacio();
    }

    consultaEspacio() {
        if (this.espacio==="patio" || this.espacio==="living") {
            return "La mesa puede usarse en el patio o living"
        } else {
            this.espacio = "";
            return "Error: Debe ingresar patio o living";
        }
    }
}

// let espacio = new Mesa("pati");
// console.log(espacio.espacialidad);

// EJERCICIO 4

class Silla extends Mueble {
    constructor (respaldo,altura,patas) {
        super(respaldo,altura);
        this.respaldo = respaldo;
        this.altura = altura;
        this.patas = patas;
    }

    get taburete() {
        return this.consultaTaburete();
    }

    consultaTaburete() {
        if (this.respaldo==="No" && this.altura===100 && this.patas===1) {
            return "Es un taburete"
        } else {
            return "No es un taburete";
        }
    }
}

// let taburete = new Silla("No",100,1);
// console.log(taburete.taburete);

// EJERCICIO 5

// Ni ganas


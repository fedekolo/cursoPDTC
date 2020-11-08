
const fs = require('fs');

// funcion para crear archivo
const crearArchivo = function crearArchivo() {
    fs.writeFile("nombre.txt","contenido",(error) => {
        if (error) throw error;
        console.log("El archivo se ha generado");
    }  
    )
}

// funcion para eliminar archivo
const eliminarArchivo = function eliminarArchivo() {
    fs.unlink("nombre.txt",(error) => {
        if (error) throw error;
        console.log("El archivo se ha eliminado");
    })
}

// exporto las funciones
module.exports = {crearArchivo,eliminarArchivo};
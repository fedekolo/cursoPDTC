// importo las funciones
const {crearArchivo,eliminarArchivo} = require('./modificarArchivos');

// comprobacion de archivo
const fs = require('fs');

fs.stat('nombre.txt',
    (error) => {
        if (error) throw crearArchivo();
        eliminarArchivo();
    })




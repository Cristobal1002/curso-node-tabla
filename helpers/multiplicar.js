const fs = require('fs');
const color = require('colors');

const crearArchivo = async(base, listar, hasta) => {
    
try {
    let salida = '';
    let consola = '';
    
    for (let index = 1; index <= hasta; index++) {
        consola += `${base} ${'x'.red} ${index} ${'='.red} ${index * base}\n`;
        salida += `${base} X ${index} = ${index * base}\n`;
    }

    if (listar) {
        console.log('=================='.green);
        console.log('Tabla del ', color.blue(base));
        console.log('=================='.green);
        console.log(consola);
    }

    fs.writeFileSync(`./salida/Tabla${base}.txt`, salida);
    return(`Archivo Tabla${base}.txt`);
    
} catch (err) {
    throw err;
}
    

}

// Esta es la manera de exportar en node
module.exports = {
    crearArchivo
}
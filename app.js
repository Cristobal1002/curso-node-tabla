
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

//const color = require('colors'); Forma que dice la documentación
require('colors');//Así se puede usar

console.clear();

//Con esto puedo ver lo que llega en argv
//console.log(argv); 

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.green,'creado'))
.catch(err => console.log(err.red));



//Ejemplo para saber de donde se toman los argumento de consola
/*const [,,arg = 'base=5'] = process.argv;
const [,base] = arg.split('=');
console.log(base);*/

//const base = 300;


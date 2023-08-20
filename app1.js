const {crearArchivo} = require ('./help/multi.js');
const argv = require ('./config/yargs');
var colors = require('colors/safe');

// ver procesos del argv
//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.base); 


//const base = 5;

crearArchivo(argv.b, argv.l, argv.h)
 .then(nombreArchivo => console.log(nombreArchivo + colors.green(' creado')))
 .catch(err => console.log(err));

  // es una forma de modificar la tabla sin package
//const [, , arg3='base = 9'] = process.argv;
//const [, base = 9] = arg3.split('=');
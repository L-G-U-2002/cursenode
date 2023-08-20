

const argv = require('yargs')
     .option('b',{
        alias:'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })

    .option('h',{
        alias:'hasta',
        type: 'number',
        describe: 'es hasta cuanto quieres que multiplique'
    }) 

    .option('l',{
        alias:'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })       

    .check((argv, option)=>{
        if (isNaN(argv.b)){
        throw 'La base tiene que ser un numero'
        } return true;
    }) 
    .check((argv, option)=>{
        if (isNaN(argv.h)){
          throw 'La base tiene que ser un numero'
        } return true;
    })     
            
    .argv;

module.exports = argv;
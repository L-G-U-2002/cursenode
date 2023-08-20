const fs = require ('fs');
const colors = require('colors/safe');
const crearArchivo =async (base = 5, listar = false, h=1) => {
    try{
        
        let salida = '';
        let consola = '';
        for( let i = 0; i <= h ; i++){
    
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += colors.yellow(`${base}`) + colors.red('x') + colors.blue(`${i}`) + colors.red('=') + colors.green( `${base * i}\n`);     
    }    
     if(listar){
        console.log(colors.blue('==================='));
        console.log(colors.rainbow('tabla del'),base);
        console.log(colors.blue('==================='));
        console.log(consola);
     }
   
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return colors.rainbow(`tabla-${base}.txt`);

    }catch(error){
        throw error;

    }
        
}
// module.exports sirve para importar archivos hacia otro archivo
module.exports = {
    crearArchivo
}

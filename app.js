//imprimir la tabla del 5
//callback es una funcion que se ejecutara cuando todo el procedimiento termine
const fs = require ('fs');

console.log('===================');
console.log('tabla del 5');
console.log('===================');

const base = 3;
let salida = '';
for( let i = 0; i < 13; i++){

    salida += `${base} x ${i} = ${base * i}\n`;
}

console.log(salida);
//cexiosten 2 maneras de guardar archivos 

// uno con writeFile
fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
    if (err) throw err;

    console.log(`tabla-${base}.txt`);
})

// y con writeFileSync (simplifica un poco el codigo):

//fs.writeFileSync(`tabla-${base}.txt`, salida);
//console.log(`tabla-${base}.txt`);



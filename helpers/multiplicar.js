const fs = require('fs');
const crearArchivoPromesa=(base = 5)=>{
    return new Promise((resolve,rejects)=>{
let salida=``;

for (let index = 1; index <= 10; index++) {
   
    salida+= `${base} x  ${index}  =   ${index * base}\n` ;
    
}

console.log(salida);
//si en la ruta no indicamos y ponemos el nombre del fichero la creará donde este el js.
fs.writeFile('Tabla-del-5.txt',salida,(err)=>{
if (err) throw err;

console.log('Se creo correctamente');
})
});
}

module.exports={
    crearArchivoPromesa
}


// const crearArchivoAsyn=(async( base = 5)=>{
// let salida=``;
// for (let index = 1; index <= 10; index++) {
   
//     salida+= `${base} x  ${index}  =   ${index * base}\n` ;
    
// }
// console.log(salida);
// //si en la ruta no indicamos y ponemos el nombre del fichero la creará donde este el js.
// fs.writeFileSync('Tabla-del-5.txt',salida);
// return 'Se creo correctamente';
// });



// module.exports={
//     crearArchivoAsyn
// }
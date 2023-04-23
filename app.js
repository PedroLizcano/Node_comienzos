
// const {crearArchivoAsyn }= require('./helpers/multiplicar');
const {crearArchivoPromesa}= require('./helpers/multiplicar');


let numero= 5;

// crearArchivoAsyn(numero)
// .then(nombreArchivo=>console.log(nombreArchivo,'Creado'))
// .catch(err=>console.log(err));

crearArchivoPromesa(numero)
.then(nombreArchivo=>console.log(nombreArchivo,'Creado'))
.catch(err=>console.log(err));

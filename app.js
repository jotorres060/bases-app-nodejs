const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

crearArchivo(argv.b, argv.h, argv.l)
  .then((fileName) => console.log( `${ fileName } creado`.rainbow ))
  .catch((err) => console.log( err ));

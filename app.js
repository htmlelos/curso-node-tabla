require('colors');
const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

crearArchivo(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) => console.log(`${nombreArchivo} creado.`.blue))
  .catch((err) => console.error(err));

const argv = require('yargs')
  .options({
    'b': {
      alias: 'base',
      description: 'Base a calcular',
      demandOption: true,
      type: 'number'
    },
    'h': {
      alias: 'hasta',
      description: 'Número hasta el que se hará la multiplicación',
      default: 10,
      type: 'number'
    },
    'l': {
      alias: 'listar',
      description: 'Imprime el resultado en consola',
      default: false,
      type: 'boolean'
    }
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser numérica.';
    } else {
      return true;
    }
  })
  .argv;

module.exports = argv;

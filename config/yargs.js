const  opt = {
  base: {
    demand: true, 
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
};

const argv = require('yargs')
  .command('listar','Impreme en consola la tabla de multiplicar', opt)
  .command('crear', 'crear nuevas trablas de multiplicar', opt)
  .help()
  .argv;

module.exports = {
  argv
}


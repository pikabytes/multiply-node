const {argv} = require('./config/yargs');
const color = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando) {
  case 'listar' :
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: `+ color.red(`${archivo}`)))
      .catch(err => console.log(err))
    break;
  default:
    console.log('comando no reconocido');
    break;
}


// en process estan los argumentos argv
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];



const fs = require('fs');
const color = require('colors');


let listarTabla = (base, limite=10) => {
  console.log('======================'.green);
  console.log(`====tabla de ${base}====`.green);
  console.log('======================'.green);
  for(let i=1; i<limite; i++){
    console.log(`${base} * ${i} = ${base * i}`);
  }
};
 


let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if(!Number(base))
      return reject(`${base} no es un numero`);
    let data = '';
    
    for(let i= 1; i<=limite; i++){
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) return reject(err);
      else resolve(`tabla=${base}.txt`);
    });
    
  });
}
  
module.exports = {
  crearArchivo,
  listarTabla
};

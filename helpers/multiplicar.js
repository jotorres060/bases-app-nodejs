const { writeFileSync } = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, hasta = 10, listar = false) => {
  try {
    const fileName = `Tabla-del-${ base }.txt`;
    let data = '';
    let consola = '';

    for (let index = 1; index <= hasta; index++) {
      data += `${ base } x ${ index } = ${ base * index }\n`;
      consola += `${ base } ${ 'x'.brightGreen } ${ index } ${ '='.brightGreen } ${ base * index }\n`;
    }

    if (listar) {
      console.log(colors.bgBlack.brightGreen('================='));
      console.log(colors.bgBlack.brightGreen(`   Tabla del ${ colors.brightBlue(base) } `));
      console.log(colors.bgBlack.brightGreen('================='));
      console.log(colors.bgBlack.brightBlue(consola));
    }

    writeFileSync(`./data/${ fileName }`, data);
    return fileName;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  crearArchivo
}

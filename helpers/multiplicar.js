const { writeFileSync } = require('fs');

const crearArchivo = async (base = 5) => {
  try {
    console.log('=================');
    console.log(`   Tabla del ${ base } `);
    console.log('=================');

    const fileName = `Tabla-del-${ base }.txt`;
    let data = '';

    for (let index = 1; index <= 10; index++) {
      data += `${ base } x ${ index } = ${ base * index }\n`;
    }

    console.log(data);

    writeFileSync(fileName, data);
    return fileName;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  crearArchivo
}

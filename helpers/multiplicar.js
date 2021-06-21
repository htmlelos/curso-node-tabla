const fs = require('fs');
const colores = require('colors');

const crearArchivo = async (base = 5, list = false, hasta = 10) => {
  try {
    let salida = '',
      consola = '';
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${
        (base * i).toString().yellow
      }\n`;
    }

    if (list) {
      console.log('-----------------'.inverse);
      console.log(`   Tabla del ${base}`.inverse);
      console.log('-----------------'.inverse);
      console.log(consola);
    }

    const nombreArchivo = `./salida/tabla-${base}.txt`;

    await fs.writeFileSync(nombreArchivo, salida);

    return nombreArchivo;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};

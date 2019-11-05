const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        if (!resp) {
            throw new Error(`No existe un pais llamado ${argv.direccion}`);
            return false;
        }
        getInfo(resp.lat, resp.lng, resp.direccion);
    })
    .catch(); */


/*clima.getClima(40.750000, -74.00000)
    .then(console.log)
    .catch(console.log); */


//getInfo = (direccion) => {


//el clima de tal lugar es de tal temp


//no se pudo determinar el clima de el lugar xxxx


//}



const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de la ciudad ${coords.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;

    }




    /*
        clima.getClima(lat, lng)
            .then(temp => {
                console.log(`La temperatura de ${direccion} es de ${temp}ºC`);
            }); */

}


getInfo(argv.direccion).then(console.log).catch(console.log);
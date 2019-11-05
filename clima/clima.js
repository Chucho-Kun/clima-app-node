const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=daf0ab05705b8fd31bf4aa1ec9d19093`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
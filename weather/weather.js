const axios = require('axios');


const getWeather = async(lat, lng) => {

   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d7579ba36718d1624621aeee8d382e3f&units=metric`)

   return response.data.main.temp
}


module.exports = {
   getWeather
}
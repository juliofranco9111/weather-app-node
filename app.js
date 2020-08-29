const place = require('./place/place');
const weather = require('./weather/weather');
const { getPlaceLatLng } = require('./place/place');
const { getWeather } = require('./weather/weather');

const argv = require('yargs').options({
   direction: {
      alias: 'd',
      desc: 'Select a City to get realtime weather'
   }
}).argv;

console.log(argv.direction);




const getInfo = async (direction) => {

   
   try{
      const coords = await place.getPlaceLatLng(direction);
      const temp = await weather.getWeather(coords.lat, coords.lng);

      return `El clima de ${coords.direction} es de ${temp} º.`

   }
   catch (e){
      return `No se puede determinar el clima de ${coords.direction}`
   }



}

getInfo(argv.direction)
   .then(console.log)
   .catch(console.log)

